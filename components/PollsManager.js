import Columns from "./styles/Columns";
import PollsTable from "./PollsTable";
import CreatePoll from "./CreatePoll";

const PollsManager = () => (
  <Columns>
    <CreatePoll />
    <PollsTable />
  </Columns>
);
export default PollsManager;
