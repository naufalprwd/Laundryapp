import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Frame3 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.iphone1415ProMax27Wrapper}>
        <View style={[styles.iphone1415ProMax27, styles.iconPosition]}>
          <View style={styles.iphone1415ProMax27Child} />
          <Text style={styles.findTheNearest}>
            Find the Nearest Haier Wash Laundry
          </Text>
          <Text style={styles.discoverTheClosest}>
            Discover the closest Haier Wash Laundry to your location with ease.
            Say goodbye to laundry day hassles.
          </Text>
          <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          </View>
          <View style={[styles.skipWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.skip, styles.nextTypo]}>Skip</Text>
          </View>
          <View style={[styles.iosStatusBar, styles.wrapperFlexBox1]}>
            <Text style={styles.time}>9:41</Text>
            <View style={styles.wrapperFlexBox1}>
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
                  style={[styles.capIcon, styles.borderPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.borderPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={styles.iphone1415ProMax27Item}
            contentFit="cover"
            source={require("../assets/group-573.png")}
          />
          <Image
            style={[styles.social02Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/social-021.png")}
          />
          <Image
            style={[styles.fluentlocation16FilledIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/fluentlocation16filled.png")}
          />
          <Image
            style={[styles.fluentlocation16FilledIcon1, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/fluentlocation16filled1.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  wrapperFlexBox: {
    paddingVertical: Padding.p_xs,
    paddingHorizontal: Padding.p_129xl,
    justifyContent: "center",
    width: 105,
    borderRadius: Border.br_5xs,
    top: 850,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontSize: FontSize.poppins16Bold_size,
    fontFamily: FontFamily.poppins16Bold,
  },
  wrapperFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax27Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  findTheNearest: {
    top: 143,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    width: 362,
    marginLeft: -181,
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  discoverTheClosest: {
    top: 217,
    color: Color.grey,
    fontSize: FontSize.poppins16Bold_size,
    width: 362,
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    marginLeft: -181,
    position: "absolute",
  },
  next: {
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  nextWrapper: {
    left: 291,
    backgroundColor: Color.midBlue,
  },
  skip: {
    color: Color.midBlue,
  },
  skipWrapper: {
    left: 34,
    backgroundColor: Color.d9D9D9,
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
    maxHeight: "100%",
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
  iphone1415ProMax27Item: {
    top: 771,
    left: 191,
    width: 48,
    height: 8,
    position: "absolute",
  },
  social02Icon: {
    top: 384,
    left: 75,
    width: 280,
    height: 280,
  },
  fluentlocation16FilledIcon: {
    top: 568,
    left: 153,
    width: 42,
    height: 42,
  },
  fluentlocation16FilledIcon1: {
    top: 465,
    left: 241,
    width: 52,
    height: 52,
  },
  iphone1415ProMax27: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    height: 932,
  },
  iphone1415ProMax27Wrapper: {
    top: 22,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  groupParent: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Frame3;
