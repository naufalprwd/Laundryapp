import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.iphone1415ProMax52Wrapper, styles.iphone1415Layout]}>
        <View style={[styles.iphone1415ProMax52, styles.iphone1415Layout]}>
          <View style={styles.iphone1415ProMax52Child} />
          <View style={styles.iphone1415ProMax52Item} />
          <Text style={[styles.profile1, styles.profileTypo]}>Profile</Text>
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
                <View style={[styles.border, styles.textPosition]} />
                <Image
                  style={[styles.capIcon, styles.textPosition]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.textPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={[
              styles.mingcutearrowUpLineIcon,
              styles.mingcutearrowUpLineIconLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <Text style={[styles.joannaMatthew, styles.profileTypo]}>
            Joanna Matthew
          </Text>
          <Text style={[styles.text, styles.textTypo]}>+91 8800850641</Text>
          <Image
            style={styles.iphone1415ProMax52InnerPosition}
            contentFit="cover"
            source={require("../assets/group-160.png")}
          />
          <View style={styles.groupParent}>
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View
                style={[styles.grommetIconsnextParent, styles.parentLayout]}
              >
                <Image
                  style={styles.grommetIconsnext}
                  contentFit="cover"
                  source={require("../assets/grommeticonsnext.png")}
                />
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.feedback, styles.feedbackPosition]}>
                  Feedback
                </Text>
                <View
                  style={[
                    styles.fluentpersonFeedback32Regu,
                    styles.feedbackPosition,
                  ]}
                />
              </View>
            </View>
            <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <View
                style={[styles.grommetIconsnextParent, styles.parentLayout]}
              >
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.feedback, styles.feedbackPosition]}>
                  Offers
                </Text>
                <Image
                  style={styles.grommetIconsnext}
                  contentFit="cover"
                  source={require("../assets/grommeticonsnext.png")}
                />
              </View>
            </View>
            <View style={[styles.groupView, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View
                style={[styles.grommetIconsnextParent, styles.parentLayout]}
              >
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.feedback, styles.feedbackPosition]}>
                  Help
                </Text>
                <Image
                  style={styles.grommetIconsnext}
                  contentFit="cover"
                  source={require("../assets/grommeticonsnext.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View
                style={[styles.grommetIconsnextParent, styles.parentLayout]}
              >
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.feedback, styles.feedbackPosition]}>
                  Platform Service
                </Text>
                <Image
                  style={styles.grommetIconsnext}
                  contentFit="cover"
                  source={require("../assets/grommeticonsnext.png")}
                />
              </View>
            </View>
            <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View style={[styles.rectangleParent5, styles.parentLayout]}>
                <View style={[styles.groupItem, styles.groupPosition]} />
                <Text style={[styles.feedback, styles.feedbackPosition]}>
                  Sign Out
                </Text>
              </View>
            </View>
            <View style={styles.mingcutecouponLine} />
          </View>
          <Image
            style={[styles.fluentpersonFeedback20FillIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/fluentpersonfeedback20filled.png")}
          />
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupWrapper, styles.groupLayout]}>
              <View style={[styles.groupWrapper, styles.groupLayout]}>
                <View style={[styles.groupChild7, styles.groupLayout]} />
              </View>
            </View>
            <View style={[styles.groupParent1, styles.textPosition]}>
              <View style={[styles.editProfileWrapper, styles.textPosition]}>
                <Text style={[styles.editProfile, styles.textTypo]}>
                  Edit Profile
                </Text>
              </View>
              <Image
                style={styles.editeditIcon}
                contentFit="cover"
                source={require("../assets/editedit.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.mingcutecouponFillIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mingcutecouponfill.png")}
          />
          <Image
            style={[styles.uissignoutIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/uissignout.png")}
          />
          <Image
            style={[styles.mingcuteserviceFillIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/mingcuteservicefill.png")}
          />
          <Image
            style={[styles.gridiconshelp, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/gridiconshelp.png")}
          />
          <View style={[styles.bottomNav, styles.menuListBg]}>
            <View style={[styles.menuList, styles.menuFlexBox]}>
              <View style={styles.menuFlexBox}>
                <View
                  style={[
                    styles.profileParent,
                    styles.regularWrapperSpaceBlock,
                  ]}
                >
                  <Text style={[styles.profile2, styles.profileTypo]}>
                    Profile
                  </Text>
                  <Image
                    style={[
                      styles.iconamoonprofileLight,
                      styles.regularIconLayout,
                    ]}
                    contentFit="cover"
                    source={require("../assets/iconamoonprofilelight1.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View
                  style={[
                    styles.fluentcart24RegularWrapper,
                    styles.regularWrapperSpaceBlock,
                  ]}
                >
                  <Image
                    style={styles.regularIconLayout}
                    contentFit="cover"
                    source={require("../assets/fluentcart24regular2.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.regularWrapperSpaceBlock}>
                  <Image
                    style={styles.regularIconLayout}
                    contentFit="cover"
                    source={require("../assets/fluentscandash24regular2.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.regularWrapperSpaceBlock}>
                  <Image
                    style={styles.regularIconLayout}
                    contentFit="cover"
                    source={require("../assets/octiconhome243.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.iphoneIndicator, styles.menuListBg]}>
              <View style={styles.line} />
            </View>
          </View>
          <Image
            style={[
              styles.pexelsAndreaPiacquadio73387Icon,
              styles.iphone1415ProMax52InnerPosition,
            ]}
            contentFit="cover"
            source={require("../assets/pexelsandreapiacquadio733872-1.png")}
          />
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
  profileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  mingcutearrowUpLineIconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  textTypo: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  groupParentLayout: {
    height: 60,
    width: 362,
    position: "absolute",
  },
  groupLayout1: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_3xs,
    height: 60,
    width: 362,
    top: 0,
    position: "absolute",
  },
  parentLayout: {
    height: 42,
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.d9D9D9,
    left: 0,
    top: 0,
  },
  feedbackPosition: {
    top: 9,
    position: "absolute",
  },
  iconPosition: {
    left: 55,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout: {
    width: 168,
    height: 60,
    position: "absolute",
  },
  menuListBg: {
    backgroundColor: Color.midBlue,
    width: 430,
    position: "absolute",
  },
  menuFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  regularWrapperSpaceBlock: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 109,
    flexDirection: "row",
  },
  regularIconLayout: {
    height: 26,
    width: 26,
    transform: [
      {
        rotate: "180deg",
      },
    ],
    overflow: "hidden",
  },
  iphone1415ProMax52InnerPosition: {
    height: 106,
    width: 106,
    left: 162,
    top: 125,
    position: "absolute",
  },
  iphone1415ProMax52Child: {
    top: 123,
    left: 160,
    borderRadius: 31,
    width: 110,
    height: 110,
    position: "absolute",
  },
  iphone1415ProMax52Item: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  profile1: {
    marginLeft: -35,
    top: 53,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
    fontSize: FontSize.poppins22Bold_size,
    textAlign: "left",
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
  mingcutearrowUpLineIcon: {
    top: 54,
    left: 34,
    height: 24,
    position: "absolute",
  },
  joannaMatthew: {
    marginLeft: -95,
    top: 250,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
    fontSize: FontSize.poppins22Bold_size,
    textAlign: "left",
  },
  text: {
    marginLeft: -63,
    top: 283,
    color: Color.grey,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    marginLeft: -181,
    left: "50%",
  },
  grommetIconsnext: {
    top: 11,
    left: 310,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_5xs,
    width: 42,
    height: 42,
    position: "absolute",
  },
  feedback: {
    left: 54,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  fluentpersonFeedback32Regu: {
    left: 9,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  grommetIconsnextParent: {
    width: 326,
    left: 12,
    height: 42,
    top: 9,
  },
  rectangleParent: {
    top: 68,
    marginLeft: -181,
    left: "50%",
  },
  groupInner: {
    left: 0,
  },
  rectangleGroup: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 136,
    marginLeft: -181,
    left: "50%",
  },
  rectangleParent2: {
    top: 204,
    marginLeft: -181,
    left: "50%",
  },
  rectangleParent5: {
    width: 122,
    left: 12,
    height: 42,
    top: 9,
  },
  rectangleParent4: {
    top: 272,
    marginLeft: -181,
    left: "50%",
  },
  mingcutecouponLine: {
    height: "7.23%",
    width: "6.63%",
    top: "5.42%",
    right: "87.57%",
    bottom: "87.35%",
    left: "5.8%",
    overflow: "hidden",
    position: "absolute",
  },
  groupParent: {
    top: 429,
    height: 332,
    width: 362,
    marginLeft: -181,
    left: "50%",
    position: "absolute",
  },
  fluentpersonFeedback20FillIcon: {
    top: 517,
  },
  groupChild7: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.d9D9D9,
    left: 0,
    top: 0,
    opacity: 0.4,
  },
  groupWrapper: {
    left: 0,
    top: 0,
  },
  editProfile: {
    marginLeft: -42.5,
    color: Color.iosStatusBarStatusBarTextColor,
    fontWeight: "600",
    left: "50%",
    position: "absolute",
    top: 0,
  },
  editProfileWrapper: {
    marginLeft: -25.5,
    width: 85,
    height: 24,
    top: 0,
  },
  editeditIcon: {
    width: "20.17%",
    right: "79.83%",
    left: "0%",
    maxWidth: "100%",
    height: 24,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  groupParent1: {
    marginLeft: -59,
    top: 18,
    width: 119,
    height: 24,
  },
  groupContainer: {
    top: 332,
    left: 131,
  },
  mingcutecouponFillIcon: {
    top: 447,
  },
  uissignoutIcon: {
    top: 719,
  },
  mingcuteserviceFillIcon: {
    top: 651,
  },
  gridiconshelp: {
    top: 583,
  },
  profile2: {
    fontSize: FontSize.size_sm_1,
    lineHeight: 18,
    fontWeight: "500",
    color: Color.midBlue,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  iconamoonprofileLight: {
    marginLeft: 6.56,
  },
  profileParent: {
    alignItems: "center",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  fluentcart24RegularWrapper: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
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
    position: "absolute",
    flexDirection: "row",
    left: 0,
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
  },
  pexelsAndreaPiacquadio73387Icon: {
    borderRadius: 30,
  },
  iphone1415ProMax52: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
  },
  iphone1415ProMax52Wrapper: {
    top: 1,
    left: 24,
  },
  profile: {
    width: "100%",
    height: 975,
    flex: 1,
  },
});

export default Profile;
