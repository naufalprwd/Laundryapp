import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Padding, Border, FontSize } from "../GlobalStyles";

const Frame1 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={styles.iphone1415ProMax46Wrapper}>
        <View style={[styles.iphone1415ProMax46, styles.wallet01IconPosition]}>
          <View style={styles.iphone1415ProMax46Child} />
          <Text style={[styles.scanQrAnd, styles.timeTypo]}>
            Scan QR and Pay
          </Text>
          <Text style={styles.simplyScanThe}>
            Simply scan the QR code on your selected machine, and your order is
            in motion. Sit back, relax, and let us handle the rest!
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
                source={require("../assets/cellular-connection1.png")}
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
            style={styles.iphone1415ProMax46Item}
            contentFit="cover"
            source={require("../assets/group-57.png")}
          />
          <Image
            style={[styles.wallet01Icon, styles.wallet01IconPosition]}
            contentFit="cover"
            source={require("../assets/wallet-011.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wallet01IconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
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
  iphone1415ProMax46Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  scanQrAnd: {
    marginLeft: -95,
    top: 143,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  simplyScanThe: {
    marginLeft: -181,
    top: 187,
    color: Color.grey,
    width: 362,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
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
  iphone1415ProMax46Item: {
    top: 771,
    left: 191,
    width: 48,
    height: 8,
    position: "absolute",
  },
  wallet01Icon: {
    top: 402,
    left: 75,
    width: 280,
    height: 280,
  },
  iphone1415ProMax46: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    height: 932,
  },
  iphone1415ProMax46Wrapper: {
    top: -1,
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

export default Frame1;
