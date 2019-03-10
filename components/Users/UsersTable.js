import Users from "./Users.apollo";
import UserPermissions from "./UserPermission.apollo";

const UsersTable = () => (
  <Users>
    {({ data }) => {
      if (data.users && data.users.length > 0) {
        return (
          <div style={{ margin: "auto auto" }}>
            <table border="1">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Permissions</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user, userIndex) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>
                      {user.permissions
                        .sort((a, b) => b - a)
                        .map(p => p[0].toUpperCase())
                        .join(",")}
                    </td>
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
                              MA
                            </button>
                          )}
                        </UserPermissions>
                      )}

                      {!user.permissions.includes("ADMIN") && (
                        <button>R</button>
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
                              RA
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
