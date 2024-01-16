import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Order = () => {
  return (
    <View style={styles.order}>
      <View style={[styles.iphone1415ProMax54Wrapper, styles.iphone1415Layout]}>
        <View style={[styles.iphone1415ProMax54, styles.bottomNavLayout]}>
          <View style={styles.iphone1415ProMax54Child} />
          <Text style={[styles.orders, styles.dryFlexBox]}>Orders</Text>
          <View style={styles.iosStatusBar}>
            <Text style={styles.time}>9:41</Text>
            <View style={styles.wrapper}>
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
          <View style={[styles.rectangleParent, styles.groupChildLayout]}>
            <View style={[styles.groupChild, styles.menuListBg]} />
            <Image
              style={styles.humbleiconssearch}
              contentFit="cover"
              source={require("../assets/humbleiconssearch.png")}
            />
            <Text style={styles.searchOrders}>Search Orders...</Text>
          </View>
          <Text style={[styles.today, styles.todayTypo]}>Today</Text>
          <View style={[styles.view, styles.viewSpaceBlock]}>
            <View style={styles.content}>
              <View style={styles.intro}>
                <View style={styles.headlines}>
                  <Image
                    style={styles.headlinesChild}
                    contentFit="cover"
                    source={require("../assets/group-921.png")}
                  />
                  <View style={styles.headlineAndDetails}>
                    <Text style={[styles.dry, styles.dryTypo]}>{`Dry `}</Text>
                    <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                  </View>
                </View>
                <Text style={styles.oct2023606}>{`06 Oct 2023, 6:06 PM
`}</Text>
              </View>
              <Text
                style={[styles.completed, styles.homeClr]}
              >{`Completed      `}</Text>
            </View>
          </View>
          <View style={[styles.view1, styles.viewSpaceBlock]}>
            <View style={styles.content}>
              <View style={styles.intro}>
                <View style={styles.headlines}>
                  <Image
                    style={styles.washingMachine}
                    contentFit="cover"
                    source={require("../assets/washing-machine10.png")}
                  />
                  <View style={styles.headlineAndDetails}>
                    <Text style={[styles.dry, styles.dryTypo]}>{`Wash `}</Text>
                    <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                  </View>
                </View>
                <Text style={styles.oct2023606}>06 Oct 2023, 5:48 PM</Text>
              </View>
              <Text style={[styles.completed, styles.homeClr]}>Completed</Text>
            </View>
          </View>
          <View style={styles.oct2023Parent}>
            <Text style={[styles.oct2023, styles.todayTypo]}>05 Oct 2023</Text>
            <View style={[styles.view2, styles.viewSpaceBlock]}>
              <View style={styles.content}>
                <View style={styles.intro}>
                  <View style={styles.headlines}>
                    <Image
                      style={styles.washingMachine}
                      contentFit="cover"
                      source={require("../assets/washing-machine10.png")}
                    />
                    <View style={styles.headlineAndDetails}>
                      <Text
                        style={[styles.dry, styles.dryTypo]}
                      >{`Wash `}</Text>
                      <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                    </View>
                  </View>
                  <Text style={styles.oct2023606}>05 Oct 2023, 6:46 PM</Text>
                </View>
                <Text style={[styles.completed, styles.homeClr]}>
                  Completed
                </Text>
              </View>
            </View>
            <View style={[styles.view3, styles.viewSpaceBlock]}>
              <View style={styles.content}>
                <View style={styles.intro}>
                  <View style={styles.headlines}>
                    <Image
                      style={styles.headlinesChild}
                      contentFit="cover"
                      source={require("../assets/group-9211.png")}
                    />
                    <View style={styles.headlineAndDetails}>
                      <Text style={[styles.dry, styles.dryTypo]}>{`Dry `}</Text>
                      <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                    </View>
                  </View>
                  <Text style={styles.oct2023606}>05 Oct 2023, 5:48 PM</Text>
                </View>
                <Text style={[styles.completed, styles.homeClr]}>
                  Completed
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.view4, styles.viewSpaceBlock]}>
            <View style={styles.content}>
              <View style={styles.intro}>
                <View style={styles.headlines}>
                  <Image
                    style={styles.washingMachine}
                    contentFit="cover"
                    source={require("../assets/washing-machine10.png")}
                  />
                  <View style={styles.headlineAndDetails}>
                    <Text style={[styles.dry, styles.dryTypo]}>{`Wash `}</Text>
                    <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                  </View>
                </View>
                <Text style={styles.oct2023606}>06 Oct 2023, 5:57 PM</Text>
              </View>
              <Text style={[styles.completed, styles.homeClr]}>Completed</Text>
            </View>
          </View>
          <Text style={[styles.text, styles.textTypo]}>₹ 20</Text>
          <Text style={[styles.text1, styles.textTypo]}>₹ 30</Text>
          <Text style={[styles.text2, styles.textTypo]}>₹ 30</Text>
          <Text style={[styles.text3, styles.textTypo]}>₹ 30</Text>
          <View style={[styles.bottomNav, styles.menuListBg]}>
            <View style={[styles.menuList, styles.menuFlexBox]}>
              <View style={styles.menu2}>
                <View style={styles.homeParentSpaceBlock}>
                  <Image
                    style={styles.octiconhomeIconLayout}
                    contentFit="cover"
                    source={require("../assets/octiconhome241.png")}
                  />
                </View>
              </View>
              <View style={styles.menuFlexBox}>
                <View style={[styles.homeParent, styles.homeParentSpaceBlock]}>
                  <Text style={[styles.home, styles.textTypo]}>Home</Text>
                  <Image
                    style={[
                      styles.fluentcart24RegularIcon,
                      styles.octiconhomeIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/fluentcart24regular1.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.homeParentSpaceBlock}>
                  <Image
                    style={styles.octiconhomeIconLayout}
                    contentFit="cover"
                    source={require("../assets/fluentscandash24regular1.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.homeParentSpaceBlock}>
                  <Image
                    style={styles.octiconhomeIconLayout}
                    contentFit="cover"
                    source={require("../assets/octiconhome242.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.iphoneIndicator, styles.menuListBg]}>
              <View style={styles.line} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 932,
    position: "absolute",
  },
  bottomNavLayout: {
    overflow: "hidden",
    width: 430,
  },
  dryFlexBox: {
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 48,
    marginLeft: -181,
    width: 362,
    left: "50%",
  },
  menuListBg: {
    backgroundColor: Color.midBlue,
    position: "absolute",
  },
  todayTypo: {
    color: Color.grey,
    fontSize: FontSize.poppins16Bold_size,
    marginLeft: -181,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  viewSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_5xl,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_xs,
    marginLeft: -180,
    left: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  dryTypo: {
    display: "flex",
    fontSize: FontSize.poppins16Bold_size,
    alignItems: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  homeClr: {
    color: Color.midBlue,
    textAlign: "left",
  },
  textTypo: {
    fontWeight: "500",
    fontFamily: FontFamily.poppins16Bold,
  },
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeParentSpaceBlock: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 109,
    flexDirection: "row",
  },
  octiconhomeIconLayout: {
    height: 26,
    width: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  iphone1415ProMax54Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  orders: {
    marginLeft: -38,
    top: 44,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    fontFamily: FontFamily.poppins16Bold,
    textAlign: "left",
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
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  iosStatusBar: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_5xs,
    height: 48,
    marginLeft: -181,
    width: 362,
    left: "50%",
    top: 0,
  },
  humbleiconssearch: {
    left: 12,
    width: 24,
    height: 24,
    top: 12,
    overflow: "hidden",
    position: "absolute",
  },
  searchOrders: {
    marginLeft: -137,
    color: Color.d9D9D9,
    fontSize: FontSize.poppins16Bold_size,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  rectangleParent: {
    top: 101,
    position: "absolute",
  },
  today: {
    top: 173,
  },
  headlinesChild: {
    width: 32,
    height: 34,
  },
  dry: {
    width: 126,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  iiitdNewDelhi: {
    width: 181,
    marginTop: 4,
    fontSize: FontSize.poppins12_size,
    display: "flex",
    color: Color.grey,
    alignItems: "center",
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  headlineAndDetails: {
    width: 126,
    marginLeft: 8,
  },
  headlines: {
    width: 166,
    alignItems: "center",
    flexDirection: "row",
  },
  oct2023606: {
    width: 131,
    marginLeft: 16,
    textAlign: "right",
    fontSize: FontSize.poppins12_size,
    display: "flex",
    color: Color.grey,
    alignItems: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  intro: {
    flexDirection: "row",
  },
  completed: {
    width: 374,
    marginTop: 16,
    display: "flex",
    fontSize: FontSize.poppins16Bold_size,
    alignItems: "center",
    fontFamily: FontFamily.poppins16Bold,
  },
  content: {
    width: 313,
  },
  view: {
    top: 209,
  },
  washingMachine: {
    width: 31,
    height: 33,
  },
  view1: {
    top: 335,
  },
  oct2023: {
    top: 0,
  },
  view2: {
    top: 36,
  },
  view3: {
    top: 162,
  },
  oct2023Parent: {
    marginLeft: -178,
    top: 603,
    height: 280,
    width: 362,
    left: "50%",
    position: "absolute",
  },
  view4: {
    top: 461,
  },
  text: {
    top: 287,
    left: 338,
    fontWeight: "500",
    textAlign: "right",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  text1: {
    top: 413,
    left: 338,
    fontWeight: "500",
    textAlign: "right",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  text2: {
    top: 539,
    left: 338,
    fontWeight: "500",
    textAlign: "right",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  text3: {
    top: 717,
    left: 338,
    fontWeight: "500",
    textAlign: "right",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  home: {
    fontSize: FontSize.size_sm_1,
    lineHeight: 18,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    color: Color.midBlue,
    textAlign: "left",
  },
  fluentcart24RegularIcon: {
    marginLeft: 6.56,
  },
  homeParent: {
    alignItems: "center",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  menuList: {
    bottom: 33,
    paddingHorizontal: 18,
    paddingTop: 13,
    paddingBottom: 7,
    backgroundColor: Color.midBlue,
    position: "absolute",
    flexDirection: "row",
    left: 0,
    width: 430,
  },
  line: {
    marginLeft: -73.9,
    bottom: 9,
    width: 148,
    height: 6,
    borderRadius: 109,
    left: "50%",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    position: "absolute",
  },
  iphoneIndicator: {
    bottom: 0,
    height: 33,
    left: 0,
    width: 430,
  },
  bottomNav: {
    top: 820,
    left: 430,
    borderRadius: 26,
    height: 113,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
    width: 430,
  },
  iphone1415ProMax54: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    height: 932,
    position: "absolute",
  },
  iphone1415ProMax54Wrapper: {
    top: 1,
    left: 8,
    width: 430,
  },
  order: {
    width: "100%",
    height: 975,
    flex: 1,
  },
});

export default Order;
