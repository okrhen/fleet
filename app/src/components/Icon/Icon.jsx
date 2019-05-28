import React from "react";
import { string } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ name }) => <FontAwesomeIcon icon={name} />;

Icon.defaultProps = {
  name: string.isRequired
};

export default Icon;
