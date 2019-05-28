export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const SUCCESS_ADD_REMOVE_TO_FAVORITES =
  "SUCCESS_ADD_REMOVE_TO_FAVORITES";
export const REMOVE_FROM_FAVORITES = "REMOVE_FROM_FAVORITES";

const defaultProps = {
  isSaving: false,
  favoriteRestaurants: []
};

const favorites = (state = defaultProps, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        isSaving: true,
        favoriteRestaurants: [...state.favoriteRestaurants, action.payload]
      };

    case SUCCESS_ADD_REMOVE_TO_FAVORITES:
      return {
        ...state,
        isSaving: false
      };

    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        isSaving: true,
        favoriteRestaurants: state.favoriteRestaurants.filter(
          item => item.id !== action.payload
        )
      };

    default:
      return state;
  }
};

export const addToFavorites = item => ({
  type: ADD_TO_FAVORITES,
  payload: item
});

export const successAddRemoveToFavorites = () => ({
  type: SUCCESS_ADD_REMOVE_TO_FAVORITES
});

export const removeFromFavorites = id => ({
  type: REMOVE_FROM_FAVORITES,
  payload: id
});

// Getter for reducers

export default favorites;
