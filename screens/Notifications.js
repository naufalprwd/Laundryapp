import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Notifications = () => {
  return (
    <View style={styles.notifications}>
      <View
        style={[styles.notificationsInner, styles.notificationsInnerPosition]}
      >
        <View
          style={[styles.iphone1415ProMax53Wrapper, styles.iphone1415Layout1]}
        >
          <View style={[styles.iphone1415ProMax53, styles.iphone1415Layout1]}>
            <View
              style={[styles.iphone1415ProMax53Child, styles.iphone1415Layout]}
            />
            <View
              style={[styles.iphone1415ProMax53Item, styles.iphone1415Layout]}
            />
            <View
              style={[styles.iphone1415ProMax53Inner, styles.iphone1415Layout]}
            />
            <View style={styles.rectangleView} />
            <View style={styles.iosStatusBar}>
              <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
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
            <Text style={[styles.notifications1, styles.am4Typo]}>
              Notifications
            </Text>
            <Image
              style={styles.mingcutearrowUpLineIcon}
              contentFit="cover"
              source={require("../assets/mingcutearrowupline.png")}
            />
            <View style={[styles.todayParent, styles.parentPosition]}>
              <Text style={styles.today}>Today</Text>
              <View style={[styles.groupParent, styles.groupParentLayout]}>
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <View
                    style={[
                      styles.masterYourLaundryIsDoneParent,
                      styles.laundryParentPosition,
                    ]}
                  >
                    <Text
                      style={[styles.masterYourLaundry, styles.yourPosition]}
                    >
                      Master, your laundry is done!
                    </Text>
                    <Text style={[styles.justNow, styles.homeTypo]}>
                      Just Now
                    </Text>
                  </View>
                </View>
                <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <View
                    style={[
                      styles.masterYourLaundryIsDoneParent,
                      styles.laundryParentPosition,
                    ]}
                  >
                    <Text style={[styles.offYourNext, styles.yourPosition]}>
                      50% off your next laundry
                    </Text>
                    <Text style={[styles.pm, styles.pmTypo]}>3:00 PM</Text>
                  </View>
                </View>
                <View
                  style={[styles.rectangleContainer, styles.rectangleLayout]}
                >
                  <View style={[styles.groupChild, styles.groupChildLayout]} />
                  <View
                    style={[
                      styles.masterYourLaundryIsDoneParent,
                      styles.laundryParentPosition,
                    ]}
                  >
                    <Text
                      style={[styles.offYourNext, styles.yourPosition]}
                    >{`Check out brand new offers `}</Text>
                    <Text style={[styles.am, styles.pmTypo]}>11:00 AM</Text>
                  </View>
                </View>
                <Image
                  style={[
                    styles.mingcutecouponLineIcon,
                    styles.mingcutecouponIconPosition,
                  ]}
                  contentFit="cover"
                  source={require("../assets/mingcutecouponfill.png")}
                />
                <View
                  style={[
                    styles.mingcutecouponLine,
                    styles.mingcutecouponIconPosition,
                  ]}
                />
              </View>
            </View>
            <View style={[styles.oct2023Parent, styles.parentPosition]}>
              <Text style={[styles.oct2023, styles.oct2023Typo]}>
                06 Oct 2023
              </Text>
              <View style={[styles.groupContainer, styles.groupPosition]}>
                <View style={[styles.groupView, styles.groupParentLayout]}>
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text style={[styles.offYourNext, styles.yourPosition]}>
                        Master, your laundry is done!
                      </Text>
                      <Text style={[styles.pm1, styles.pmTypo]}>11:47 PM</Text>
                    </View>
                  </View>
                  <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text
                        style={[styles.offYourNext, styles.yourPosition]}
                      >{`Weekly discount `}</Text>
                      <Text style={[styles.pm, styles.pmTypo]}>9:08 PM</Text>
                    </View>
                  </View>
                  <View
                    style={[styles.rectangleContainer, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text style={[styles.offYourNext, styles.yourPosition]}>
                        Washing machine is available
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>9:00 PM</Text>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.mingcutecouponLineIcon,
                      styles.mingcutecouponIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/mingcutecouponfill.png")}
                  />
                </View>
                <View style={[styles.groupParent1, styles.groupParentLayout]}>
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text style={[styles.offYourNext, styles.yourPosition]}>
                        Dryers are available now!
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>6:45 PM</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rectangleParent5,
                      styles.rectangleParentLayout2,
                    ]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.aFreeLaundryCouponYayParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text
                        style={[
                          styles.aFreeLaundry,
                          styles.aFreeLaundryPosition,
                        ]}
                      >
                        A free laundry coupon, yay!
                      </Text>
                      <Text style={[styles.am1, styles.pmTypo]}> 8:52 AM</Text>
                    </View>
                  </View>
                  <View
                    style={[styles.rectangleContainer, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text style={[styles.offYourNext, styles.yourPosition]}>
                        Check the coupons available
                      </Text>
                      <Text style={[styles.am2, styles.pmTypo]}> 8:50 AM</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.oct2023Group, styles.parentPosition]}>
              <Text style={[styles.oct2023, styles.oct2023Typo]}>
                05 Oct 2023
              </Text>
              <View style={[styles.groupParent2, styles.groupPosition]}>
                <View style={[styles.groupView, styles.groupParentLayout]}>
                  <View
                    style={[styles.rectangleParent, styles.rectangleLayout]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.masterYourLaundryIsDoneParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text style={[styles.offYourNext, styles.yourPosition]}>
                        Master, Your laundry is done!
                      </Text>
                      <Text style={[styles.pm, styles.pmTypo]}>2:00 PM</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rectangleParent5,
                      styles.rectangleParentLayout2,
                    ]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.aFreeLaundryCouponYayParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text
                        style={[
                          styles.aFreeLaundry,
                          styles.aFreeLaundryPosition,
                        ]}
                      >
                        5 new coupons!
                      </Text>
                      <Text style={[styles.am3, styles.pmTypo]}>11:37 AM</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rectangleParent9,
                      styles.rectangleParentLayout2,
                    ]}
                  >
                    <View
                      style={[styles.groupChild, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.aFreeLaundryCouponYayParent,
                        styles.laundryParentPosition,
                      ]}
                    >
                      <Text
                        style={[
                          styles.dryersAreAvailable1,
                          styles.aFreeLaundryPosition,
                        ]}
                      >
                        Dryers are available now!
                      </Text>
                      <Text style={[styles.am4, styles.am4Position]}>
                        6:00 am
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.mingcutecouponLineIcon,
                      styles.mingcutecouponIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/mingcutecouponfill.png")}
                  />
                </View>
                <View style={[styles.groupParent4, styles.parentLayout]}>
                  <View
                    style={[
                      styles.rectangleParent10,
                      styles.rectangleParentLayout,
                    ]}
                  >
                    <View
                      style={[styles.groupChild10, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.yourLaundryIsDoneParent,
                        styles.rectangleParentLayout,
                      ]}
                    >
                      <Text
                        style={[styles.yourLaundryIs, styles.justNow1Position]}
                      >
                        Your laundry is done!
                      </Text>
                      <Text style={[styles.justNow1, styles.justTypo]}>
                        Just Now
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rectangleParent11,
                      styles.rectangleParentLayout,
                    ]}
                  >
                    <View
                      style={[styles.groupChild10, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.yourLaundryIsDoneParent,
                        styles.rectangleParentLayout,
                      ]}
                    >
                      <Text
                        style={[styles.yourLaundryIs, styles.justNow1Position]}
                      >
                        Your laundry is done!
                      </Text>
                      <Text style={[styles.justNow1, styles.justTypo]}>
                        Just Now
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.rectangleParent12,
                      styles.rectangleParentLayout,
                    ]}
                  >
                    <View
                      style={[styles.groupChild10, styles.groupChildLayout]}
                    />
                    <View
                      style={[
                        styles.yourLaundryIsDoneContainer,
                        styles.rectangleParentLayout,
                      ]}
                    >
                      <Text
                        style={[styles.yourLaundryIs2, styles.justNow3Position]}
                      >
                        Your laundry is done!
                      </Text>
                      <Text style={[styles.justNow3, styles.justNow3Position]}>
                        Just Now
                      </Text>
                    </View>
                  </View>
                  <Image
                    style={[
                      styles.mingcutecouponLineIcon3,
                      styles.mingcutecouponIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/mingcutecouponline.png")}
                  />
                  <Image
                    style={[
                      styles.mingcutecouponLineIcon4,
                      styles.mingcutecouponIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/mingcutecouponline.png")}
                  />
                </View>
                <Image
                  style={[styles.uilcommentIcon, styles.uilcommentIconLayout]}
                  contentFit="cover"
                  source={require("../assets/uilcomment.png")}
                />
                <Image
                  style={[styles.uilcommentIcon1, styles.uilcommentIconLayout]}
                  contentFit="cover"
                  source={require("../assets/uilcomment.png")}
                />
              </View>
            </View>
            <Image
              style={[
                styles.ioncheckmarkDoneCircleIcon,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/ioncheckmarkdonecircle.png")}
            />
            <Image
              style={[
                styles.mingcutecouponFillIcon,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/mingcutecouponfill.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <Image
              style={[
                styles.basilcommentSolidIcon,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/basilcommentsolid.png")}
            />
            <Image
              style={[
                styles.basilcommentSolidIcon1,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/basilcommentsolid.png")}
            />
            <Image
              style={[
                styles.mingcutecouponFillIcon1,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/mingcutecouponfill.png")}
            />
            <Image
              style={[
                styles.mingcutecouponFillIcon2,
                styles.basilcommentIconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/mingcutecouponfill.png")}
            />
            <Image
              style={[styles.vectorIcon1, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector1.png")}
            />
            <View style={[styles.bottomNav, styles.menuListPosition]}>
              <View style={[styles.menuList, styles.menuFlexBox]}>
                <View style={styles.menuFlexBox}>
                  <View
                    style={[
                      styles.octiconhome24Parent,
                      styles.octiconhome24ParentSpaceBlock,
                    ]}
                  >
                    <Image
                      style={styles.octiconhome24}
                      contentFit="cover"
                      source={require("../assets/octiconhome244.png")}
                    />
                    <Text style={[styles.home, styles.homeTypo]}>Home</Text>
                  </View>
                </View>
                <View style={styles.menu2}>
                  <View style={styles.octiconhome24ParentSpaceBlock}>
                    <Image
                      style={styles.octiconhome24}
                      contentFit="cover"
                      source={require("../assets/fluentscandash24regular3.png")}
                    />
                  </View>
                </View>
                <View style={styles.menu2}>
                  <View style={styles.octiconhome24ParentSpaceBlock}>
                    <Image
                      style={styles.octiconhome24}
                      contentFit="cover"
                      source={require("../assets/fluentcart24regular3.png")}
                    />
                  </View>
                </View>
                <View style={styles.menu2}>
                  <View style={styles.octiconhome24ParentSpaceBlock}>
                    <Image
                      style={styles.octiconhome24}
                      contentFit="cover"
                      source={require("../assets/iconamoonprofilelight2.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={[styles.iphoneIndicator, styles.menuListPosition]}>
                <View style={styles.line} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsInnerPosition: {
    left: 0,
    top: 0,
  },
  iphone1415Layout1: {
    height: 932,
    width: 430,
    position: "absolute",
  },
  iphone1415Layout: {
    width: 396,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  am4Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  parentPosition: {
    width: 362,
    marginLeft: -181,
    left: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    height: 136,
    width: 362,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    height: 34,
    width: 362,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    backgroundColor: Color.d9D9D9,
    height: 34,
    width: 34,
    borderRadius: Border.br_5xs,
    left: 0,
    position: "absolute",
  },
  laundryParentPosition: {
    top: 5,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  yourPosition: {
    marginLeft: -156,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  homeTypo: {
    color: Color.midBlue,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  pmTypo: {
    textAlign: "right",
    fontSize: FontSize.poppins12_size,
    top: 3,
    color: Color.grey,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  mingcutecouponIconPosition: {
    left: 5,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  oct2023Typo: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  groupPosition: {
    top: 52,
    width: 362,
    left: 0,
    position: "absolute",
  },
  rectangleParentLayout2: {
    width: 361,
    height: 34,
    left: 0,
    position: "absolute",
  },
  aFreeLaundryPosition: {
    marginLeft: -155.5,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  am4Position: {
    top: 3,
    fontSize: FontSize.poppins12_size,
    left: "50%",
    position: "absolute",
  },
  parentLayout: {
    width: 209,
    left: 0,
  },
  rectangleParentLayout: {
    height: 39,
    position: "absolute",
  },
  justNow1Position: {
    marginLeft: -63,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  justTypo: {
    top: 21,
    fontSize: FontSize.poppins12_size,
    color: Color.grey,
    fontFamily: FontFamily.poppins16Bold,
  },
  justNow3Position: {
    marginLeft: -79.5,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  uilcommentIconLayout: {
    height: 20,
    width: 20,
    left: 7,
    overflow: "hidden",
    position: "absolute",
  },
  basilcommentIconPosition: {
    left: 39,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    left: "9.53%",
    right: "85.93%",
    width: "4.53%",
    height: "2.09%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  menuListPosition: {
    backgroundColor: Color.midBlue,
    width: 430,
    left: 0,
    position: "absolute",
  },
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  octiconhome24ParentSpaceBlock: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 109,
    flexDirection: "row",
  },
  iphone1415ProMax53Child: {
    top: 724,
    height: 316,
    left: "50%",
    marginLeft: -198,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
  },
  iphone1415ProMax53Item: {
    top: 130,
    left: 18,
    height: 168,
  },
  iphone1415ProMax53Inner: {
    top: 349,
    height: 323,
    left: "50%",
    marginLeft: -198,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
  },
  rectangleView: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    height: 143,
    width: 34,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
    textAlign: "center",
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
    left: "50%",
    position: "absolute",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
    maxHeight: "100%",
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
    width: 430,
    left: 0,
    top: 0,
    position: "absolute",
  },
  notifications1: {
    marginLeft: -71,
    top: 40,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    color: Color.iosStatusBarStatusBarTextColor,
    left: "50%",
    position: "absolute",
  },
  mingcutearrowUpLineIcon: {
    top: 45,
    left: 34,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  today: {
    color: Color.grey,
    fontSize: FontSize.poppins16Bold_size,
    marginLeft: -181,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  masterYourLaundry: {
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  justNow: {
    marginLeft: 102,
    fontSize: FontSize.poppins12_size,
    top: 3,
    left: "50%",
    position: "absolute",
  },
  masterYourLaundryIsDoneParent: {
    marginLeft: -131,
    width: 312,
  },
  rectangleParent: {
    top: 0,
  },
  offYourNext: {
    color: Color.grey,
  },
  pm: {
    marginLeft: 110,
  },
  rectangleGroup: {
    top: 51,
  },
  am: {
    marginLeft: 109,
  },
  rectangleContainer: {
    top: 102,
  },
  mingcutecouponLineIcon: {
    top: 56,
  },
  mingcutecouponLine: {
    top: 107,
  },
  groupParent: {
    top: 48,
  },
  todayParent: {
    top: 97,
    height: 184,
  },
  oct2023: {
    color: Color.grey,
    marginLeft: -181,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  pm1: {
    marginLeft: 111,
  },
  groupView: {
    top: 0,
  },
  aFreeLaundry: {
    color: Color.grey,
  },
  am1: {
    marginLeft: 105.5,
  },
  aFreeLaundryCouponYayParent: {
    marginLeft: -130.5,
    width: 311,
  },
  rectangleParent5: {
    top: 51,
  },
  am2: {
    marginLeft: 105,
  },
  groupParent1: {
    top: 153,
  },
  groupContainer: {
    height: 289,
  },
  oct2023Parent: {
    top: 314,
    height: 341,
  },
  am3: {
    marginLeft: 109.5,
  },
  dryersAreAvailable1: {
    color: Color.iosStatusBarStatusBarTextColor,
  },
  am4: {
    marginLeft: 106.5,
    fontSize: FontSize.poppins12_size,
    color: Color.grey,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  rectangleParent9: {
    top: 102,
  },
  groupChild10: {
    top: 2,
  },
  yourLaundryIs: {
    fontSize: FontSize.poppins12_size,
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    top: 0,
  },
  justNow1: {
    marginLeft: -63,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  yourLaundryIsDoneParent: {
    marginLeft: -38,
    width: 126,
    left: "50%",
    top: 0,
  },
  rectangleParent10: {
    width: 176,
    height: 39,
    left: 0,
    top: 0,
  },
  rectangleParent11: {
    width: 176,
    height: 39,
    left: 0,
    top: 51,
  },
  yourLaundryIs2: {
    fontFamily: FontFamily.inter,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  justNow3: {
    top: 21,
    fontSize: FontSize.poppins12_size,
    color: Color.grey,
    fontFamily: FontFamily.poppins16Bold,
  },
  yourLaundryIsDoneContainer: {
    marginLeft: -54.5,
    width: 159,
    left: "50%",
    top: 0,
  },
  rectangleParent12: {
    width: 209,
    left: 0,
    top: 102,
  },
  mingcutecouponLineIcon3: {
    top: 58,
  },
  mingcutecouponLineIcon4: {
    top: 109,
  },
  groupParent4: {
    top: 151,
    height: 141,
    position: "absolute",
  },
  uilcommentIcon: {
    top: 160,
  },
  uilcommentIcon1: {
    top: 109,
  },
  groupParent2: {
    height: 292,
  },
  oct2023Group: {
    top: 688,
    height: 344,
  },
  ioncheckmarkDoneCircleIcon: {
    top: 150,
  },
  mingcutecouponFillIcon: {
    top: 252,
  },
  vectorIcon: {
    top: "40.02%",
    bottom: "57.89%",
  },
  basilcommentSolidIcon: {
    top: 473,
  },
  basilcommentSolidIcon1: {
    top: 524,
  },
  mingcutecouponFillIcon1: {
    top: 575,
  },
  mingcutecouponFillIcon2: {
    top: 626,
  },
  vectorIcon1: {
    top: "80.15%",
    bottom: "17.76%",
  },
  octiconhome24: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_sm_1,
    lineHeight: 18,
    marginLeft: 6.56,
    fontWeight: "500",
  },
  octiconhome24Parent: {
    alignItems: "center",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  menu2: {
    alignItems: "center",
    flex: 1,
  },
  menuList: {
    bottom: 33,
    paddingHorizontal: 18,
    paddingTop: 13,
    paddingBottom: 7,
    backgroundColor: Color.midBlue,
    width: 430,
    left: 0,
    position: "absolute",
    flexDirection: "row",
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
  },
  bottomNav: {
    top: 820,
    borderRadius: 26,
    height: 113,
    overflow: "hidden",
  },
  iphone1415ProMax53: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
  },
  iphone1415ProMax53Wrapper: {
    top: 22,
    left: 24,
  },
  notificationsInner: {
    width: 479,
    position: "absolute",
    height: 975,
  },
  notifications: {
    width: "100%",
    height: 975,
    flex: 1,
  },
});

export default Notifications;
