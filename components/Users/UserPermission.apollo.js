import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_USERS_QUERY } from "./Users.apollo";

const UPDATE_USER_PERMISSION_MUTATION = gql`
  mutation UPDATE_USER_PERMISSION_MUTATION(
    $permissions: [Permission]!
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
    }
  }
`;

const UserPermission = props => (
  <Mutation
    mutation={UPDATE_USER_PERMISSION_MUTATION}
    refetchQueries={[{ query: ALL_USERS_QUERY }]}
  >
    {(updatePermissions, { loading, error }) =>
      props.children(updatePermissions)
    }
  </Mutation>
);
export default UserPermission;
export { UPDATE_USER_PERMISSION_MUTATION };
