import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Company = () => {
  return (
    <View style={styles.company}>
      <View style={styles.iphone1415ProMax37Wrapper}>
        <View style={[styles.iphone1415ProMax37, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax37Child} />
          <View style={styles.iphone1415ProMax37Item} />
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
            style={styles.image8Icon}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
          <Image
            style={styles.e114d0a484dc4c15967f93c0baIcon}
            contentFit="cover"
            source={require("../assets/e114d0a484dc4c15967f93c0ba8b0b3b-2.png")}
          />
          <Image
            style={styles.image9Icon}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
          <View style={styles.iphone1415ProMax37Inner} />
          <Text style={styles.savedLocations}>Saved locations</Text>
          <Text style={styles.chooseLocation}>Choose Location</Text>
          <Image
            style={[
              styles.mingcutearrowUpLineIcon,
              styles.humbleiconssearchLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={[styles.groupView, styles.groupParentLayout]}>
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupParentLayout]} />
              <View style={[styles.instituteParent, styles.parentPosition]}>
                <Text style={[styles.institute, styles.institutePosition]}>
                  Institute
                </Text>
                <Text style={[styles.haierWashIiitd1, styles.haierPosition]}>
                  Haier Wash, IIITD, New Delhi
                </Text>
              </View>
              <Image
                style={[styles.carbonbuildingIcon, styles.iconPosition]}
                contentFit="cover"
                source={require("../assets/carbonbuilding.png")}
              />
            </View>
          </View>
          <View style={[styles.groupParent, styles.groupParentLayout]}>
            <View style={[styles.rectangleParent, styles.groupParentLayout]}>
              <View style={[styles.groupChild, styles.groupParentLayout]} />
            </View>
            <Image
              style={[
                styles.fluentbuildingShop16RegulaIcon,
                styles.iconPosition,
              ]}
              contentFit="cover"
              source={require("../assets/fluentbuildingshop16regular.png")}
            />
          </View>
          <View style={[styles.homeParent, styles.parentPosition]}>
            <Text style={[styles.home, styles.homePosition]}>Home</Text>
            <Text style={[styles.haierWashAbc, styles.homePosition]}>
              Haier Wash, ABC Complex, New Delhi
            </Text>
          </View>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupInner, styles.groupInnerPosition]} />
            <Image
              style={[styles.humbleiconssearch, styles.searchLocationPosition]}
              contentFit="cover"
              source={require("../assets/humbleiconssearch.png")}
            />
            <Text
              style={[styles.searchLocation, styles.searchLocationPosition]}
            >
              Search location...
            </Text>
          </View>
          <View style={[styles.iosStatusBar, styles.wrapperFlexBox]}>
            <Text style={styles.time}>9:41</Text>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
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
                  style={[styles.capIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={styles.capacity} />
              </View>
            </View>
          </View>
          <View style={styles.frameParent}>
            <View style={styles.groupWrapper}>
              <View style={styles.rectangleContainerLayout}>
                <View
                  style={[
                    styles.rectangleContainer,
                    styles.rectangleContainerLayout,
                  ]}
                >
                  <View
                    style={[
                      styles.rectangleView,
                      styles.rectangleContainerLayout,
                    ]}
                  />
                </View>
              </View>
            </View>
            <View style={styles.solarmapLinearParent}>
              <Image
                style={[styles.solarmapLinearIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/solarmaplinear.png")}
              />
              <Text style={styles.map}>Map</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iosStatusBarPosition: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    top: 0,
    width: 430,
    position: "absolute",
  },
  washTypo: {
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    left: "50%",
    position: "absolute",
  },
  order65337901Position: {
    marginLeft: 1418,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.inter,
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.poppins12_size,
    top: 306,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.inter,
    left: "50%",
    position: "absolute",
  },
  humbleiconssearchLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  groupParentLayout: {
    height: 60,
    width: 362,
    position: "absolute",
  },
  parentPosition: {
    height: 44,
    left: "50%",
    position: "absolute",
  },
  institutePosition: {
    marginLeft: -81,
    fontFamily: FontFamily.poppins16Bold,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  haierPosition: {
    top: 26,
    color: Color.grey,
    fontSize: FontSize.poppins12_size,
  },
  iconPosition: {
    left: 15,
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  homePosition: {
    marginLeft: -110,
    fontFamily: FontFamily.poppins16Bold,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  groupLayout: {
    height: 48,
    marginLeft: -181,
    width: 362,
    left: "50%",
  },
  groupInnerPosition: {
    backgroundColor: Color.midBlue,
    top: 0,
    position: "absolute",
  },
  searchLocationPosition: {
    top: 12,
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  borderPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    position: "absolute",
  },
  rectangleContainerLayout: {
    width: 105,
    height: 60,
  },
  iphone1415ProMax37Child: {
    top: 115,
    left: 678,
    width: 34,
    height: 143,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  iphone1415ProMax37Item: {
    top: 179,
    left: 1616,
    height: 156,
    width: 362,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  paridhiMundra: {
    marginLeft: 1489,
    top: 58,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins22Bold_size,
  },
  wash: {
    marginLeft: 1445,
    top: 195,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  haierWashIiitd: {
    top: 225,
  },
  order6533790: {
    top: 252,
    marginLeft: 1417,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  order65337901: {
    top: 279,
  },
  completed: {
    marginLeft: 1664,
    top: 193,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.inter,
    left: "50%",
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
    left: -15962,
    width: 1552,
    height: 2614,
    top: 17,
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
    height: 932,
    position: "absolute",
  },
  e114d0a484dc4c15967f93c0baIcon: {
    left: 683,
    width: 421,
    top: 0,
    height: 932,
    position: "absolute",
  },
  image9Icon: {
    left: 1164,
    width: 419,
    top: 0,
    height: 932,
    position: "absolute",
  },
  iphone1415ProMax37Inner: {
    left: 1632,
    backgroundColor: Color.colorDimgray_100,
    width: 20,
    height: 24,
    top: 193,
    position: "absolute",
  },
  savedLocations: {
    top: 169,
    color: Color.grey,
    marginLeft: -181,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  chooseLocation: {
    marginLeft: -93,
    top: 40,
    fontWeight: "600",
    fontFamily: FontFamily.poppins16Bold,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
  },
  mingcutearrowUpLineIcon: {
    top: 45,
    left: 34,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
  },
  institute: {
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    top: 0,
  },
  haierWashIiitd1: {
    marginLeft: -81,
    fontFamily: FontFamily.poppins16Bold,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  instituteParent: {
    marginLeft: -133,
    top: 8,
    width: 162,
  },
  carbonbuildingIcon: {
    top: 17,
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 209,
    left: 34,
  },
  fluentbuildingShop16RegulaIcon: {
    top: 16,
  },
  groupParent: {
    top: 277,
    left: 34,
  },
  home: {
    fontSize: FontSize.poppins16Bold_size,
    color: Color.iosStatusBarStatusBarTextColor,
    top: 0,
  },
  haierWashAbc: {
    top: 26,
    color: Color.grey,
    fontSize: FontSize.poppins12_size,
  },
  homeParent: {
    marginLeft: -134,
    top: 285,
    width: 220,
  },
  groupInner: {
    height: 48,
    marginLeft: -181,
    width: 362,
    left: "50%",
    borderRadius: Border.br_5xs,
  },
  humbleiconssearch: {
    left: 12,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  searchLocation: {
    marginLeft: -137,
    color: Color.d9D9D9,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
  },
  rectangleGroup: {
    top: 97,
    position: "absolute",
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
    marginLeft: -13.65,
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
    left: "50%",
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
  },
  iosStatusBar: {
    justifyContent: "space-between",
    paddingLeft: Padding.p_13xl,
    paddingTop: Padding.p_smi,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_smi,
    alignItems: "center",
    left: 0,
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    top: 0,
    width: 430,
    position: "absolute",
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.midBlue,
    top: 0,
    position: "absolute",
    left: 0,
  },
  rectangleContainer: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupWrapper: {
    justifyContent: "center",
    zIndex: 0,
    alignItems: "center",
  },
  solarmapLinearIcon: {
    width: "35.82%",
    right: "64.18%",
    left: "0%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    overflow: "hidden",
  },
  map: {
    left: 31,
    fontWeight: "500",
    color: Color.white,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  solarmapLinearParent: {
    height: "40%",
    width: "63.81%",
    top: "30%",
    right: "19.05%",
    bottom: "30%",
    left: "17.14%",
    zIndex: 1,
    position: "absolute",
  },
  frameParent: {
    marginLeft: -52,
    top: 796,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax37: {
    marginLeft: -215,
    overflow: "hidden",
    height: 932,
    left: "50%",
  },
  iphone1415ProMax37Wrapper: {
    marginLeft: -215.45,
    top: 22,
    height: 932,
    width: 430,
    left: "50%",
    position: "absolute",
  },
  company: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Company;
