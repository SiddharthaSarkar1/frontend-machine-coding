import React, { useState } from "react";
import Step1 from "./step1/Step1.jsx";
import Step2 from "./step2/Step2.jsx";
import Step3 from "./step3/Step3.jsx";

const page = {
  Step1: 1,
  Step2: 2,
  Step3: 3,
};
const FINAL_STEP = page.Step3;

const MultiStepForm = ({ onSubmit = () => {}, onCancel = () => {} }) => {
  const [currentStep, setCurrentStep] = useState(page.Step1);

  const [inputs, setInputes] = useState({
    step1: {
      firstName: "",
      email: "",
    },
    step2: {
      phone: "",
      city: "",
    },
    step3: {
      salary: "",
      bank: "",
    },
  });

  const Steps = {
    [page.Step1]: Step1,
    [page.Step2]: Step2,
    [page.Step3]: Step3,
  };

  const Component = Steps[currentStep];

  const submitButtonText = FINAL_STEP === currentStep ? "Save" : "Next";

  function handleNext() {
    if (currentStep === page.Step1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === page.Step2) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submitting form data...", inputs);
      onSubmit(inputs);
    }
  }

  function handleBack() {
    if (currentStep > page.Step1) {
      setCurrentStep(currentStep - 1);
    }
  }

  function handleInputChange({ stepKey, value, inputKey }) {
    const oldInputs = structuredClone(inputs);

    oldInputs[stepKey][inputKey] = value;

    setInputes(oldInputs);
  }

  const inputToSend = inputs[`step${currentStep}`];

  return (
    <div className="multi-step-form">
      {currentStep > page.Step1 && <button onClick={handleBack}>Back</button>}
      <form>
        <Component
          stepKey={`step${currentStep}`}
          onChange={handleInputChange}
          inputs={inputToSend}
        />

        <div className="">
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" onClick={handleNext} className="success">
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
