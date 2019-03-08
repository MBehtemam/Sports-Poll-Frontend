import { Mutation, Query } from "react-apollo";
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
const Countries = props => (
  <Query {...props} query={ALL_COUNTRIES_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default Countries;
export { ALL_COUNTRIES_QUERY };
