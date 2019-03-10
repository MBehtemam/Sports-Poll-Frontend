import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form.styled";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "../components/Users/User.apollo";

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    singin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;
export default class Signin extends Component {
  state = {
    email: "",
    password: ""
  };
  render() {
    return (
      <Mutation
        mutation={SIGN_IN_MUTATION}
        variables={this.state}
        refetchQueries={[
          { query: CURRENT_USER_QUERY, variables: { v: Math.random() } }
        ]}
      >
        {(singIn, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              try {
                const res = await singIn();
                if (res.data.singin) {
                  //redirect to account page
                  Router.push("/account");
                }
              } catch (err) {
                console.log(err);
              }
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <Error error={error} />
              <h2>Sign In</h2>
              <label htmlFor='name' name='name'>
                Email:
                <input
                  type='email'
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </label>
              <label htmlFor='name' name='name'>
                Password:
                <input
                  type='password'
                  onChange={e => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </label>
              <button type='submit'>Sign In</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
