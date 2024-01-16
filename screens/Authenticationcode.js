import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Authenticationcode = () => {
  return (
    <View style={styles.authenticationcode}>
      <View style={styles.iphone1415ProMax40Wrapper}>
        <View style={[styles.iphone1415ProMax40, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax40Child} />
          <View
            style={[
              styles.iphone1415ProMax40Item,
              styles.rectangleParentLayout,
            ]}
          />
          <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
          <Text style={[styles.enterTheCode, styles.timeTypo]}>
            Enter the code
          </Text>
          <Text style={[styles.pleaseEnterThe, styles.confirmTypo]}>
            Please enter the code on machine screen
          </Text>
          <View style={[styles.iosStatusBar, styles.wrapperFlexBox]}>
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
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
          </View>
          <View style={styles.verifyMachineParent}>
            <Text style={[styles.verifyMachine, styles.sLeftTypo]}>
              Verify Machine
            </Text>
            <Image
              style={styles.mingcutearrowUpLineIcon}
              contentFit="cover"
              source={require("../assets/mingcutearrowupline.png")}
            />
          </View>
          <View style={styles.groupParent}>
            <View
              style={[styles.rectangleParent, styles.rectangleParentLayout]}
            >
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View style={[styles.groupItem, styles.groupLayout1]} />
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <View style={[styles.rectangleView, styles.groupLayout1]} />
            </View>
            <Text style={[styles.x, styles.xPosition]}>X</Text>
            <Text style={[styles.x1, styles.xPosition]}>X</Text>
            <Text style={[styles.x2, styles.xPosition]}>X</Text>
            <Text style={[styles.x3, styles.xPosition]}>X</Text>
            <Text style={[styles.didNotReceiveContainer, styles.confirmTypo]}>
              <Text
                style={styles.didNotReceive}
              >{`Did not receive OTP? `}</Text>
              <Text style={styles.resendOtp}>Resend OTP</Text>
            </Text>
          </View>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupChild1, styles.groupLayout]} />
              <View style={[styles.sLeftWrapper, styles.sLeftWrapperPosition]}>
                <Text style={[styles.sLeft, styles.sLeftTypo]}>90s left</Text>
              </View>
            </View>
            <Image
              style={[
                styles.interfaceEssentialclockoutlIcon,
                styles.sLeftWrapperPosition,
              ]}
              contentFit="cover"
              source={require("../assets/interface-essentialclockoutlined.png")}
            />
          </View>
        </View>
      </View>
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
  rectangleParentLayout: {
    height: 48,
    position: "absolute",
  },
  confirmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  sLeftTypo: {
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupLayout1: {
    width: 48,
    backgroundColor: Color.colorWhitesmoke_100,
    height: 48,
    borderRadius: Border.br_5xs,
    top: 0,
    position: "absolute",
  },
  xPosition: {
    top: 12,
    color: Color.midBlue,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 146,
    position: "absolute",
  },
  sLeftWrapperPosition: {
    top: 18,
    height: 24,
    position: "absolute",
  },
  iphone1415ProMax40Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  iphone1415ProMax40Item: {
    top: 850,
    left: 34,
    backgroundColor: Color.midBlue,
    width: 362,
    borderRadius: Border.br_5xs,
    height: 48,
  },
  confirm: {
    marginLeft: -33,
    top: 862,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  enterTheCode: {
    marginLeft: -80,
    top: 143,
    fontWeight: "600",
    textAlign: "center",
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
  },
  pleaseEnterThe: {
    marginLeft: -166,
    top: 187,
    color: Color.grey,
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
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
    position: "absolute",
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
    left: "50%",
    position: "absolute",
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
  verifyMachine: {
    marginLeft: -34.5,
    fontSize: FontSize.poppins22Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  mingcutearrowUpLineIcon: {
    top: 2,
    width: 24,
    height: 24,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  verifyMachineParent: {
    marginLeft: -181,
    top: 48,
    width: 267,
    height: 33,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  groupItem: {
    left: 64,
  },
  groupInner: {
    left: 128,
  },
  rectangleView: {
    left: 192,
  },
  rectangleParent: {
    left: 10,
    width: 240,
    top: 0,
  },
  x: {
    marginLeft: -101.5,
    color: Color.midBlue,
  },
  x1: {
    marginLeft: -37.5,
    color: Color.midBlue,
  },
  x2: {
    marginLeft: 26.5,
    color: Color.midBlue,
  },
  x3: {
    marginLeft: 90.5,
    color: Color.midBlue,
  },
  didNotReceive: {
    color: Color.grey,
  },
  resendOtp: {
    color: Color.midBlue,
  },
  didNotReceiveContainer: {
    marginLeft: -130.5,
    top: 72,
  },
  groupParent: {
    top: 265,
    left: 85,
    width: 261,
    height: 96,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.d9D9D9,
    opacity: 0.4,
    left: 0,
    top: 0,
  },
  sLeft: {
    marginLeft: -29.5,
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins16Bold_size,
  },
  sLeftWrapper: {
    marginLeft: -13,
    width: 59,
    left: "50%",
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  interfaceEssentialclockoutlIcon: {
    width: "16.44%",
    right: "64.38%",
    left: "19.18%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupContainer: {
    top: 403,
    left: 142,
  },
  iphone1415ProMax40: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax40Wrapper: {
    top: 22,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  authenticationcode: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Authenticationcode;
