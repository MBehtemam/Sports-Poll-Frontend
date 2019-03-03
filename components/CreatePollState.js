import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form.styled";
import Error from "./ErrorMessage";
import { CREATE_POLL_INFORMATION_QUERY } from "./CreatePoll";
const CREATE_POLL_STATE_MUTATION = gql`
  mutation CREATE_SPORT_MUTATION($name: String, $value: String) {
    createPollState(name: $name, value: $value) {
      id
      name
      value
    }
  }
`;

export default class CreatePollState extends Component {
  state = {
    name: "",
    value: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Mutation
        mutation={CREATE_POLL_STATE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CREATE_POLL_INFORMATION_QUERY }]}
      >
        {(createPollState, { loading, error, called, data }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createPollState();
              this.setState({ name: "", value: "" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <legend>Create Poll States</legend>
              <label htmlFor="name">
                Name:
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="ex:Not Started"
                  required
                  onChange={this.handelChange}
                  value={this.state.name}
                />
              </label>
              <label htmlFor="value">
                Value:
                <input
                  type="text"
                  id="value"
                  name="value"
                  placeholder="NOT_STARTED"
                  required
                  onChange={this.handelChange}
                  value={this.state.value}
                />
                <button type="submit">Create Poll State</button>
              </label>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}
