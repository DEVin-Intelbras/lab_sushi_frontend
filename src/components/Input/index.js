import React from 'react';

// import { Container } from './styles';

function Input({ label, value, placeholder, onChange, name, onBlur }) {
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
      />
    </div>
  )
    ;
}

export default Input;