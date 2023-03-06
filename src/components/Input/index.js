import React from 'react';

function Input({ label, value, placeholder, onChange, name, onBlur, type = "text" }) {
  return (
    <div>
      <label> {label} </label>
      <input
        className="input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        type={type}
        aria-label={name}
      />
    </div>
  )
    ;
}

export default Input;