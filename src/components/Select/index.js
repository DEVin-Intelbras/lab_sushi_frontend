import React from 'react';

function Select({ label, name, options, value, onChange }) {
  return (
    <div>
      <label> {label} </label>
      <select name={name} value={value} onChange={onChange}>
        {options.map(item => <option key={item.value} value={item.value}>{item.label}</option>)}
      </select>
    </div>
  );
}

export default Select;