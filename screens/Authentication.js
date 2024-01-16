import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const Authentication = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.authentication}>
      <View style={styles.iphone1415ProMax26Wrapper}>
        <View
          style={[styles.iphone1415ProMax26, styles.iphone1415ProMax26Position]}
        >
          <View style={styles.iphone1415ProMax26Child} />
          <View style={[styles.enterOtpParent, styles.borderPosition]}>
            <Text style={styles.enterOtp}>Enter OTP</Text>
            <Text style={[styles.pleaseEnterOtp, styles.containerTypo]}>
              Please enter OTP sent to +91 8800850641
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
                  style={[styles.capIcon, styles.borderPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.borderPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={[
              styles.mingcutearrowUpLineIcon,
              styles.iphone1415ProMax26Position,
            ]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <Text style={[styles.haveAnAccountContainer, styles.containerTypo]}>
            <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
            <Text style={styles.login}>Login</Text>
          </Text>
          <View
            style={[styles.iphone1415ProMax26Inner, styles.groupParentLayout]}
          >
            <View style={[styles.groupParent, styles.groupParentLayout]}>
              <View style={[styles.rectangleParent, styles.groupViewLayout]}>
                <View style={[styles.groupChild, styles.groupViewLayout]} />
                <Text style={[styles.x, styles.xPosition]}>X</Text>
              </View>
              <View style={[styles.rectangleGroup, styles.groupViewLayout]}>
                <View style={[styles.groupChild, styles.groupViewLayout]} />
                <Text style={[styles.x, styles.xPosition]}>X</Text>
              </View>
              <View style={[styles.rectangleContainer, styles.groupViewLayout]}>
                <View style={[styles.groupChild, styles.groupViewLayout]} />
                <Text style={[styles.x, styles.xPosition]}>X</Text>
              </View>
              <Pressable
                style={[styles.groupPressable, styles.groupViewLayout]}
                onPress={() => navigation.navigate("Location1")}
              >
                <View style={[styles.rectangleView, styles.groupViewLayout]} />
                <Text style={[styles.confirm, styles.xPosition]}>Confirm</Text>
              </Pressable>
              <View style={[styles.groupView, styles.groupViewLayout]}>
                <View style={[styles.groupChild, styles.groupViewLayout]} />
                <Text style={[styles.x, styles.xPosition]}>X</Text>
              </View>
              <Text
                style={[styles.didNotReceiveContainer, styles.containerTypo]}
              >
                <Text
                  style={styles.haveAnAccount}
                >{`Did not receive OTP? `}</Text>
                <Text style={styles.login}>Resend OTP</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415ProMax26Position: {
    overflow: "hidden",
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  containerTypo: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupParentLayout: {
    height: 168,
    width: 362,
    position: "absolute",
  },
  groupViewLayout: {
    height: 48,
    position: "absolute",
  },
  xPosition: {
    top: 12,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax26Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  enterOtp: {
    marginLeft: -53.5,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  pleaseEnterOtp: {
    marginLeft: -161.5,
    top: 49,
    color: Color.grey,
  },
  enterOtpParent: {
    marginLeft: -161,
    top: 150,
    width: 323,
    height: 73,
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
  mingcutearrowUpLineIcon: {
    top: 45,
    width: 24,
    height: 24,
    left: 34,
  },
  haveAnAccount: {
    color: Color.grey,
  },
  login: {
    color: Color.midBlue,
  },
  haveAnAccountContainer: {
    marginLeft: -96,
    top: 719,
  },
  groupChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    width: 48,
    height: 48,
    top: 0,
    left: 0,
  },
  x: {
    marginLeft: -5,
    color: Color.midBlue,
  },
  rectangleParent: {
    left: 61,
    width: 48,
    height: 48,
    top: 0,
  },
  rectangleGroup: {
    left: 125,
    width: 48,
    height: 48,
    top: 0,
  },
  rectangleContainer: {
    left: 189,
    width: 48,
    height: 48,
    top: 0,
  },
  rectangleView: {
    backgroundColor: Color.midBlue,
    width: 362,
    height: 48,
    left: 0,
    top: 0,
  },
  confirm: {
    marginLeft: -33,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  groupPressable: {
    top: 72,
    width: 362,
    height: 48,
    left: 0,
  },
  groupView: {
    left: 253,
    width: 48,
    height: 48,
    top: 0,
  },
  didNotReceiveContainer: {
    marginLeft: -130,
    top: 144,
  },
  groupParent: {
    left: 0,
    top: 0,
  },
  iphone1415ProMax26Inner: {
    top: 287,
    left: 34,
  },
  iphone1415ProMax26: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    height: 932,
  },
  iphone1415ProMax26Wrapper: {
    top: 21,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  authentication: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Authentication;
