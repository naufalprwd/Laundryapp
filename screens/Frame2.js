import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Padding, Border, Color, FontSize } from "../GlobalStyles";

const Frame2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.iphone1415ProMax45Wrapper}>
        <View
          style={[styles.iphone1415ProMax45, styles.iphone1415ProMax45Position]}
        >
          <View style={styles.iphone1415ProMax45Child} />
          <Text style={[styles.checkMachineAvailability, styles.nextTypo]}>
            Check Machine Availability
          </Text>
          <Text style={[styles.viewRealTimeMachine, styles.timeTypo]}>
            View real-time machine availability and select the perfect one for
            your laundry needs. No more waiting in line!
          </Text>
          <View style={[styles.nextWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.next, styles.nextTypo]}>Next</Text>
          </View>
          <View style={[styles.skipWrapper, styles.wrapperFlexBox]}>
            <Text style={[styles.skip, styles.nextTypo]}>Skip</Text>
          </View>
          <View style={[styles.iosStatusBar, styles.wrapperFlexBox1]}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
                <View style={[styles.border, styles.machinePosition]} />
                <Image
                  style={[styles.capIcon, styles.machinePosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.machinePosition]} />
              </View>
            </View>
          </View>
          <Image
            style={styles.iphone1415ProMax45Item}
            contentFit="cover"
            source={require("../assets/group-572.png")}
          />
          <Image
            style={[
              styles.connectivity03Icon,
              styles.iphone1415ProMax45Position,
            ]}
            contentFit="cover"
            source={require("../assets/connectivity-031.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415ProMax45Position: {
    overflow: "hidden",
    position: "absolute",
  },
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
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
  wrapperFlexBox1: {
    alignItems: "center",
    flexDirection: "row",
  },
  machinePosition: {
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax45Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  checkMachineAvailability: {
    marginLeft: -150,
    top: 143,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    color: Color.iosStatusBarStatusBarTextColor,
    left: "50%",
    position: "absolute",
  },
  viewRealTimeMachine: {
    marginLeft: -181,
    top: 187,
    color: Color.grey,
    width: 362,
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  next: {
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontSize: FontSize.poppins16Bold_size,
  },
  nextWrapper: {
    left: 291,
    backgroundColor: Color.midBlue,
  },
  skip: {
    color: Color.midBlue,
    fontSize: FontSize.poppins16Bold_size,
  },
  skipWrapper: {
    left: 34,
    backgroundColor: Color.d9D9D9,
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
  iphone1415ProMax45Item: {
    top: 771,
    left: 191,
    width: 48,
    height: 8,
    position: "absolute",
  },
  connectivity03Icon: {
    top: 393,
    left: 75,
    width: 280,
    height: 280,
  },
  iphone1415ProMax45: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    height: 932,
  },
  iphone1415ProMax45Wrapper: {
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

export default Frame2;
