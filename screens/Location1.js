import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Location1 = () => {
  return (
    <View style={styles.location}>
      <View style={[styles.iphone1415ProMax36Wrapper, styles.iconLayout1]}>
        <View style={[styles.iphone1415ProMax36, styles.iconLayout1]}>
          <View style={[styles.autoLayoutHorizontal, styles.autoPosition]}>
            <ImageBackground
              style={styles.frameIcon}
              resizeMode="cover"
              source={require("../assets/frame1.png")}
            >
              <View style={[styles.autoLayoutHorizontal1, styles.autoPosition]}>
                <View style={styles.autoLayoutHorizontal2}>
                  <View style={styles.frame}>
                    <View style={[styles.rectangle, styles.autoPosition]} />
                    <Text
                      style={[styles.mapData2023, styles.mapData2023Position]}
                    >
                      Map Data ©2023 Google
                    </Text>
                  </View>
                </View>
                <View style={styles.frame1}>
                  <View style={[styles.rectangle, styles.autoPosition]} />
                  <Text
                    style={[styles.mapData2023, styles.mapData2023Position]}
                  >
                    Terms of Use
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.autoLayoutHorizontal3,
                  styles.mapData2023Position,
                ]}
              >
                <Image
                  style={styles.frameIcon1}
                  contentFit="cover"
                  source={require("../assets/frame.png")}
                />
              </View>
              <View style={[styles.frame2, styles.frame2Layout]}>
                <View style={[styles.rectangle2, styles.rectangleBg]} />
                <View style={[styles.rectangle3, styles.rectangleBg]} />
              </View>
              <View
                style={[styles.autoLayoutHorizontal4, styles.autoShadowBox]}
              >
                <Text style={[styles.from56211A, styles.locationTypo]}>
                  From 562/11-A
                </Text>
              </View>
              <View
                style={[styles.autoLayoutHorizontal5, styles.wrapperFlexBox]}
              >
                <View style={styles.rectangle4} />
              </View>
            </ImageBackground>
          </View>
          <View style={[styles.iphone1415ProMax36Child, styles.iphone1415Bg]} />
          <View style={[styles.iphone1415ProMax36Item, styles.iphone1415Bg]} />
          <Text style={[styles.paridhiMundra, styles.washTypo]}>
            Paridhi Mundra
          </Text>
          <Text style={[styles.wash, styles.washTypo]}>{`Wash `}</Text>
          <Text style={[styles.haierWashIiitd, styles.order65337901Position]}>
            Haier Wash, IIITD, New Delhi
          </Text>
          <Text style={[styles.order6533790, styles.washTypo]}>
            Order: #6533790
          </Text>
          <Text style={[styles.order65337901, styles.order65337901Position]}>
            Order: #6533790
          </Text>
          <Text style={styles.completed}>Completed</Text>
          <Text style={[styles.oct2023At, styles.textTypo]}>
            06 Oct 2023 at 6:46 PM
          </Text>
          <Text style={[styles.text, styles.textTypo]}>₹ 60.00</Text>
          <Image
            style={styles.image2Icon}
            contentFit="cover"
            source={require("../assets/image-2.png")}
          />
          <Image
            style={styles.image3Icon}
            contentFit="cover"
            source={require("../assets/image-3.png")}
          />
          <Image
            style={styles.image4Icon}
            contentFit="cover"
            source={require("../assets/image-4.png")}
          />
          <Image
            style={styles.image5Icon}
            contentFit="cover"
            source={require("../assets/image-5.png")}
          />
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
          <Image
            style={styles.image7Icon}
            contentFit="cover"
            source={require("../assets/image-7.png")}
          />
          <Image
            style={[styles.image8Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
          <Image
            style={[styles.e114d0a484dc4c15967f93c0baIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/e114d0a484dc4c15967f93c0ba8b0b3b-2.png")}
          />
          <Image
            style={[styles.image9Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
          <View style={styles.iphone1415ProMax36Inner} />
          <View
            style={[styles.rectangleParent, styles.rectangleParentPosition]}
          >
            <View style={[styles.groupChild, styles.groupBg]} />
            <Text style={[styles.confirmLocation, styles.savedTypo]}>
              Confirm location
            </Text>
          </View>
          <Text style={[styles.haierWashIiitd1, styles.locationTypo]}>
            Haier Wash, IIITD, New Delhi
          </Text>
          <Text style={[styles.chooseLocation, styles.locationTypo]}>
            Choose Location
          </Text>
          <Image
            style={[styles.mingcutearrowUpLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={[styles.confirmLocationParent, styles.groupPosition]}>
            <Text style={[styles.confirmLocation1, styles.locationTypo]}>
              Confirm location
            </Text>
            <Image
              style={[styles.bytesizelocationIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bytesizelocation.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupItem, styles.groupPosition]} />
            <Image
              style={[styles.humbleiconssearch, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/humbleiconssearch1.png")}
            />
            <Text style={[styles.searchLocation, styles.locationPosition]}>
              Search location...
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
                <View style={[styles.capacity, styles.capacityBg]} />
              </View>
            </View>
          </View>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.groupContainer, styles.groupLayout]}>
                <View style={[styles.groupContainer, styles.groupLayout]}>
                  <View style={[styles.groupInner, styles.groupLayout]} />
                </View>
              </View>
              <Image
                style={[styles.tablerbookmarkIcon, styles.savedPosition]}
                contentFit="cover"
                source={require("../assets/tablerbookmark.png")}
              />
            </View>
            <Text style={[styles.saved, styles.savedPosition]}>Saved</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    height: 932,
    position: "absolute",
  },
  autoPosition: {
    right: 0,
    position: "absolute",
  },
  mapData2023Position: {
    left: 5,
    position: "absolute",
  },
  frame2Layout: {
    width: 16,
    left: 202,
  },
  rectangleBg: {
    backgroundColor: Color.colorRoyalblue,
    position: "absolute",
  },
  autoShadowBox: {
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    top: 317,
  },
  locationTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  iphone1415Bg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  washTypo: {
    fontFamily: FontFamily.inter,
    left: "50%",
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  order65337901Position: {
    marginLeft: 1418,
    fontFamily: FontFamily.inter,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.poppins12_size,
    top: 306,
    fontFamily: FontFamily.inter,
    left: "50%",
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  rectangleParentPosition: {
    left: 34,
    position: "absolute",
  },
  groupBg: {
    backgroundColor: Color.midBlue,
    top: 0,
  },
  savedTypo: {
    color: Color.iosStatusBarStatusBarBackgroundColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupPosition: {
    marginLeft: -181,
    left: "50%",
    position: "absolute",
  },
  locationPosition: {
    top: 12,
    position: "absolute",
  },
  capacityBg: {
    backgroundColor: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 122,
    position: "absolute",
  },
  savedPosition: {
    top: 19,
    position: "absolute",
  },
  rectangle: {
    bottom: 0,
    left: 1,
    backgroundColor: Color.colorWhitesmoke_200,
    opacity: 0.7,
    top: 0,
  },
  mapData2023: {
    top: 1,
    fontSize: FontSize.size_3xs,
    lineHeight: 14,
    fontFamily: FontFamily.headingH2Bold,
    textAlign: "right",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  frame: {
    height: 14,
    width: 122,
  },
  autoLayoutHorizontal2: {
    flexDirection: "row",
  },
  frame1: {
    width: 71,
    height: 14,
  },
  autoLayoutHorizontal1: {
    top: 623,
    bottom: 33,
    left: 197,
    flexDirection: "row",
  },
  frameIcon1: {
    width: 62,
    height: 26,
    overflow: "hidden",
  },
  autoLayoutHorizontal3: {
    top: 578,
    width: 66,
    paddingLeft: 2,
    paddingRight: 2,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  rectangle2: {
    bottom: -116,
    left: -101,
    borderRadius: 109,
    width: 218,
    height: 218,
    opacity: 0.1,
  },
  rectangle3: {
    bottom: -31,
    left: -16,
    borderRadius: 24,
    width: 48,
    opacity: 0.25,
    height: 48,
  },
  frame2: {
    height: 1,
    top: 317,
    width: 16,
    left: 202,
    position: "absolute",
  },
  from56211A: {
    lineHeight: 20,
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  autoLayoutHorizontal4: {
    left: 218,
    width: 126,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 9,
    flexDirection: "row",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    position: "absolute",
  },
  rectangle4: {
    borderRadius: 2,
    width: 4,
    height: 4,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
  },
  autoLayoutHorizontal5: {
    padding: 6,
    backgroundColor: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
    borderRadius: Border.br_5xs,
    shadowOpacity: 1,
    elevation: 16,
    shadowRadius: 16,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.16)",
    top: 317,
    width: 16,
    left: 202,
    justifyContent: "center",
  },
  frameIcon: {
    width: 432,
    height: 669,
  },
  autoLayoutHorizontal: {
    top: 91,
    left: -2,
    backgroundColor: "#e2e2e2",
    flexDirection: "row",
    height: 669,
  },
  iphone1415ProMax36Child: {
    top: 115,
    left: 678,
    width: 34,
    height: 143,
  },
  iphone1415ProMax36Item: {
    top: 179,
    left: 1616,
    height: 156,
    width: 362,
  },
  paridhiMundra: {
    marginLeft: 1489,
    top: 58,
    fontSize: FontSize.poppins22Bold_size,
  },
  wash: {
    marginLeft: 1445,
    top: 195,
    fontSize: FontSize.poppins16Bold_size,
  },
  haierWashIiitd: {
    top: 225,
  },
  order6533790: {
    top: 252,
    marginLeft: 1417,
    fontSize: FontSize.poppins16Bold_size,
  },
  order65337901: {
    top: 279,
  },
  completed: {
    marginLeft: 1664,
    top: 193,
    fontFamily: FontFamily.inter,
    left: "50%",
    textAlign: "left",
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  oct2023At: {
    marginLeft: 1417,
  },
  text: {
    marginLeft: 1704,
  },
  image2Icon: {
    top: -1153,
    left: -19204,
    width: 1328,
    height: 931,
    position: "absolute",
  },
  image3Icon: {
    top: -1151,
    left: -17664,
    width: 525,
    height: 929,
    position: "absolute",
  },
  image4Icon: {
    top: 2197,
    left: -9454,
    width: 323,
    height: 198,
    position: "absolute",
  },
  image5Icon: {
    top: 629,
    left: -20412,
    width: 2067,
    height: 1359,
    position: "absolute",
  },
  image6Icon: {
    top: 17,
    left: -15962,
    width: 1552,
    height: 2614,
    position: "absolute",
  },
  image7Icon: {
    top: -1228,
    left: -1071,
    width: 816,
    height: 539,
    position: "absolute",
  },
  image8Icon: {
    top: 2975,
    left: -7816,
    width: 469,
  },
  e114d0a484dc4c15967f93c0baIcon: {
    left: 683,
    width: 421,
    top: 0,
  },
  image9Icon: {
    left: 1164,
    width: 419,
    top: 0,
  },
  iphone1415ProMax36Inner: {
    left: 1632,
    backgroundColor: Color.colorDimgray_100,
    width: 20,
    height: 24,
    top: 193,
    position: "absolute",
  },
  groupChild: {
    width: 362,
    borderRadius: Border.br_5xs,
    height: 48,
    left: 0,
    position: "absolute",
  },
  confirmLocation: {
    marginLeft: -67,
    top: 12,
    position: "absolute",
    left: "50%",
  },
  rectangleParent: {
    top: 850,
    width: 362,
    height: 48,
  },
  haierWashIiitd1: {
    marginLeft: -146,
    top: 810,
    color: Color.grey,
    left: "50%",
    fontSize: FontSize.poppins16Bold_size,
    position: "absolute",
  },
  chooseLocation: {
    marginLeft: -93,
    top: 40,
    fontWeight: "600",
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    color: Color.iosStatusBarStatusBarTextColor,
    position: "absolute",
  },
  mingcutearrowUpLineIcon: {
    top: 45,
    left: 34,
    position: "absolute",
  },
  confirmLocation1: {
    marginLeft: -76,
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    color: Color.iosStatusBarStatusBarTextColor,
    top: 0,
    position: "absolute",
  },
  bytesizelocationIcon: {
    top: 5,
    left: 0,
    position: "absolute",
  },
  confirmLocationParent: {
    top: 769,
    width: 216,
    height: 33,
  },
  groupItem: {
    backgroundColor: Color.midBlue,
    top: 0,
    width: 362,
    borderRadius: Border.br_5xs,
    height: 48,
  },
  humbleiconssearch: {
    left: 12,
    top: 12,
    position: "absolute",
  },
  searchLocation: {
    marginLeft: -137,
    color: Color.d9D9D9,
    left: "50%",
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
  },
  rectangleGroup: {
    top: 97,
    width: 362,
    height: 48,
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: FontFamily.poppins16Bold,
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
    width: 21,
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
  groupInner: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.midBlue,
    top: 0,
    left: 0,
  },
  groupContainer: {
    left: 0,
    top: 0,
  },
  tablerbookmarkIcon: {
    left: 18,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  saved: {
    left: 50,
    fontWeight: "500",
    color: Color.iosStatusBarStatusBarBackgroundColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
  },
  groupParent: {
    top: 669,
    left: 154,
  },
  iphone1415ProMax36: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
  },
  iphone1415ProMax36Wrapper: {
    top: 22,
    left: 24,
    width: 430,
  },
  location: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Location1;
