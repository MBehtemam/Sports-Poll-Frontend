const Picker = ({ items, onChange, defaultValue, keyValue, itemValue }) => (
  <select>
    {items.map(item => (
      <option key={item[keyValue]}>{item[itemValue]}</option>
    ))}
  </select>
);
export default Picker;
