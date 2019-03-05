import React, { Component } from "react";
import { Mutation, Query } from "react-apollo";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import Form from "./styles/Form.styled";
import Picker from "./Picker";
import { ALL_POLLS_QUERY } from "./Polls";

const CREATE_POLL_INFORMATION_QUERY = gql`
  query CREATE_POLL_INFORMATION_QUERY {
    groups {
      id
      name
    }
    teams {
      id
      name
    }
    sports {
      id
      name
    }
    countries {
      id
      name
    }
    pollStates {
      id
      name
      value
    }
  }
`;

const CREATE_POLL_MUTATION = gql`
  mutation CREATE_POLL_MUTATION(
    $country: String
    $away: String
    $home: String
    $group: String
    $state: String
    $sport: String
  ) {
    createPoll(
      country: $country
      away: $away
      home: $home
      group: $group
      state: $state
      sport: $sport
    ) {
      id
    }
  }
`;

export default class CreatePoll extends Component {
  state = {
    country: "",
    group: "",
    sport: "",
    country: "",
    state: "",
    away: "",
    home: ""
  };
  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Query query={CREATE_POLL_INFORMATION_QUERY}>
        {({ data }) => (
          <Mutation
            mutation={CREATE_POLL_MUTATION}
            variables={this.state}
            refetchQueries={[{ query: ALL_POLLS_QUERY }]}
          >
            {(createPoll, { loading, error }) => (
              <Form
                onSubmit={async e => {
                  e.preventDefault();
                  const res = await createPoll();
                }}
              >
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                  <legend>Create Poll</legend>
                  <label htmlFor="country" name="country">
                    Country:
                    <Picker
                      onChange={val => this.setState({ country: val })}
                      items={data.countries}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <label htmlFor="group" name="group">
                    Group:
                    <Picker
                      onChange={val => this.setState({ group: val })}
                      items={data.groups}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <label htmlFor="sport" name="sport">
                    Sport:
                    <Picker
                      onChange={val => this.setState({ sport: val })}
                      items={data.sports}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <label htmlFor="state" name="state">
                    State:
                    <Picker
                      onChange={val => this.setState({ state: val })}
                      items={data.pollStates}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <label htmlFor="away" name="away">
                    Away Team:
                    <Picker
                      onChange={val => this.setState({ away: val })}
                      items={data.teams}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <label htmlFor="home" name="home">
                    Home Team:
                    <Picker
                      onChange={val => this.setState({ home: val })}
                      items={data.teams}
                      itemValue="name"
                      keyValue="id"
                    />
                  </label>
                  <button type="submit">Create Poll</button>
                </fieldset>
              </Form>
            )}
          </Mutation>
        )}
      </Query>
    );
  }
}
export { CREATE_POLL_INFORMATION_QUERY };
