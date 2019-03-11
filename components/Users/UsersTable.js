import Users from "./Users.apollo";
import UserPermissions from "./UserPermission.apollo";
import { FaUserSecret, FaUserTimes, FaUserSlash } from "react-icons/fa";

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
                        .sort((a, b) => {
                          if (a > b) {
                            return 1;
                          } else if (a < b) return -1;
                          else return 0;
                        })
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
                              <FaUserSecret />
                            </button>
                          )}
                        </UserPermissions>
                      )}

                      {!user.permissions.includes("ADMIN") && (
                        <button>
                          <FaUserSlash />
                        </button>
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
                              <FaUserTimes />
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
