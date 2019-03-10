const Picker = ({ items, onChange, defaultValue, keyValue, itemValue }) => (
  <select
    onChange={e => onChange(e.target.value)}
    defaultValue={defaultValue || ""}
  >
    <option key="srandom-10-1" disabled={true} value="">
      ------------
    </option>
    {items.map(item => (
      <option key={item[keyValue]} value={item[keyValue]}>
        {item[itemValue]}
      </option>
    ))}
  </select>
);
export default Picker;
