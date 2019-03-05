import Sports from "./Sports";

const SportsTable = props => (
  <Sports>
    {({ data: { sports } }) => {
      if (sports) {
        return (
          <div>
            <h1>Manage Sports</h1>
            <table>
              <thead>
                <th>#</th>
                <th>Icon</th>
                <th>Name</th>
              </thead>
              <tbody>
                {sports.map((sport, index) => (
                  <tr key={sport.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={`/static/sports/${sport.icon}.png`}
                      />
                    </td>
                    <td>{sport.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No Sports exists</p>;
      }
    }}
  </Sports>
);
export default SportsTable;
