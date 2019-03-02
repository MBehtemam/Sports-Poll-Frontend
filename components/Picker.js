const Picker = ({ items, onChange, defaultValue, keyValue, itemValue }) => (
  <select onChange={e => onChange(e.target.value)}>
    {items.map(item => (
      <option key={item[keyValue]} value={item[keyValue]}>
        {item[itemValue]}
      </option>
    ))}
  </select>
);
export default Picker;
