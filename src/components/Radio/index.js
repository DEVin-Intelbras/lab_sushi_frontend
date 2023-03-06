import React from "react";

function RadioInput({ options, onChange, name, value }) {


  return (
    <div>
      {options.map((option) => (
        <label key={option.value}>
          <input
            name={name}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioInput;