import Columns from "../styles/Columns";
import CreateGroup from "./CreateGroup";
import GroupsTable from "./GroupsTable";

const GroupsManager = () => (
  <Columns>
    <CreateGroup />
    <GroupsTable />
  </Columns>
);
export default GroupsManager;
