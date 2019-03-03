import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form.styled";
import Error from "./ErrorMessage";

const SIGN_UP_MUTATION = gql`
  mutation SIGN_UP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    singup(email: $email, password: $password, name: $name) {
      id
      name
      email
    }
  }
`;
export default class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: ""
  };
  render() {
    return (
      <Mutation mutation={SIGN_UP_MUTATION} variables={this.state}>
        {(singUp, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await singUp();
              //   this.setState({ name: "", email: "", password: "" });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <h2>Signup</h2>
              <label htmlFor="name" name="name">
                Name:
                <input
                  type="text"
                  onChange={e => this.setState({ name: e.target.value })}
                  value={this.state.name}
                />
              </label>
              <label htmlFor="name" name="name">
                Email:
                <input
                  type="email"
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </label>
              <label htmlFor="name" name="name">
                Password:
                <input
                  type="password"
                  onChange={e => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </label>
              <button type="submit">Sign Up</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
