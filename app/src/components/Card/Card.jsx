import React from "react";
import { func, shape } from "prop-types";

import { Rating, Icon, Button } from "../";

const Card = ({ clickShowMore, info, onUnfavorite, onViewInMap }) => (
  <div className="Card">
    <img alt="restaurant" src={info.details.image.background} />
    <div className="Card-content">
      <div className="Card-content-header">
        <div className="Card-content-header-left">
          <Rating rate={info.details.ratings} />
        </div>
        <div className="Card-content-header-right">
          <Button
            className="Card-content-header-right-btn isLocation"
            onClick={() => onViewInMap(info)}
          >
            <Icon name="location-arrow" />
          </Button>
          <Button
            className="Card-content-header-right-btn isFavorite"
            id={info.id}
            onClick={onUnfavorite}
          >
            <Icon name="heart" />
          </Button>
        </div>
      </div>

      <div className="Card-content-info">
        <div className="Card-content-info-name">
          <span className="Card-content-info-name-arrow">
            <Icon name="chevron-right" />
          </span>
          <span>{info.name}</span>
        </div>

        <div className="Card-content-info-footer">
          <div>
            <span className="Card-content-info-location">
              <Icon name="map-marker-alt" /> {info.details.place}
            </span>
            <span className="Card-content-info-time">
              <Icon name="clock" /> {info.details.openTime}
            </span>
          </div>
          <span>
            <Button onClick={clickShowMore} className="Card-content-info-more">
              <Icon name="info-circle" />
            </Button>
          </span>
        </div>
        {/* <span className="Card-content-info-description ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
          et viverra
        </span> */}
      </div>
    </div>
  </div>
);

Card.propTypes = {
  info: shape({}),
  clickShowMore: func.isRequired,
  onUnfavorite: func.isRequired,
  onViewInMap: func.isRequired
};

Card.defaultProps = {
  info: {}
};

export default Card;
