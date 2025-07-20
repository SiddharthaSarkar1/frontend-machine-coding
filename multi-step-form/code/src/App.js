import React, { useState } from "react";
import MultiStepForm from "./components/multi-step-form/MultiStepForm.jsx";

const App = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [cancel, setCancel] = useState(false);

  function onSubmit(data) {
    setFormSubmitted(true);
  }

  function onCancel() {
    setCancel(true);
  }
  return (
    <div>
      {formSubmitted && <h1>Form Submitted Successfully!</h1>}
      {!formSubmitted && (
        <MultiStepForm onSubmit={onSubmit} onCancel={onCancel} />
      )}
      {cancel && <h1>Form Cancelled by User.</h1>}
    </div>
  );
};

export default App;
