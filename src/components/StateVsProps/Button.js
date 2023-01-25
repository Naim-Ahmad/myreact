import React from "react";

const Button = ({ label, handler, ...others }) => {
    return (
      <button onClick={handler} {...others}>
        {label}
      </button>
    );
  };

  export default Button