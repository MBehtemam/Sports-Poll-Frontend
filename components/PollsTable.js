import Polls from "./Polls";

const PollsTable = props => (
  <Polls>
    {({ data: { polls } }) => {
      if (polls && polls.length > 0) {
        return (
          <div>
            <h1>Manage polls</h1>
            <table>
              <thead>
                <th>#</th>
                <th>Icon</th>
                <th>Name</th>
                <th>State</th>
              </thead>
              <tbody>
                {polls.map((poll, index) => (
                  <tr key={poll.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={`/static/sports/${poll.sport.icon}.png`}
                      />
                    </td>
                    <td>{`${poll.home.name} - ${poll.away.name}`}</td>
                    <td>{poll.state.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No polls exists</p>;
      }
    }}
  </Polls>
);
export default PollsTable;
