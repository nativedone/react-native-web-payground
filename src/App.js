import React from "react";
import { View, Text, StyleSheet } from "react-native";

function App() {
  return (
    <View style={styles.main}>
      <Text style={styles.primaryText}>
         React native web is pretty cool
      </Text>
      <Text style={styles.secondaryText}>yep, this is a RN text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#ccc",
    paddingTop: 80,
    paddingBottom: 40,
    paddingRight: 30,
    paddingLeft: 60,
  },
  primaryText: {
    color: "blue",
    fontSize: 40,
  },
  secondaryText: {
    color: "green",
    fontSize: 30,
  },
});

export default App;
