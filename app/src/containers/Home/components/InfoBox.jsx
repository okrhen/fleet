import React from "react";
import { connect } from "react-redux";
import { func, bool, shape } from "prop-types";

import { Button, Icon, Rating } from "../../../components";

const InfoBox = ({
  onClose,
  isOpen,
  onAddToFav,
  restaurant,
  isSaving,
  onRemoveFromFav
}) => {
  if (isOpen && restaurant) {
    const processingLabel = restaurant.isFavorite
      ? "Removing from favorites..."
      : "Adding to favorites...";

    const actionLabel = restaurant.isFavorite
      ? "Unfavorite"
      : "Add to favorites";

    return (
      <div className="InfoBox">
        <div className="InfoBox-left">
          <div className="InfoBox-left-top">
            <div className="InfoBox-left-top-name">
              <span>{restaurant.name}</span>
              <Button
                className="InfoBox-left-top-name-btn"
                onClick={() => onClose()}
              >
                <Icon name="times" />
              </Button>
            </div>

            <div>
              <Rating rate={restaurant.details.ratings} />
            </div>
            <div className="InfoBox-left-top-time">
              <Icon name="clock" /> <span>{restaurant.details.openTime}</span>
            </div>
            <div className="InfoBox-left-top-website">
              <Icon name="external-link-alt" />{" "}
              <span>
                <a
                  href={restaurant.details.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {restaurant.details.website}
                </a>
              </span>
            </div>
          </div>
          <div className="InfoBox-left-bottom">
            <Button
              className="InfoBox-left-bottom-btn"
              disabled={isSaving}
              onClick={e =>
                restaurant.isFavorite
                  ? onRemoveFromFav(restaurant.id)
                  : onAddToFav(e)
              }
              id={restaurant.id}
            >
              <Icon name="heart" />{" "}
              <span>{isSaving ? processingLabel : actionLabel}</span>
            </Button>
          </div>
        </div>

        <div className="InfoBox-right">
          <img
            src={restaurant.details.image.background}
            alt={restaurant.name}
          />
        </div>
      </div>
    );
  }

  return null;
};

InfoBox.propTypes = {
  onClose: func.isRequired,
  onAddToFav: func.isRequired,
  isSaving: bool.isRequired,
  onRemoveFromFav: func.isRequired,
  restaurant: shape({}),
  isOpen: bool
};

InfoBox.defaultProps = {
  restaurant: undefined,
  isOpen: false
};

const mapStateToProps = state => ({
  restaurant: state.home.selectedRestaurant,
  isSaving: state.favorites.isSaving
});

export default connect(
  mapStateToProps,
  undefined
)(InfoBox);
