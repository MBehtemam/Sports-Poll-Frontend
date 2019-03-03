import { Query } from "react-apollo";
import gql from "graphql-tag";

const CURRENT_USER_QUERY = gql`
  query CURRENT_USER_QUERY {
    user {
      id
      email
      name
      permissions
    }
  }
`;
const User = props => (
  <Query {...props} query={CURRENT_USER_QUERY} fetchPolicy="cache-and-network">
    {payload => props.children(payload)}
  </Query>
);
export default User;
export { CURRENT_USER_QUERY };
