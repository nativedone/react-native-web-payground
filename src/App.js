import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { size } from '../src/utils/responsiveSize';

function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.primaryText}>React native web is pretty cool</Text>
      <Text style={styles.secondaryText}>yep, this is a RN text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ccc",
    paddingTop: size["12"],
    paddingBottom: size["12"],
    paddingRight:  size["12"],
    paddingLeft:  size["12"],
  },
  primaryText: {
    color: "blue",
    fontSize: size["48"],
  },
  secondaryText: {
    color: "green",
    fontSize: size["32"],
  },
});

export default App;
