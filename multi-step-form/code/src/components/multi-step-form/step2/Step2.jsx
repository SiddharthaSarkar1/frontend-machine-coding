import React from "react";

const Step2 = ({ inputs, onChange = () => {}, stepKey }) => {
  const { phone, city } = inputs;
  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }
  return (
    <fieldset>
      <legend>Contact Information</legend>

      <div className="control-row">
        <label htmlFor="phone">Phone</label>
        <input
          onChange={handleChange("phone")}
          type="text"
          id="phone"
          value={phone}
        />
      </div>

      <div className="control-row">
        <label htmlFor="city">City</label>
        <input
          onChange={handleChange("city")}
          type="text"
          id="city"
          value={city}
        />
      </div>
    </fieldset>
  );
};

export default Step2;
