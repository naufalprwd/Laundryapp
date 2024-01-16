import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={styles.iphone1415ProMax25Wrapper}>
        <View style={[styles.iphone1415ProMax25, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax25Child} />
          <View style={styles.mobileNumberParent}>
            <Text style={styles.mobileNumber}>Mobile Number</Text>
            <Text style={[styles.pleaseEnterYour, styles.pleaseEnterYourTypo]}>
              Please enter your mobile phone number
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
                <View style={styles.border} />
                <Image
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.capacityLayout]} />
              </View>
            </View>
          </View>
          <Text
            style={[styles.haveAnAccountContainer, styles.pleaseEnterYourTypo]}
          >
            <Text style={styles.haveAnAccount}>{`Have an account? `}</Text>
            <Text style={styles.login}>Login</Text>
          </Text>
          <View style={styles.groupParent}>
            <Pressable
              style={[styles.rectangleParent, styles.rectangleLayout]}
              onPress={() => navigation.navigate("Authentication")}
            >
              <View style={[styles.groupChild, styles.groupLayout]} />
              <Text style={[styles.sendOtp, styles.textPosition]}>
                Send OTP
              </Text>
            </Pressable>
            <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
              <View style={[styles.groupItem, styles.groupLayout]} />
              <Text style={[styles.mobileNumber1, styles.textPosition]}>
                Mobile number
              </Text>
              <Text style={[styles.text, styles.textPosition]}>+91</Text>
            </View>
            <Image
              style={[
                styles.istockphoto472317739612x612Icon,
                styles.capacityLayout,
              ]}
              contentFit="cover"
              source={require("../assets/istockphoto472317739612x612-1.png")}
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
  pleaseEnterYourTypo: {
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
  capacityLayout: {
    width: 21,
    position: "absolute",
  },
  rectangleLayout: {
    height: 48,
    width: 362,
    left: 0,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_5xs,
    height: 48,
    width: 362,
    left: 0,
    top: 0,
    position: "absolute",
  },
  textPosition: {
    top: 12,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax25Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  mobileNumber: {
    marginLeft: -85,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  pleaseEnterYour: {
    top: 49,
    color: Color.grey,
    marginLeft: -161,
  },
  mobileNumberParent: {
    top: 150,
    width: 322,
    height: 73,
    left: "50%",
    marginLeft: -161,
    position: "absolute",
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
    backgroundColor: Color.midBlue,
  },
  sendOtp: {
    marginLeft: -38,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  rectangleParent: {
    top: 72,
  },
  groupItem: {
    backgroundColor: Color.colorWhitesmoke_100,
  },
  mobileNumber1: {
    marginLeft: -95,
    color: "#ababab",
  },
  text: {
    marginLeft: -138,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  rectangleGroup: {
    top: 0,
    height: 48,
  },
  istockphoto472317739612x612Icon: {
    top: 17,
    left: 17,
    height: 14,
  },
  groupParent: {
    top: 287,
    left: 34,
    height: 120,
    width: 362,
    position: "absolute",
  },
  iphone1415ProMax25: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax25Wrapper: {
    top: 21,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Signup;
