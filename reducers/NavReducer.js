import { NavigationActions } from "react-navigation";
import { AppNavigator } from "../navigation/AppNavigator";
import * as ACTIONTYPES from "../actions/actionTypes";

const firstAction = AppNavigator.router.getActionForPathAndParams("Login");
// const secondAction = AppNavigator.router.getActionForPathAndParams("Login");

// const tempNavState = AppNavigator.router.getStateForAction(firstAction);

const initialNavState = AppNavigator.router.getStateForAction(firstAction);

const navReducer = (state = initialNavState, action) => {
  let nextState;

  switch (action.type) {
    case ACTIONTYPES.LOGIN:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      );
      break;
    case ACTIONTYPES.LOGOUTED:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: "Login" }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
};

export default navReducer;
