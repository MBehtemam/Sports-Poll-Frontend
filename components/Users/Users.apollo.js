import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;
const User = props => (
  <Query {...props} query={ALL_USERS_QUERY}>
    {payload => props.children(payload)}
  </Query>
);

export default User;
export { ALL_USERS_QUERY };
