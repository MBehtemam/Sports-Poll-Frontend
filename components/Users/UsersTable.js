import Users from "./Users.apollo";
import UserPermissions from "./UserPermission.apollo";

const UsersTable = () => (
  <Users>
    {({ data }) => {
      if (data.users && data.users.length > 0) {
        return (
          <div style={{ margin: "auto auto" }}>
            <table border='1'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Permissions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user, userIndex) => (
                  <tr key={user.id}>
                    <td>{userIndex + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.permissions.toString()}</td>
                    <td>
                      {!user.permissions.includes("ADMIN") && (
                        <UserPermissions>
                          {updateUserPermissions => (
                            <button
                              onClick={() =>
                                updateUserPermissions({
                                  variables: {
                                    permissions: ["USER", "ADMIN"],
                                    userId: user.id
                                  }
                                })
                              }
                            >
                              Make Admin
                            </button>
                          )}
                        </UserPermissions>
                      )}

                      {!user.permissions.includes("ADMIN") && (
                        <button>Delete</button>
                      )}
                      {user.permissions.includes("ADMIN") && (
                        <UserPermissions>
                          {updateUserPermissions => (
                            <button
                              onClick={() =>
                                updateUserPermissions({
                                  variables: {
                                    permissions: ["USER"],
                                    userId: user.id
                                  }
                                })
                              }
                            >
                              Remove Admin Permission
                            </button>
                          )}
                        </UserPermissions>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No User</p>;
      }
    }}
  </Users>
);
export default UsersTable;
