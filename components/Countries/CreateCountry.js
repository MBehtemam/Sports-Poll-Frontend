import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../styles/Form.styled";
import Error from "../ErrorMessage";
import { ALL_COUNTRIES_QUERY } from "./Countries";

const CREATE_COUNTRY_MUTATION = gql`
  mutation CREATE_COUNTRY_MUTATION($name: String, $flag: String) {
    createCountry(name: $name, flag: $flag) {
      id
      name
      flag
    }
  }
`;

export default class CreateCountry extends Component {
  state = {
    name: "",
    flag: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation
        mutation={CREATE_COUNTRY_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_COUNTRIES_QUERY }]}
      >
        {(createCountry, { loading, error, called, data }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createCountry();
              this.setState({ name: "", flag: "" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Create Country</legend>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="country name ex: sweden"
                  required
                  onChange={this.handelChange}
                  value={this.state.name}
                />
              </label>
              <label htmlFor="flag">
                Flag Name:
                <input
                  type="text"
                  id="flag"
                  name="flag"
                  placeholder="flag name ex: se"
                  required
                  onChange={this.handelChange}
                  value={this.state.flag}
                />
                <button type="submit">Create Country</button>
              </label>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
