import { combineReducers } from "redux";

import navReducer from "./NavReducer";

export default combineReducers({
  nav: navReducer
});
