import Teams from "./Teams";

const TeamsTable = props => (
  <Teams>
    {({ data: { teams } }) => {
      if (teams) {
        return (
          <div>
            <h1>Manage teams</h1>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {teams.map((team, index) => (
                  <tr key={team.id}>
                    <td>{index + 1}</td>

                    <td>{team.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No Team exists</p>;
      }
    }}
  </Teams>
);
export default TeamsTable;
