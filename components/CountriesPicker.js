import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Picker from "./Picker";

const ALL_COUNTRIES_QUERY = gql`
  query ALL_COUNTRIES_QUERY {
    countries {
      id
      name
      flag
    }
  }
`;
export default class CountriesPicker extends Component {
  render() {
    return (
      <Query query={ALL_COUNTRIES_QUERY}>
        {({ data, loading, error }) => {
          return (
            <Picker items={data.countries} keyValue="id" itemValue="name" />
          );
        }}
      </Query>
    );
  }
}
