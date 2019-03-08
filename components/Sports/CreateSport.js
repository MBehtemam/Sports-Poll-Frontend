import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../styles/Form.styled";
import Error from "../ErrorMessage";
import Success from "../SuccessMessage";
import { ALL_SPORTS_QUERY } from "./Sports";

const CREATE_SPORT_MUTATION = gql`
  mutation CREATE_SPORT_MUTATION($name: String, $icon: String) {
    createSport(name: $name, icon: $icon) {
      id
      name
      icon
    }
  }
`;

export default class CreateSport extends Component {
  state = {
    name: "",
    icon: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation
        mutation={CREATE_SPORT_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_SPORTS_QUERY }]}
      >
        {(createSport, { loading, error, called, data }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createSport();
              this.setState({ name: "", icon: "" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Create Sport</legend>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ex:Football"
                  required
                  onChange={this.handelChange}
                  value={this.state.name}
                />
              </label>
              <label htmlFor="icon">
                Icon:
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  placeholder="football"
                  required
                  onChange={this.handelChange}
                  value={this.state.icon}
                />
                <button type="submit">Create Sport</button>
              </label>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
