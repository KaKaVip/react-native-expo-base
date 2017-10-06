import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import appReducer from "../reducers/AppReducer";

const logger = createLogger();
const store = createStore(appReducer, applyMiddleware(thunk, logger));
export default store;
