import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Scan = () => {
  return (
    <View style={styles.scan}>
      <View style={[styles.iphone1415ProMax39Wrapper, styles.iconLayout1]}>
        <View style={styles.iphone1415ProMax39}>
          <View
            style={[
              styles.iphone1415ProMax39Child,
              styles.iosStatusBarPosition,
            ]}
          />
          <View style={[styles.iphone1415ProMax39Item, styles.iphone1415Bg]} />
          <View style={[styles.iphone1415ProMax39Inner, styles.iphone1415Bg]} />
          <Text style={[styles.paridhiMundra, styles.scanOrCodeTypo]}>
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
          <View style={styles.rectangleView} />
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
          <Image
            style={[styles.mingcutearrowUpLineIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={[styles.rectangleWrapper, styles.groupLayout]}>
              <View style={[styles.groupChild, styles.groupLayout]} />
            </View>
            <Image
              style={[styles.bxstorchIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/bxstorch.png")}
            />
          </View>
          <Text style={[styles.scanningCode, styles.scanningCodeTypo]}>
            Scanning code...
          </Text>
          <Text style={[styles.scanOrCode, styles.timeTypo]}>Scan OR code</Text>
          <Text style={[styles.pleaseScanThe, styles.scanningCodeTypo]}>
            Please scan the machine QR code
          </Text>
          <Image
            style={[styles.groupIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/group-936.png")}
          />
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
  iosStatusBarPosition: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    width: 430,
    position: "absolute",
  },
  iphone1415Bg: {
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  scanOrCodeTypo: {
    textAlign: "left",
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
  },
  washTypo: {
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.inter,
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
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  timeTypo: {
    fontFamily: FontFamily.poppins16Bold,
    color: Color.iosStatusBarStatusBarTextColor,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 24,
    height: 24,
    overflow: "hidden",
    position: "absolute",
  },
  groupLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  scanningCodeTypo: {
    color: Color.grey,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax39Child: {
    top: 48,
    height: 42,
  },
  iphone1415ProMax39Item: {
    top: 115,
    left: 678,
    width: 34,
    height: 143,
  },
  iphone1415ProMax39Inner: {
    top: 179,
    left: 1616,
    width: 362,
    height: 156,
  },
  paridhiMundra: {
    marginLeft: 1489,
    top: 58,
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    fontSize: FontSize.poppins22Bold_size,
  },
  wash: {
    marginLeft: 1445,
    top: 195,
  },
  haierWashIiitd: {
    top: 225,
  },
  order6533790: {
    top: 252,
    marginLeft: 1417,
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
  rectangleView: {
    left: 1632,
    backgroundColor: Color.colorDimgray_100,
    width: 20,
    height: 24,
    top: 193,
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
    width: 430,
    position: "absolute",
    top: 0,
  },
  mingcutearrowUpLineIcon: {
    top: 50,
    left: 34,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.midBlue,
    left: 0,
    width: 60,
    top: 0,
  },
  rectangleWrapper: {
    left: 0,
    width: 60,
    top: 0,
  },
  bxstorchIcon: {
    top: 18,
    left: 18,
    borderRadius: Border.br_xs,
  },
  groupParent: {
    top: 738,
    left: 185,
  },
  scanningCode: {
    marginLeft: -65,
    top: 596,
  },
  scanOrCode: {
    marginLeft: -77,
    top: 143,
    fontWeight: "600",
    textAlign: "left",
    fontSize: FontSize.poppins22Bold_size,
    left: "50%",
    position: "absolute",
    fontFamily: FontFamily.poppins16Bold,
  },
  pleaseScanThe: {
    marginLeft: -137,
    top: 187,
  },
  groupIcon: {
    marginLeft: -123,
    top: 315,
    width: 245,
    height: 245,
  },
  iphone1415ProMax39: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    height: 932,
    width: 430,
    position: "absolute",
  },
  iphone1415ProMax39Wrapper: {
    top: 22,
    left: 24,
    width: 430,
    height: 932,
  },
  scan: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default Scan;
