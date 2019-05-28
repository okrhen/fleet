import React, { Fragment, PureComponent } from "react";
import { connect } from "react-redux";
import { func, arrayOf, shape } from "prop-types";

import MoreInfo from "./components/MoreInfo";
import { Card, Icon } from "../../components";

import {
  removeFromFavorites,
  successAddRemoveToFavorites
} from "../../configs/redux/reducers/favorites";
import { setSelectedMapRestaurant } from "../../configs/redux/reducers/home";

class Favorites extends PureComponent {
  state = {
    showMore: false,
    selectedRestaurant: {}
  };

  handleShowMore = item =>
    this.setState({
      showMore: true,
      selectedRestaurant: item
    });

  handleClose = () =>
    this.setState({
      showMore: false
    });

  handleOnUnfavorite = e => {
    const { id } = e.currentTarget;
    this.props.removeFromFavorites(Number(id));
    this.props.successAddRemoveToFavorites();
  };

  handleViewInMap = item => {
    this.props.setSelectedMapRestaurant(item);
    this.props.history.push("/");
  };

  render() {
    const { favorites } = this.props;
    return (
      <Fragment>
        <div className="Favorites">
          <div className="Favorites-label">
            <span>Favorites</span>
          </div>
          {favorites.length > 0 ? (
            <div className="Favorites-list">
              {favorites.map(item => (
                <Card
                  key={item.id}
                  clickShowMore={() => this.handleShowMore(item)}
                  info={item}
                  onUnfavorite={this.handleOnUnfavorite}
                  onViewInMap={this.handleViewInMap}
                />
              ))}
            </div>
          ) : (
            <div className="Favorites-empty">
              <span className="Favorites-empty-icon">
                <Icon name="heart-broken" />
              </span>
              <span>It seems you don't like going to restaurants.</span>
            </div>
          )}
        </div>
        <MoreInfo
          isOpen={this.state.showMore}
          handleClose={this.handleClose}
          info={this.state.selectedRestaurant}
          onViewInMap={this.handleViewInMap}
        />
      </Fragment>
    );
  }
}

Favorites.propTypes = {
  favorites: arrayOf(shape({})),
  removeFromFavorites: func.isRequired,
  successAddRemoveToFavorites: func.isRequired,
  setSelectedMapRestaurant: func.isRequired
};

Favorites.defaultProps = {
  favorites: []
};

const mapStateToProps = state => ({
  favorites: state.favorites.favoriteRestaurants
});

const actionCreators = {
  removeFromFavorites,
  successAddRemoveToFavorites,
  setSelectedMapRestaurant
};

export default connect(
  mapStateToProps,
  actionCreators
)(Favorites);
