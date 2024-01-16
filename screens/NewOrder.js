import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const NewOrder = () => {
  return (
    <View style={styles.newOrder}>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View
          style={[styles.iphone1415ProMax56Parent, styles.groupChildPosition]}
        >
          <View
            style={[styles.iphone1415ProMax56, styles.iosStatusBarPosition]}
          >
            <View style={styles.iphone1415ProMax56Child} />
            <Text style={styles.laundryStarted}>Laundry started!</Text>
            <Text style={[styles.weWillNotify, styles.weWillNotifyTypo]}>
              We will notify when its done!
            </Text>
            <View style={styles.iphone1415ProMax56Item} />
            <Text style={[styles.placeNewOrder, styles.weWillNotifyTypo]}>
              Place New order
            </Text>
            <View style={[styles.iosStatusBar, styles.wrapperFlexBox]}>
              <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
              <View style={styles.wrapperFlexBox}>
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
                  <View style={[styles.border, styles.iconPosition]} />
                  <Image
                    style={[styles.capIcon, styles.iconPosition]}
                    contentFit="cover"
                    source={require("../assets/cap.png")}
                  />
                  <View style={[styles.capacity, styles.iconPosition]} />
                </View>
              </View>
            </View>
            <View
              style={[styles.iphone1415ProMax56Inner, styles.groupChildLayout]}
            >
              <View style={[styles.groupChild, styles.groupChildLayout]} />
            </View>
            <Image
              style={[
                styles.interfaceEssentialinformatioIcon,
                styles.iconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/interface-essentialinformationcircleinterface-essentialinformationcircleoutlined.png")}
            />
            <Image
              style={styles.basilcrossOutlineIcon}
              contentFit="cover"
              source={require("../assets/basilcrossoutline.png")}
            />
          </View>
          <Image
            style={[styles.social04Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/social-041.png")}
          />
        </View>
        <View style={[styles.progressPieChart, styles.fixedRatioFlexBox]}>
          <View style={[styles.chartContainer, styles.wrapperFlexBox]}>
            <View style={[styles.totalContainer, styles.fixedRatioFlexBox]}>
              <Text style={[styles.label, styles.timeTypo]}>Completed</Text>
              <Text style={[styles.value, styles.timeTypo]}>72%</Text>
            </View>
            <Image
              style={[styles.containerIcon, styles.containerIconSpaceBlock]}
              contentFit="cover"
              source={require("../assets/container1.png")}
            />
            <View style={styles.containerIconSpaceBlock}>
              <View style={[styles.fixedRatio, styles.fixedRatioFlexBox]}>
                <View style={styles.spineTransform} />
              </View>
              <View style={[styles.fixedRatio, styles.fixedRatioFlexBox]}>
                <View style={styles.spineTransform} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 430,
    height: 932,
    position: "absolute",
  },
  groupChildPosition: {
    left: 0,
    top: 0,
  },
  iosStatusBarPosition: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  weWillNotifyTypo: {
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
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 42,
    position: "absolute",
  },
  iconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  fixedRatioFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerIconSpaceBlock: {
    marginLeft: -548.56,
    flex: 1,
  },
  iphone1415ProMax56Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  laundryStarted: {
    marginLeft: -93,
    top: 143,
    fontSize: FontSize.poppins22Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  weWillNotify: {
    marginLeft: -112,
    top: 184,
    color: Color.grey,
  },
  iphone1415ProMax56Item: {
    top: 850,
    left: 34,
    backgroundColor: Color.midBlue,
    width: 362,
    height: 48,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  placeNewOrder: {
    marginLeft: -65,
    top: 862,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
    color: Color.iosStatusBarStatusBarTextColor,
    textAlign: "center",
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
  groupChild: {
    backgroundColor: Color.d9D9D9,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  iphone1415ProMax56Inner: {
    top: 44,
    left: 354,
  },
  interfaceEssentialinformatioIcon: {
    width: "5.58%",
    top: 53,
    right: "10%",
    left: "84.42%",
    height: 24,
    position: "absolute",
  },
  basilcrossOutlineIcon: {
    top: 47,
    left: 356,
    width: 38,
    height: 38,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax56: {
    overflow: "hidden",
    height: 932,
  },
  social04Icon: {
    marginLeft: -141,
    top: 497,
    width: 280,
    height: 280,
    overflow: "hidden",
  },
  iphone1415ProMax56Parent: {
    height: 932,
    width: 430,
    position: "absolute",
  },
  label: {
    fontSize: 7,
    color: Color.neutral50,
  },
  value: {
    fontSize: 12,
    color: Color.neutral100,
    marginTop: 2.2,
    fontWeight: "600",
    textAlign: "center",
  },
  totalContainer: {
    alignSelf: "stretch",
    flex: 1,
  },
  containerIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  spineTransform: {
    transform: [
      {
        rotate: "-30deg",
      },
    ],
    height: 0,
    alignSelf: "stretch",
  },
  fixedRatio: {
    alignSelf: "stretch",
    overflow: "hidden",
  },
  chartContainer: {
    flex: 1,
  },
  progressPieChart: {
    top: 337,
    left: 154,
    width: 123,
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
  },
  groupParent: {
    top: 22,
    left: 24,
    height: 932,
  },
  newOrder: {
    height: 975,
    width: "100%",
    flex: 1,
  },
});

export default NewOrder;
