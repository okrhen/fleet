import React from "react";
import { number, arrayOf } from "prop-types";

import { Icon } from "../";

const Rating = ({ count, rate }) =>
  count.map(item => (
    <span key={item} className={`Rating ${item <= rate ? "isFill" : ""}`}>
      <Icon name="star" key={item} />
    </span>
  ));

Rating.propTypes = {
  count: arrayOf(number),
  rate: number
};

Rating.defaultProps = {
  count: [1, 2, 3, 4, 5],
  rate: 1
};

export default Rating;
