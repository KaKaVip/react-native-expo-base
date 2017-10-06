import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

import I18n from "./../i18n/I18n";

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Login"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{I18n.t("login")}</Text>
      </View>
    );
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

export default LoginScreen;
