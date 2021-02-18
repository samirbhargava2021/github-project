import React from "react";
import "./Button.scss";

const Button = (props) => {
  const {events} = props;
  const {text, theme} = props?.data;
  const {buttonSize} = props?.options;
  return (
    <button
      onClick={events} 
      className={`${buttonSize ==='big' ? 'big-button' : 'button'} ${theme}`}
    >
      {text}
    </button>
  );
};

export default Button;
