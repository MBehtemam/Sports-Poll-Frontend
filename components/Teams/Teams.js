import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_TEAMS_QUERY = gql`
  query ALL_TEAMS_QUERY {
    teams {
      id
      name
    }
  }
`;
const TEAMS = props => (
  <Query {...props} query={ALL_TEAMS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default TEAMS;
export { ALL_TEAMS_QUERY };
