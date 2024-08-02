import React from 'react';

const InputField = ({handLeChange, title, value, name }) => {
  return (
    <label className="sidebar-label-container">
        <input type="radio"
        name={name}
       
        value={value}
        onChange={handLeChange} />
        <span className="checkmark"></span>{title}
    </label>
  );
}

export default InputField;
