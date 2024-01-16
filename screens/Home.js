import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.iphone1415ProMax49Wrapper, styles.iphone1415Layout]}>
        <View style={[styles.iphone1415ProMax49, styles.iphone1415Layout]}>
          <View style={styles.groupParent}>
            <View style={styles.rectangleParent}>
              <View style={[styles.groupChild, styles.groupChildLayout]} />
              <View style={[styles.groupItem, styles.groupChildLayout]} />
            </View>
            <Text style={[styles.whatDoYou, styles.whatDoYouFlexBox]}>
              What do you want to get done today?
            </Text>
          </View>
          <Text style={[styles.ongoingOrders, styles.whatDoYouFlexBox]}>
            Ongoing Orders
          </Text>
          <View style={styles.iphone1415ProMax49Child} />
          <View style={styles.iosStatusBar}>
            <Text style={[styles.time, styles.timeClr]}>9:41</Text>
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
          <View style={[styles.helloMasterParent, styles.groupViewLayout]}>
            <Text style={[styles.helloMaster, styles.whatDoYouFlexBox]}>
              Hello, Master!
            </Text>
            <View style={[styles.rectangleWrapper, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.rectangleLayout]} />
            </View>
            <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
              <View style={[styles.groupInner, styles.rectangleLayout]} />
            </View>
            <Image
              style={[
                styles.interfaceEssentialinformatioIcon,
                styles.interfaceIconLayout,
              ]}
              contentFit="cover"
              source={require("../assets/interface-essentialinformationcircleinterface-essentialinformationcircleoutlined1.png")}
            />
          </View>
          <Image
            style={[
              styles.interfaceEssentialhomeinterIcon,
              styles.interfaceIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/interface-essentialhomeinterface-essentialbelloutlined.png")}
          />
          <View style={styles.latestOffersParent}>
            <Text style={[styles.latestOffers, styles.whatDoYouFlexBox]}>
              Latest Offers
            </Text>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <Image
              style={styles.groupIcon}
              contentFit="cover"
              source={require("../assets/group-571.png")}
            />
          </View>
          <View style={[styles.notification, styles.notificationLayout]}>
            <View style={[styles.notificationChild, styles.menuListPosition]} />
            <Image
              style={styles.notificationItem}
              contentFit="cover"
              source={require("../assets/ellipse-7.png")}
            />
            <Image
              style={[styles.notificationInner, styles.groupChild4Layout]}
              contentFit="cover"
              source={require("../assets/ellipse-8.png")}
            />
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View style={styles.homeParent}>
                <Text style={[styles.home1, styles.offTypo]}>Home</Text>
                <View style={styles.iiitdNewDelhiWrapper}>
                  <Text style={styles.iiitdNewDelhi}>IIITD, New Delhi</Text>
                </View>
              </View>
            </View>
            <Image
              style={styles.iconamoonlocation}
              contentFit="cover"
              source={require("../assets/iconamoonlocation.png")}
            />
          </View>
          <View style={styles.humbleiconssearch} />
          <View style={[styles.rectangleGroup, styles.groupChildLayout]}>
            <View style={[styles.groupChild1, styles.groupChildPosition]} />
            <Text style={[styles.wash, styles.dryTypo]}>Wash</Text>
            <Text
              style={[
                styles.effortlesslyScheduleYour,
                styles.experienceQuickAndTypo,
              ]}
            >
              Effortlessly schedule your laundry wash.
            </Text>
            <Image
              style={[styles.washingMachine, styles.washingMachineLayout]}
              contentFit="cover"
              source={require("../assets/washing-machine11.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.groupChild2Layout]}>
            <View style={[styles.groupChild2, styles.groupChild2Layout]} />
            <Text style={[styles.dry, styles.dryTypo]}>Dry</Text>
            <Text
              style={[styles.experienceQuickAnd, styles.experienceQuickAndTypo]}
            >
              Experience quick and efficient drying cycles.
            </Text>
          </View>
          <View style={styles.rectangleParent2}>
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <View
              style={[styles.washingMachine11Parent, styles.parentPosition]}
            >
              <Text style={[styles.washingMachine11, styles.washingTypo]}>
                Washing machine 11
              </Text>
              <Text style={[styles.minsLeft, styles.minsTypo]}>
                38 mins left
              </Text>
              <Image
                style={[styles.groupChild4, styles.groupChild4Layout]}
                contentFit="cover"
                source={require("../assets/group-153.png")}
              />
            </View>
          </View>
          <View style={styles.rectangleParent3}>
            <View style={[styles.groupChild3, styles.groupChildPosition]} />
            <View style={[styles.minsLeftParent, styles.parentPosition]}>
              <Text style={[styles.minsLeft1, styles.minsTypo]}>
                3 mins left
              </Text>
              <View
                style={[styles.washingMachine4Parent, styles.groupChild4Layout]}
              >
                <Text style={[styles.washingMachine4, styles.washingTypo]}>
                  Washing machine 4
                </Text>
                <Image
                  style={[styles.groupChild4, styles.groupChild4Layout]}
                  contentFit="cover"
                  source={require("../assets/group-153.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={[styles.iphone1415ProMax49Item, styles.washingMachineLayout]}
            contentFit="cover"
            source={require("../assets/group-9212.png")}
          />
          <View style={styles.specialSummerOfferParent}>
            <Text style={[styles.specialSummerOffer, styles.whatDoYouFlexBox]}>
              Special Summer Offer
            </Text>
            <Text style={[styles.off, styles.offTypo]}>40% OFF</Text>
          </View>
          <Image
            style={styles.iphone1415ProMax49Inner}
            contentFit="cover"
            source={require("../assets/ellipse-83.png")}
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
                    source={require("../assets/octiconhome245.png")}
                  />
                  <Text style={[styles.home2, styles.minsTypo]}>Home</Text>
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/fluentscandash24regular4.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/fluentcart24regular4.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/iconamoonprofilelight3.png")}
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
  );
};

const styles = StyleSheet.create({
  iphone1415Layout: {
    height: 932,
    width: 430,
    position: "absolute",
  },
  groupChildLayout: {
    width: 173,
    height: 169,
    position: "absolute",
  },
  whatDoYouFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timeClr: {
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  groupViewLayout: {
    height: 42,
    position: "absolute",
  },
  rectangleLayout: {
    width: 42,
    height: 42,
    top: 0,
    position: "absolute",
  },
  interfaceIconLayout: {
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  notificationLayout: {
    width: 361,
    height: 60,
  },
  menuListPosition: {
    backgroundColor: Color.midBlue,
    left: 0,
    position: "absolute",
  },
  groupChild4Layout: {
    height: 24,
    position: "absolute",
  },
  offTypo: {
    color: Color.iosStatusBarStatusBarBackgroundColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
  },
  groupChildPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  dryTypo: {
    top: 76,
    height: 24,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    position: "absolute",
  },
  experienceQuickAndTypo: {
    color: Color.grey,
    fontSize: FontSize.poppins12_size,
    height: 40,
    top: 108,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    position: "absolute",
  },
  washingMachineLayout: {
    height: 50,
    width: 47,
    position: "absolute",
  },
  groupChild2Layout: {
    width: 175,
    height: 169,
    position: "absolute",
  },
  parentPosition: {
    marginLeft: -165,
    height: 24,
    top: 18,
    left: "50%",
    position: "absolute",
  },
  washingTypo: {
    fontSize: FontSize.bodyMediumMedium_size,
    top: 1,
    color: Color.grey,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  minsTypo: {
    color: Color.midBlue,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
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
  groupChild: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  groupItem: {
    left: 189,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_5xs,
    top: 0,
  },
  rectangleParent: {
    top: 40,
    height: 169,
    width: 362,
    left: 0,
    position: "absolute",
  },
  whatDoYou: {
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
    marginLeft: -181,
    top: 0,
  },
  groupParent: {
    top: 427,
    height: 209,
    width: 362,
    left: 34,
    position: "absolute",
  },
  ongoingOrders: {
    top: 660,
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
    marginLeft: -181,
  },
  iphone1415ProMax49Child: {
    top: 115,
    left: 678,
    width: 34,
    height: 143,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
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
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  helloMaster: {
    top: 5,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    marginLeft: -181,
  },
  groupInner: {
    backgroundColor: Color.d9D9D9,
    borderRadius: Border.br_5xs,
    left: 0,
  },
  rectangleWrapper: {
    left: 266,
  },
  rectangleContainer: {
    left: 320,
  },
  interfaceEssentialinformatioIcon: {
    width: "6.91%",
    right: "2.21%",
    left: "90.88%",
    height: 25,
    top: 9,
  },
  helloMasterParent: {
    top: 48,
    left: "50%",
    marginLeft: -181,
    width: 362,
  },
  interfaceEssentialhomeinterIcon: {
    height: "2.58%",
    width: "5.58%",
    top: "6.12%",
    right: "22.56%",
    bottom: "91.31%",
    left: "71.86%",
    maxHeight: "100%",
  },
  latestOffers: {
    marginLeft: -180,
    width: 144,
    height: 23,
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
    top: 0,
  },
  maskGroupIcon: {
    top: 39,
    height: 178,
    width: 362,
    left: 0,
    position: "absolute",
  },
  groupIcon: {
    top: 200,
    left: 158,
    width: 46,
    height: 5,
    position: "absolute",
  },
  latestOffersParent: {
    top: 186,
    height: 217,
    left: "50%",
    marginLeft: -181,
    width: 362,
    position: "absolute",
  },
  notificationChild: {
    borderRadius: Border.br_3xs,
    height: 60,
    width: 361,
    top: 0,
  },
  notificationItem: {
    top: 10,
    left: 12,
    width: 40,
    opacity: 0.5,
    height: 40,
    position: "absolute",
  },
  notificationInner: {
    width: 24,
    opacity: 0.8,
    left: 20,
    top: 18,
    height: 24,
  },
  home1: {
    fontWeight: "500",
  },
  iiitdNewDelhi: {
    color: Color.d9D9D9,
    fontSize: FontSize.poppins12_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iiitdNewDelhiWrapper: {
    height: 18,
    width: 88,
  },
  homeParent: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupView: {
    left: 60,
    width: 88,
    top: 9,
  },
  iconamoonlocation: {
    top: 23,
    left: 25,
    width: 14,
    height: 14,
    overflow: "hidden",
    position: "absolute",
  },
  notification: {
    left: 35,
    height: 60,
    top: 108,
    width: 361,
    position: "absolute",
  },
  humbleiconssearch: {
    top: 187,
    left: 302,
    width: 12,
    height: 12,
    overflow: "hidden",
    position: "absolute",
  },
  groupChild1: {
    width: 173,
    height: 169,
    position: "absolute",
  },
  wash: {
    width: 67,
    left: 18,
  },
  effortlesslyScheduleYour: {
    width: 131,
    left: 18,
  },
  washingMachine: {
    top: 17,
    left: 18,
  },
  rectangleGroup: {
    top: 467,
    left: 34,
  },
  groupChild2: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  dry: {
    width: 105,
    left: 20,
  },
  experienceQuickAnd: {
    width: 139,
    left: 20,
  },
  rectangleParent1: {
    left: 221,
    top: 467,
  },
  groupChild3: {
    height: 60,
    width: 362,
    position: "absolute",
  },
  washingMachine11: {
    marginLeft: -131,
  },
  minsLeft: {
    marginLeft: 95,
    top: 3,
    color: Color.midBlue,
    fontSize: FontSize.poppins12_size,
    left: "50%",
    position: "absolute",
  },
  groupChild4: {
    width: 22,
    left: 0,
    top: 0,
  },
  washingMachine11Parent: {
    width: 330,
  },
  rectangleParent2: {
    top: 768,
    height: 60,
    width: 362,
    left: 34,
    position: "absolute",
  },
  minsLeft1: {
    marginLeft: 100,
    top: 3,
    color: Color.midBlue,
    fontSize: FontSize.poppins12_size,
    left: "50%",
    position: "absolute",
  },
  washingMachine4: {
    marginLeft: -53,
  },
  washingMachine4Parent: {
    marginLeft: -162,
    width: 174,
    left: "50%",
    top: 0,
  },
  minsLeftParent: {
    width: 324,
  },
  rectangleParent3: {
    top: 700,
    height: 60,
    width: 362,
    left: 34,
    position: "absolute",
  },
  iphone1415ProMax49Item: {
    top: 485,
    left: 241,
  },
  specialSummerOffer: {
    fontSize: 25,
    fontFamily: FontFamily.praise,
    color: "#6f604d",
    left: 0,
    top: 0,
  },
  off: {
    top: 30,
    left: 0,
    position: "absolute",
  },
  specialSummerOfferParent: {
    top: 244,
    left: 58,
    width: 177,
    height: 54,
    position: "absolute",
  },
  iphone1415ProMax49Inner: {
    top: 58,
    left: 323,
    width: 9,
    height: 9,
    position: "absolute",
  },
  octiconhome24: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  home2: {
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
    paddingHorizontal: 17,
    paddingTop: 13,
    paddingBottom: 7,
    backgroundColor: Color.midBlue,
    left: 0,
    position: "absolute",
    flexDirection: "row",
    width: 430,
  },
  line: {
    marginLeft: -73.75,
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
    width: 430,
  },
  bottomNav: {
    top: 820,
    borderRadius: 26,
    height: 113,
    overflow: "hidden",
    width: 430,
  },
  iphone1415ProMax49: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
  },
  iphone1415ProMax49Wrapper: {
    top: 22,
    left: 24,
  },
  home: {
    width: "100%",
    height: 975,
    flex: 1,
  },
});

export default Home;
