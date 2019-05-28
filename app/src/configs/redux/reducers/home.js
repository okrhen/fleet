export const FETCH_RESTAURANTS = "FETCH_RESTAURANTS";
export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const SET_SELECTED_MAP_RESTAURANT = "SET_SELECTED_MAP_RESTAURANT";
export const SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY";
export const SET_INFO_PANEL_STATUS = "SET_INFO_PANEL_STATUS";

const defaultProps = {
  fetching: false,
  openInfoPanel: false,
  restaurants: [],
  selectedRestaurant: undefined,
  categories: [],
  filteredCategory: "All"
};

// reducers
const home = (state = defaultProps, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        fetching: true
      };

    case RECEIVE_RESTAURANTS:
      return {
        ...state,
        fetching: false,
        restaurants: action.payload.restaurants,
        categories: action.payload.categories
      };

    case SET_SELECTED_MAP_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload,
        openInfoPanel: true
      };

    case SET_SELECTED_CATEGORY:
      return {
        ...state,
        filteredCategory: action.payload
      };

    case SET_INFO_PANEL_STATUS:
      return {
        ...state,
        openInfoPanel: action.payload
      };

    default:
      return state;
  }
};

// actions
export const fetchRestaurants = () => ({
  type: FETCH_RESTAURANTS
});

export const setSelectedMapRestaurant = restaurant => ({
  type: SET_SELECTED_MAP_RESTAURANT,
  payload: restaurant
});

export const setSelectedCategory = item => ({
  type: SET_SELECTED_CATEGORY,
  payload: item
});

export const setInfoPanelStatus = status => ({
  type: SET_INFO_PANEL_STATUS,
  payload: status
});

/**
 *
 * state getter
 */

export const getRestaurantList = state => {
  const { restaurants, filteredCategory } = state.home;
  let restaurantList = restaurants;

  if (filteredCategory !== "All") {
    restaurantList = restaurants.filter(
      item => item.category === filteredCategory
    );
  }

  return restaurantList;
};

export default home;
