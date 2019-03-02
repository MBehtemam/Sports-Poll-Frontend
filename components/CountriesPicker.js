import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

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
      <select>
        <Query query={ALL_COUNTRIES_QUERY}>
          {({ data, loading, error }) => {
            return data.countries.map(country => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ));
          }}
        </Query>
      </select>
    );
  }
}
