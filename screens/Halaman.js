import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Halaman = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.halaman}
      onPress={() => navigation.navigate("Signup")}
    >
      <View style={styles.iphone1415ProMax24Wrapper}>
        <View style={[styles.iphone1415ProMax24, styles.iosStatusBarPosition]}>
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
                  style={[styles.capIcon, styles.borderPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.borderPosition]} />
              </View>
            </View>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View style={[styles.haierWashWrapper, styles.haierPosition]}>
              <Text style={[styles.haierWash, styles.hPosition]}>
                Haier Wash
              </Text>
            </View>
            <View style={styles.rectangleParent}>
              <View style={styles.groupChild} />
              <Image
                style={styles.intersectIcon}
                contentFit="cover"
                source={require("../assets/intersect.png")}
              />
              <Text style={[styles.h, styles.hPosition]}>H</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
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
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    position: "absolute",
    left: "50%",
  },
  groupParentLayout: {
    width: 129,
    position: "absolute",
  },
  haierPosition: {
    marginLeft: -64.5,
    left: "50%",
  },
  hPosition: {
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
    textAlign: "center",
    fontWeight: "900",
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
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    maxHeight: "100%",
    width: 1,
    opacity: 0.4,
    left: "50%",
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
  haierWash: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: FontFamily.dMSans,
    color: Color.midBlue,
    marginLeft: -64.5,
    left: "50%",
  },
  haierWashWrapper: {
    top: 102,
    height: 31,
    width: 129,
    position: "absolute",
  },
  groupChild: {
    top: 2,
    borderRadius: 15,
    backgroundColor: Color.midBlue,
    height: 83,
    width: 88,
    left: 0,
    position: "absolute",
  },
  intersectIcon: {
    height: 41,
    width: 88,
  },
  h: {
    left: 18,
    fontSize: 71,
    fontFamily: FontFamily.inter,
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontWeight: "900",
  },
  rectangleParent: {
    left: 20,
    height: 86,
    width: 88,
    top: 0,
    position: "absolute",
  },
  groupParent: {
    marginLeft: -64,
    top: 369,
    height: 133,
    left: "50%",
  },
  iphone1415ProMax24: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax24Wrapper: {
    top: 21,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  halaman: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Halaman;
