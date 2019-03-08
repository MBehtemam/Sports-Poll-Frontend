import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_GROUPS_QUERY = gql`
  query ALL_GROUPS_QUERY {
    groups {
      id
      name
    }
  }
`;
const Groups = props => (
  <Query {...props} query={ALL_GROUPS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);
export default Groups;
export { ALL_GROUPS_QUERY };
