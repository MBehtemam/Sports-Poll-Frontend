import Columns from "./styles/Columns";
import CreateCountry from "./CreateCountry";
import CountryTable from "./CountriesTable";
import CountriesTable from "./CountriesTable";

const CountriesManager = () => (
  <Columns>
    <CreateCountry />
    <CountryTable />
  </Columns>
);
export default CountriesManager;
