import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Marker } from "react-google-maps";
import { arrayOf, shape, bool, func } from "prop-types";

import { Map } from "../../components";
import InfoBox from "./components/InfoBox";
import Filter from "./components/Filter";

import {
  fetchRestaurants,
  setSelectedMapRestaurant,
  getRestaurantList,
  setInfoPanelStatus
} from "../../configs/redux/reducers/home";
import {
  addToFavorites,
  successAddRemoveToFavorites,
  removeFromFavorites
} from "../../configs/redux/reducers/favorites";

class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  componentWillUnmount() {
    this.handleMarkerClick();
  }

  getRestaurantById = id => {
    const { restaurants } = this.props;
    const selectedRestaurant = restaurants.find(item => item.id === Number(id));

    return selectedRestaurant;
  };

  isInFavorites = id => {
    const { favoriteRestaurants } = this.props;
    const item = favoriteRestaurants.find(a => a.id === id);
    return Object.keys(item || {}).length > 0;
  };

  handleMarkerClick = id => {
    const { setSelectedMapRestaurant, setInfoPanelStatus } = this.props;
    if (id) {
      const selectedRestaurant = this.getRestaurantById(id);
      const isInFavorites = this.isInFavorites(id);
      selectedRestaurant.isFavorite = isInFavorites;

      setSelectedMapRestaurant(selectedRestaurant);
    }

    setInfoPanelStatus(Boolean(id));
  };

  handleAddToFav = e => {
    const { id } = e.currentTarget;
    const { addToFavorites, successAddRemoveToFavorites } = this.props;
    const selectedRestaurant = this.getRestaurantById(id);
    addToFavorites(selectedRestaurant);

    setTimeout(() => {
      this.handleMarkerClick();
      successAddRemoveToFavorites();
    }, 1000);
  };

  handleRemoveFromFav = id => {
    const { successAddRemoveToFavorites, removeFromFavorites } = this.props;

    removeFromFavorites(id);

    setTimeout(() => {
      this.handleMarkerClick();
      successAddRemoveToFavorites();
    }, 1000);
  };

  render() {
    const { restaurants, isLoading, openInfoPanel } = this.props;
    return (
      <div className="Home">
        <Map loading={isLoading}>
          {restaurants.map(item => (
            <Marker
              position={{ lat: item.lat, lng: item.lng }}
              onClick={() => this.handleMarkerClick(item.id)}
              key={item.name}
            />
          ))}
        </Map>
        <InfoBox
          isOpen={openInfoPanel}
          onClose={this.handleMarkerClick}
          onAddToFav={this.handleAddToFav}
          onRemoveFromFav={this.handleRemoveFromFav}
        />
        <Filter />
      </div>
    );
  }
}

Home.propTypes = {
  restaurants: arrayOf(shape({})).isRequired,
  isLoading: bool.isRequired,
  openInfoPanel: bool.isRequired,
  fetchRestaurants: func.isRequired,
  setSelectedMapRestaurant: func.isRequired,
  addToFavorites: func.isRequired,
  successAddRemoveToFavorites: func.isRequired,
  removeFromFavorites: func.isRequired,
  setInfoPanelStatus: func.isRequired
};

const mapStateToProps = state => ({
  openInfoPanel: state.home.openInfoPanel,
  restaurants: getRestaurantList(state),
  isLoading: state.home.fetching,
  favoriteRestaurants: state.favorites.favoriteRestaurants
});

const actionCreators = {
  fetchRestaurants,
  setSelectedMapRestaurant,
  addToFavorites,
  successAddRemoveToFavorites,
  removeFromFavorites,
  setInfoPanelStatus
};

export default connect(
  mapStateToProps,
  actionCreators
)(Home);
