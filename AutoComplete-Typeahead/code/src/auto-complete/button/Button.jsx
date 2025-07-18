import React from "react";

const Button = ({ label, onClick = () => {}, ...rest}) => {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <button className="button" onClick={handleOnClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
