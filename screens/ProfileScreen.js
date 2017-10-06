import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View } from "react-native";

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profile"
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Profile</Text>
      </View>
    );
  }
}

ProfileScreen.propTypes = {
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

export default ProfileScreen;
