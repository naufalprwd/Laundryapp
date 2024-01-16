import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Frame4 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.iphone1415ProMax47Wrapper}>
        <View style={[styles.iphone1415ProMax47, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax47Child} />
          <Text style={styles.welcome}>Welcome!</Text>
          <Text style={[styles.laundryExperienceIn, styles.getStartedTypo]}>
            Laundry experience in 3 easy steps.
          </Text>
          <View style={[styles.getStartedWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.getStarted, styles.getStartedTypo]}>
              Get Started
            </Text>
          </View>
          <View style={[styles.iosStatusBar, styles.wrapperFlexBox]}>
            <Text style={styles.time}>9:41</Text>
            <View style={styles.wrapperFlexBox}>
              <Image
                style={styles.cellularConnectionIcon}
                contentFit="cover"
                source={require("../assets/cellular-connection.png")}
              />
              <Image
                style={styles.wifiIcon}
                contentFit="cover"
                source={require("../assets/wifi.png")}
              />
              <View style={styles.battery}>
                <View style={[styles.border, styles.borderPosition]} />
                <Image
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.borderPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={styles.eCommerce01Icon}
            contentFit="cover"
            source={require("../assets/ecommerce-011.png")}
          />
          <Image
            style={styles.iphone1415ProMax47Item}
            contentFit="cover"
            source={require("../assets/group-977.png")}
          />
        </View>
      </View>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iosStatusBarPosition: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  getStartedTypo: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax47Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  welcome: {
    marginLeft: -57,
    top: 143,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  laundryExperienceIn: {
    marginLeft: -141,
    top: 187,
    color: Color.grey,
    left: "50%",
    position: "absolute",
  },
  getStarted: {
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  getStartedWrapper: {
    marginLeft: -181,
    top: 850,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.midBlue,
    width: 362,
    justifyContent: "center",
    paddingHorizontal: Padding.p_129xl,
    paddingVertical: Padding.p_xs,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  cellularConnectionIcon: {
    width: 19,
    height: 12,
  },
  wifiIcon: {
    width: 17,
    marginLeft: 8,
    height: 12,
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.iosStatusBarStatusBarTextColor,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.iosStatusBarStatusBarTextColor,
    width: 21,
  },
  battery: {
    width: 27,
    height: 13,
    marginLeft: 8,
  },
  iosStatusBar: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_smi,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  eCommerce01Icon: {
    top: 390,
    left: 75,
    width: 280,
    height: 280,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax47Item: {
    top: 440,
    left: 150,
    width: 128,
    height: 79,
    position: "absolute",
  },
  iphone1415ProMax47: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax47Wrapper: {
    top: 21,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  vectorIcon: {
    height: "2.71%",
    width: "5.51%",
    top: "48.66%",
    right: "41.85%",
    bottom: "48.64%",
    left: "52.64%",
  },
  vectorIcon1: {
    height: "1.98%",
    width: "2.82%",
    top: "49.02%",
    right: "46.73%",
    bottom: "49.01%",
    left: "50.45%",
  },
  vectorIcon2: {
    height: "3.85%",
    width: "3.86%",
    top: "48.07%",
    right: "50.2%",
    bottom: "48.08%",
    left: "45.94%",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Frame4;
