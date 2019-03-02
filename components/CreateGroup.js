import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import Form from "./styles/Form.styled";

const CREATE_GROUP_MUTATION = gql`
  mutation CREATE_GROUP_MUTATION($name: String) {
    createGroup(name: $name) {
      id
      name
    }
  }
`;
export default class CreateGroup extends Component {
  state = {
    name: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation mutation={CREATE_GROUP_MUTATION} variables={this.state}>
        {(createGroup, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createGroup();
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ex:mygroup"
                  required
                  onChange={this.handelChange}
                  value={this.state.name}
                />
              </label>
              <button type="submit">Create Group</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
