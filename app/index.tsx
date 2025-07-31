import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>code added in github also and add workflows agin added</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "red",
    fontSize: 16,
    fontWeight: 600,
  },
});
