import React from "react";
import InputText from "./input-text/InputText.jsx";
import Button from "./button/Button.jsx";

const ButtonLabel = "Clear";

const AutoComplete = ({ suggestions }) => {
  return (
    <div className="autocomplete">
      <InputText />
      <Button label={ButtonLabel} />
    </div>
  );
};

export default AutoComplete;
