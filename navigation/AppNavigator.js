import React from "react";
import { Platform, BackHandler } from "react-native";
import { Constants } from "expo";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addNavigationHelpers, StackNavigator } from "react-navigation";

import LoginScreen from "./../screens/LoginScreen";
import MainScreen from "./../screens/MainScreen";
import ProfileScreen from "./../screens/ProfileScreen";

export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen, path: "login" },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen, path: "profile" }
});

class ReduxNavigation extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };
  render() {
    const { dispatch, nav } = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav
    });

    return <AppNavigator navigation={navigation} />;
  }
}

ReduxNavigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  nav: state.nav
});

export default connect(mapStateToProps)(ReduxNavigation);
