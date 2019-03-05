import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import Form from "./styles/Form.styled";
import { ALL_TEAMS_QUERY } from "./Teams";

const CREATE_TEAM_MUTATION = gql`
  mutation CREATE_TEAM_MUTATION($name: String) {
    createTeam(name: $name) {
      id
      name
    }
  }
`;
export default class CreateTeam extends Component {
  state = {
    name: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation
        mutation={CREATE_TEAM_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_TEAMS_QUERY }]}
      >
        {(createTeam, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createTeam();
              this.setState({ name: "" });
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Create Team</legend>
              <Error error={error} />
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ex:Manchester United"
                  required
                  onChange={this.handelChange}
                  value={this.state.name}
                />
              </label>
              <button type="submit">Create Team</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
