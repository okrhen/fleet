import React from "react";
import { node, string } from "prop-types";

const Button = ({ children, label, className = "", ...btnProps }) => (
  <button className={`Button ${className}`} {...btnProps}>
    {children ? children : <span>{label}</span>}
  </button>
);

Button.propTypes = {
  children: node,
  label: string,
  className: string
};

Button.defaultProps = {
  children: undefined,
  label: "",
  className: ""
};

export default Button;
