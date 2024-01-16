import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Pemantauan = () => {
  return (
    <View style={styles.pemantauan}>
      <View style={styles.iphone1415ProMax44Wrapper}>
        <View style={[styles.iphone1415ProMax44, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax44Child} />
          <Text style={[styles.appointmentCompleted, styles.nextTypo]}>
            Appointment completed!
          </Text>
          <Text style={[styles.kindlyPlaceYour, styles.timeTypo]}>
            Kindly place your garments into the washing machine. When you've
            completed this step, please press 'Next'.
          </Text>
          <View style={styles.iphone1415ProMax44Item} />
          <Text style={[styles.next, styles.nextPosition]}>Next</Text>
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
          <Text style={[styles.machineAppointed, styles.nextTypo]}>
            Machine Appointed
          </Text>
          <Image
            style={styles.mingcutearrowUpLineIcon}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupParentLayout]} />
              <View style={[styles.sLeftWrapper, styles.sLeftWrapperPosition]}>
                <Text style={[styles.sLeft, styles.nextPosition]}>
                  90s left
                </Text>
              </View>
            </View>
            <Image
              style={[
                styles.interfaceEssentialclockoutlIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/interface-essentialclockoutlined.png")}
            />
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.laundryAndDryCleaningRafik, styles.borderPosition]}
            contentFit="cover"
            source={require("../assets/laundry-and-dry-cleaningrafiki-1-1.png")}
          />
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
  nextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  nextPosition: {
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 60,
    width: 146,
    position: "absolute",
  },
  sLeftWrapperPosition: {
    top: 18,
    height: 24,
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax44Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  appointmentCompleted: {
    marginLeft: -144,
    top: 153,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
  },
  kindlyPlaceYour: {
    marginLeft: -180,
    top: 194,
    color: Color.grey,
    width: 359,
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax44Item: {
    top: 850,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.midBlue,
    width: 362,
    height: 48,
    left: 34,
    position: "absolute",
  },
  next: {
    marginLeft: -18,
    top: 862,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
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
    width: 1,
    opacity: 0.4,
    maxHeight: "100%",
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
  machineAppointed: {
    marginLeft: -110,
    top: 45,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
  },
  mingcutearrowUpLineIcon: {
    top: 47,
    width: 24,
    height: 24,
    left: 34,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.d9D9D9,
    opacity: 0.4,
    left: 0,
    width: 146,
    top: 0,
  },
  sLeft: {
    marginLeft: -29.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    top: 0,
    fontSize: FontSize.poppins16Bold_size,
  },
  sLeftWrapper: {
    marginLeft: -13,
    width: 59,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    width: 146,
    top: 0,
  },
  interfaceEssentialclockoutlIcon: {
    width: "16.44%",
    right: "64.38%",
    left: "19.18%",
    top: 18,
    height: 24,
  },
  groupParent: {
    top: 308,
    left: 142,
  },
  vectorIcon: {
    height: "35.63%",
    width: "74.88%",
    top: "48.93%",
    right: "12.09%",
    bottom: "15.44%",
    left: "13.02%",
    maxHeight: "100%",
  },
  laundryAndDryCleaningRafik: {
    marginLeft: -167,
    top: 448,
    width: 334,
    height: 334,
    overflow: "hidden",
  },
  iphone1415ProMax44: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax44Wrapper: {
    top: 22,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  pemantauan: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Pemantauan;
