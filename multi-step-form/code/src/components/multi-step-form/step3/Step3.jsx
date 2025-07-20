import React from "react";

const Step3 = ({ inputs, onChange = () => {}, stepKey }) => {
  const { salary, bank } = inputs;
  function handleChange(inputKey) {
    return (event) => {
      onChange({ value: event.target.value, stepKey, inputKey });
    };
  }
  return (
    <fieldset>
      <legend>Finantial Information</legend>

      <div className="control-row">
        <label htmlFor="salary">Salary</label>
        <input
          onChange={handleChange("salary")}
          type="text"
          id="salary"
          value={salary}
        />
      </div>

      <div className="control-row">
        <label htmlFor="bank">Bank</label>
        <input
          onChange={handleChange("bank")}
          type="text"
          id="bank"
          value={bank}
        />
      </div>
    </fieldset>
  );
};

export default Step3;
