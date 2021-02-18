import React from "react";
import "./ErrorMessaging.scss";

const ErrorMessaging = ({ text }) => {
  return (
    <>
    {!!text&&
      <p className="error-position">{text}</p>
    }
    </>
  );
};

export default ErrorMessaging;
