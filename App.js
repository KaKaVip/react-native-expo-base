import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { AppLoading, Asset, Font, Constants } from "expo";

import store from "./store/ConfigureStore";
import ReduxNavigation from "./navigation/AppNavigator";
import I18n from "./i18n/I18n";

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

class App extends React.Component {
  state = {
    isReady: false
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([]);

    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);

    await I18n.initAsync();
    console.log(" Device Locale " + I18n.locale);
    console.log(" Linking Uri " + Constants.linkingUri);
  }

  _prefix = () => {
    if (Constants.appOwnership === "standalone") {
      return Platform.OS == "android" ? "demoapp://demoapp/" : "demoapp://";
    } else {
      return Constants.linkingUri;
    }
  };

  render() {
    console.log(" Deep Linking " + this._prefix());
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Provider store={store}>
        <ReduxNavigation uriPrefix={this._prefix()} />
      </Provider>
    );
  }
}

export default App;
