import Countries from "./Countries";

const CountriesTable = props => (
  <Countries>
    {({ data: { countries } }) => {
      if (countries) {
        return (
          <div>
            <h1>Manage Countries</h1>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Flag</th>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country, index) => (
                  <tr key={country.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        style={{ width: "25px", height: "25px" }}
                        src={`/static/flags/${country.flag}.svg`}
                      />
                    </td>
                    <td>{country.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      } else {
        return <p>No Country exists</p>;
      }
    }}
  </Countries>
);
export default CountriesTable;
