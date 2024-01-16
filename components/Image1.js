import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

const Image1 = () => {
  return (
    <ImageBackground
      style={styles.image1499Icon}
      resizeMode="cover"
      source={require("../assets/image1499.png")}
    />
  );
};

const styles = StyleSheet.create({
  image1499Icon: {
    width: 0,
    height: 0,
  },
});

export default Image1;
