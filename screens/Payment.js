import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const Payment = () => {
  return (
    <View style={styles.payment}>
      <View style={[styles.iphone1415ProMax51Wrapper, styles.iphone1415Layout]}>
        <View style={[styles.iphone1415ProMax51, styles.iphone1415Layout]}>
          <View style={styles.iphone1415ProMax51Child} />
          <Text style={styles.payment1}>Payment</Text>
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
                <View style={[styles.border, styles.groupBorder]} />
                <Image
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
          </View>
          <Image
            style={[styles.mingcutearrowUpLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={[styles.rectangleParent, styles.groupChildPosition2]}>
            <View style={[styles.groupChild, styles.groupChildPosition2]} />
            <View style={[styles.groupItem, styles.groupParentLayout1]} />
            <View style={[styles.rectangleGroup, styles.groupLayout]}>
              <View style={[styles.groupInner, styles.groupLayout]} />
              <View style={styles.paytmParent}>
                <Text style={[styles.paytm, styles.paytmTypo]}>Paytm</Text>
                <Text style={styles.text}>+91 8800850641</Text>
                <Image
                  style={[styles.channels4Profile2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/channels4-profile-2.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.rectangleView, styles.rectangleLayout]} />
              <Text style={[styles.proceedToPay, styles.text2Typo]}>
                Proceed to pay
              </Text>
            </View>
            <View style={[styles.groupParent, styles.groupParentLayout1]}>
              <View style={[styles.groupView, styles.groupParentLayout1]}>
                <View style={[styles.groupChild1, styles.groupParentLayout1]} />
                <Text style={[styles.paytm1, styles.paytm1Position]}>
                  Paytm
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>
                  +91 8800850641
                </Text>
                <Text
                  style={[styles.text2, styles.iconPosition]}
                >{`₹ 60.00 `}</Text>
              </View>
              <View style={[styles.groupChild2, styles.groupChildLayout]} />
            </View>
            <Image
              style={[styles.channels4Profile3Icon, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/channels4-profile-3.png")}
            />
            <View style={[styles.groupContainer, styles.groupParentLayout1]}>
              <View style={[styles.groupView, styles.groupParentLayout1]}>
                <View style={[styles.groupView, styles.groupParentLayout1]}>
                  <View
                    style={[styles.groupChild3, styles.groupParentLayout1]}
                  />
                  <View style={[styles.couponsParent, styles.paytm1Position]}>
                    <Text style={[styles.coupons, styles.paytmTypo]}>
                      Coupons
                    </Text>
                    <Text style={[styles.couponsAvailable, styles.text1Typo]}>
                      0 coupons available
                    </Text>
                  </View>
                  <View style={[styles.groupChild2, styles.groupChildLayout]} />
                </View>
                <Image
                  style={styles.grommetIconsnext}
                  contentFit="cover"
                  source={require("../assets/grommeticonsnext.png")}
                />
              </View>
              <Image
                style={[styles.mdicouponIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/mdicoupon.png")}
              />
            </View>
          </View>
          <View style={[styles.groupParent2, styles.groupParentLayout]}>
            <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
              <View style={[styles.groupChild5, styles.groupParentLayout]} />
              <View style={[styles.sLeftWrapper, styles.iconPosition]}>
                <Text style={[styles.sLeft, styles.paytmTypo]}>90s left</Text>
              </View>
            </View>
            <Image
              style={[
                styles.interfaceEssentialclockoutlIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/interface-essentialclockoutlined.png")}
            />
          </View>
          <View style={[styles.groupParent3, styles.groupParentLayout1]}>
            <View style={[styles.groupView, styles.groupParentLayout1]}>
              <View style={[styles.groupView, styles.groupParentLayout1]}>
                <View style={[styles.groupChild1, styles.groupParentLayout1]} />
                <Text style={[styles.paytm1, styles.paytm1Position]}>
                  Google pay
                </Text>
                <Text style={[styles.text1, styles.text1Typo]}>
                  +91 8800850641
                </Text>
                <Text
                  style={[styles.text2, styles.iconPosition]}
                >{`₹ 60.00 `}</Text>
              </View>
              <View style={[styles.groupChild7, styles.groupChildLayout]} />
            </View>
            <Image
              style={styles.logosgooglePayIcon}
              contentFit="cover"
              source={require("../assets/logosgooglepay.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 932,
    width: 430,
    position: "absolute",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  groupBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    width: 24,
    height: 24,
  },
  groupChildPosition2: {
    width: 430,
    left: 0,
    position: "absolute",
  },
  groupParentLayout1: {
    height: 60,
    width: 362,
    position: "absolute",
  },
  groupLayout: {
    height: 52,
    width: 362,
    position: "absolute",
  },
  paytmTypo: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  rectangleLayout: {
    height: 48,
    width: 362,
    position: "absolute",
  },
  text2Typo: {
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
  },
  paytm1Position: {
    top: 8,
    marginLeft: -109,
    left: "50%",
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.poppins12_size,
    color: Color.grey,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    top: 18,
    position: "absolute",
  },
  groupChildLayout: {
    height: 42,
    width: 42,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  groupParentLayout: {
    width: 146,
    height: 60,
    position: "absolute",
  },
  iphone1415ProMax51Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  payment1: {
    marginLeft: -51,
    top: 48,
    fontSize: FontSize.poppins22Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontWeight: "600",
    left: "50%",
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
    borderColor: Color.iosStatusBarStatusBarTextColor,
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
  mingcutearrowUpLineIcon: {
    top: 50,
    height: 24,
    left: 34,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild: {
    top: 84,
    height: 248,
    backgroundColor: Color.d9D9D9,
    opacity: 0.4,
    left: 0,
  },
  groupItem: {
    borderRadius: Border.br_5xs,
    top: 108,
    width: 362,
    left: 34,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  groupInner: {
    backgroundColor: "#fefbfb",
    borderColor: Color.iosStatusBarStatusBarBackgroundColor,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  paytm: {
    marginLeft: -134,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  text: {
    marginLeft: 39,
    textAlign: "right",
    color: Color.grey,
    fontSize: FontSize.poppins16Bold_size,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  channels4Profile2Icon: {
    height: 24,
    left: 0,
    top: 0,
    position: "absolute",
  },
  paytmParent: {
    marginLeft: -166,
    top: 14,
    width: 332,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  rectangleGroup: {
    top: 116,
    left: 34,
  },
  rectangleView: {
    backgroundColor: Color.midBlue,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  proceedToPay: {
    top: 12,
    color: Color.iosStatusBarStatusBarBackgroundColor,
    marginLeft: -61,
    position: "absolute",
  },
  rectangleContainer: {
    top: 260,
    left: 34,
  },
  groupChild1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
  },
  paytm1: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  text1: {
    top: 34,
    marginLeft: -109,
    fontSize: FontSize.poppins12_size,
  },
  text2: {
    marginLeft: 99,
    color: Color.midBlue,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
  },
  groupView: {
    left: 0,
    top: 0,
  },
  groupChild2: {
    left: 18,
    top: 9,
    width: 42,
    backgroundColor: Color.d9D9D9,
  },
  groupParent: {
    top: 108,
    width: 362,
    left: 34,
  },
  channels4Profile3Icon: {
    top: 117,
    left: 52,
  },
  groupChild3: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  coupons: {
    marginLeft: -61,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  couponsAvailable: {
    top: 26,
    marginLeft: -61,
  },
  couponsParent: {
    width: 122,
    height: 44,
  },
  grommetIconsnext: {
    left: 323,
    width: 16,
    height: 16,
    overflow: "hidden",
    top: 22,
    position: "absolute",
  },
  mdicouponIcon: {
    left: 27,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  groupContainer: {
    left: 34,
    top: 0,
  },
  rectangleParent: {
    top: 123,
    height: 332,
    left: 0,
  },
  groupChild5: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.d9D9D9,
    opacity: 0.4,
    left: 0,
    top: 0,
  },
  sLeft: {
    marginLeft: -29.5,
    fontWeight: "600",
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  sLeftWrapper: {
    marginLeft: -13,
    width: 59,
    height: 24,
    left: "50%",
  },
  rectangleParent2: {
    left: 0,
    top: 0,
  },
  interfaceEssentialclockoutlIcon: {
    width: "16.44%",
    right: "64.38%",
    left: "19.18%",
    maxWidth: "100%",
    height: 24,
    overflow: "hidden",
  },
  groupParent2: {
    top: 524,
    left: 142,
  },
  groupChild7: {
    borderColor: Color.d9D9D9,
    left: 18,
    top: 9,
    width: 42,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  logosgooglePayIcon: {
    top: 25,
    left: 26,
    width: 26,
    height: 10,
    overflow: "hidden",
    position: "absolute",
  },
  groupParent3: {
    top: 307,
    left: 34,
  },
  iphone1415ProMax51: {
    backgroundColor: "#fdfdfd",
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  iphone1415ProMax51Wrapper: {
    left: 24,
    top: 22,
  },
  payment: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Payment;
