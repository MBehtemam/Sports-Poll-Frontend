import Columns from "../styles/Columns";
import CreateTeam from "./CreateTeam";
import TeamsTable from "./TeamsTable";

const TeamsManager = () => (
  <Columns>
    <CreateTeam />
    <TeamsTable />
  </Columns>
);
export default TeamsManager;
