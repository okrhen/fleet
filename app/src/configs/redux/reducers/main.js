import { combineReducers } from "redux";

import home from "./home";
import favorites from "./favorites";

const mainReducers = combineReducers({
  home,
  favorites
});

export default mainReducers;
