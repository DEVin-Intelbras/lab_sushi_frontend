import React from 'react';

function Input({
  label,
  value,
  placeholder = '',
  onChange,
  name,
  onBlur,
  type = 'text'
}) {
  return (
    <div>
      <label htmlFor={name}> {label} </label>
      <input
        className="input"
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        id={name}
      />
    </div>
  )
    ;
}

export default Input;