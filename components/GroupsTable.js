import Groups from "./Groups";

const GroupsTable = props => (
  <Groups>
    {({ data: { groups } }) => {
      if (groups) {
        return (
          <div>
            <h1>Manage Groups</h1>
            <table>
              <thead>
                <th>#</th>
                <th>Name</th>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr key={group.id}>
                    <td>{index + 1}</td>
                    <td>{group.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No Group exists</p>;
      }
    }}
  </Groups>
);
export default GroupsTable;
