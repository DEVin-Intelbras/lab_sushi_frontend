import React from 'react';

function Select({ label, name, options, value, onChange, testId }) {
  return (
    <div>
      <label> {label} </label>
      <select name={name} value={value} onChange={onChange} data-testid={testId} >
        {options.map(item => <option
          data-testid={`option-${testId}`}
          key={item.value}
          value={item.value}>
          {item.label}
        </option>)}
      </select>
    </div>
  );
}

export default Select;