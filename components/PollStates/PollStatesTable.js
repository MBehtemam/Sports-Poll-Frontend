import PollStates from "./PollStates.apollo";

const PollStatesTable = props => (
  <PollStates>
    {({ data: { pollStates } }) => {
      if (pollStates && pollStates.length > 0) {
        return (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                {/* <th>Value</th> */}
              </tr>
            </thead>
            <tbody>
              {pollStates.map((pollState, index) => (
                <tr key={pollState.id}>
                  <td>{index++}</td>
                  <td>{pollState.name}</td>
                  {/* <td>{pollState.value}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        );
      } else {
        return <p>No Poll State</p>;
      }
    }}
  </PollStates>
);
export default PollStatesTable;
