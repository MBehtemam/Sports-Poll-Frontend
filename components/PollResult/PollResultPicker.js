import Picker from "../Picker";
const results = [
  { id: "DRAW", name: "DRAW" },
  { id: "HOME_WIN", name: "Home Win" },
  { id: "AWAY_WIN", name: "Away Win" }
];

const PollResultPicker = props => (
  <Picker
    items={results}
    itemValue="name"
    keyValue="id"
    defaultValue={props.defaultValue}
    onChange={d => props.onChange(d)}
  />
);
export default PollResultPicker;
