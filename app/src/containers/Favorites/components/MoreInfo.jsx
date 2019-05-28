import React from "react";
import { bool, func, shape } from "prop-types";

import { Icon, Button, Rating } from "../../../components";

const MoreInfo = ({ isOpen, handleClose, info, onViewInMap }) =>
  isOpen ? (
    <div className="MoreInfo">
      <div className="MoreInfo-header">
        <Button onClick={handleClose}>
          <Icon name="times" />
        </Button>
      </div>
      <div className="MoreInfo-content">
        <ul className="MoreInfo-content-list">
          <li>
            <span className="MoreInfo-content-list-label">Name: </span>
            {info.name}
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Rating: </span>
            <Rating rate={info.details.ratings} />
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Category: </span>
            {info.category}
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Opening Time: </span>
            {info.details.openTime}
          </li>
          <li>
            <span className="MoreInfo-content-list-label">
              Contact Details:{" "}
            </span>
            {info.details.contactNumber}
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Website: </span>
            <a href={info.details.website}>{info.details.website}</a>
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Address: </span>{" "}
            {info.details.place}
          </li>
          <li>
            <span className="MoreInfo-content-list-label">Description: </span>{" "}
            {info.details.shortDescription}
          </li>
        </ul>
      </div>
      <div className="MoreInfo-footer">
        <Button
          className="MoreInfo-footer-btn"
          onClick={() => onViewInMap(info)}
        >
          <Icon name="location-arrow" /> Show in map
        </Button>
      </div>
    </div>
  ) : null;

MoreInfo.propTypes = {
  isOpen: bool,
  info: shape({}),
  handleClose: func.isRequired,
  onViewInMap: func.isRequired
};

MoreInfo.defaultProps = {
  isOpen: false,
  info: {}
};

export default MoreInfo;
