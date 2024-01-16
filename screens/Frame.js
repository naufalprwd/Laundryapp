import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.iphone1415ProMax31Wrapper, styles.iphone1415Layout]}>
        <View
          style={[styles.iphone1415ProMax31, styles.iphone1415ProMax31Position]}
        >
          <View style={styles.iphone1415ProMax31Child} />
          <View style={[styles.turnOnLocationWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.turnOnLocation, styles.locationTypo]}>
              Turn on location
            </Text>
          </View>
          <View style={[styles.iosStatusBar, styles.iosStatusBarPosition]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
                <View style={styles.border} />
                <Image
                  style={[styles.capIcon, styles.iconPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.enableLocationParent,
              styles.haierWashCollectsPosition,
            ]}
          >
            <Text style={[styles.enableLocation, styles.iosStatusBarPosition]}>
              Enable location
            </Text>
            <Text
              style={[
                styles.haierWashCollects,
                styles.haierWashCollectsPosition,
              ]}
            >
              Haier Wash collects location data to show you nearest Haier Wash
              zones. Allow Haier Wash to access this device’s location.
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[
              styles.undrawMyLocationReR52x1Icon,
              styles.iphone1415ProMax31Position,
            ]}
            contentFit="cover"
            source={require("../assets/undraw-my-location-re-r52x-1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 932,
    top: "50%",
  },
  iphone1415ProMax31Position: {
    overflow: "hidden",
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  locationTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  iosStatusBarPosition: {
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  haierWashCollectsPosition: {
    marginLeft: -181,
    width: 362,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax31Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  turnOnLocation: {
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontSize: FontSize.poppins16Bold_size,
  },
  turnOnLocationWrapper: {
    top: 850,
    left: 34,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.midBlue,
    justifyContent: "center",
    paddingHorizontal: Padding.p_129xl,
    paddingVertical: Padding.p_xs,
    width: 362,
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
    color: Color.iosStatusBarStatusBarTextColor,
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
    left: "50%",
    position: "absolute",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.iosStatusBarStatusBarTextColor,
    width: 21,
    left: "50%",
    position: "absolute",
  },
  battery: {
    width: 27,
    height: 13,
    marginLeft: 8,
  },
  iosStatusBar: {
    left: 0,
    justifyContent: "space-between",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    width: 430,
  },
  enableLocation: {
    marginLeft: -89,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    color: Color.iosStatusBarStatusBarTextColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
  },
  haierWashCollects: {
    top: 44,
    fontWeight: "300",
    color: Color.grey,
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
  },
  enableLocationParent: {
    top: 143,
    height: 116,
  },
  vectorIcon: {
    height: "35.63%",
    marginLeft: -161,
    top: "40.13%",
    bottom: "24.24%",
    width: 322,
  },
  undrawMyLocationReR52x1Icon: {
    marginLeft: -186,
    top: 389,
    width: 373,
    height: 330,
  },
  iphone1415ProMax31: {
    marginTop: -466,
    marginLeft: -215,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    width: 430,
    height: 932,
    top: "50%",
    overflow: "hidden",
  },
  iphone1415ProMax31Wrapper: {
    marginTop: -489.5,
    marginLeft: -227.45,
    width: 430,
    height: 932,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Frame;
