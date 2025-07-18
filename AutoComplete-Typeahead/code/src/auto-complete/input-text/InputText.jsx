import React from "react";

const InputText = ({ value, onChange = () => {} }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <input
      className="input-box"
      type="text"
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputText;
