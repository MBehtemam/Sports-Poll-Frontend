import CreatePollState from "./CreatePollState";
import PollStatesTable from "./PollStatesTable";
import Columns from "../styles/Columns";

const PollStateManager = () => (
  <Columns>
    <CreatePollState />
    <PollStatesTable />
  </Columns>
);

export default PollStateManager;
