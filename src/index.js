// TODO: check if we need to have index.web.js & index.ios.js & index.android.js
// to be able to deploy to multiple platform

import { AppRegistry, Platform } from "react-native";

import App from "./App";

// register the app
AppRegistry.registerComponent("App", () => App);

if (Platform.OS === "web") {
  AppRegistry.runApplication("App", {
    initialProps: {},
    rootTag: document.getElementById("root"),
  });
}
