import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const WashType = () => {
  return (
    <View style={styles.washType}>
      <View style={styles.iphone1415ProMax41Wrapper}>
        <View style={[styles.iphone1415ProMax41, styles.iosStatusBarPosition]}>
          <View style={styles.iphone1415ProMax41Child} />
          <View style={[styles.iphone1415ProMax41Item, styles.viewLayout1]} />
          <Text style={[styles.confirm, styles.confirmTypo]}>Confirm</Text>
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
                  style={styles.capIcon}
                  contentFit="cover"
                  source={require("../assets/cap.png")}
                />
                <View style={[styles.capacity, styles.borderPosition]} />
              </View>
            </View>
          </View>
          <Image
            style={[styles.iphone1415ProMax41Inner, styles.viewLayout]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <Text style={[styles.washingMachine11, styles.confirmTypo]}>
            Washing machine 11
          </Text>
          <View style={[styles.groupParent, styles.viewLayout1]}>
            <View style={[styles.rectangleParent, styles.groupLayout1]}>
              <View style={[styles.groupChild, styles.groupLayout1]} />
              <View style={[styles.spinParent, styles.parentPosition]}>
                <Text style={[styles.spin, styles.spinPosition]}>Spin</Text>
                <Text style={[styles.text, styles.textClr]}>{`₹ 40.00 `}</Text>
              </View>
            </View>
            <Image
              style={[styles.radiobuttonIcon, styles.radiobuttonIconLayout]}
              contentFit="cover"
              source={require("../assets/togglefalse-statehover-labelfalse.png")}
            />
            <Image
              style={[styles.groupIcon, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
            <View style={[styles.groupWrapper, styles.groupLayout1]}>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupLayout1]} />
                <View
                  style={[styles.delicateWashParent, styles.parentPosition]}
                >
                  <Text style={[styles.delicateWash, styles.text1Position]}>
                    Delicate Wash
                  </Text>
                  <Text
                    style={[styles.text1, styles.text1Position]}
                  >{`₹ 80.00 `}</Text>
                </View>
              </View>
            </View>
            <Image
              style={[styles.radiobuttonIcon1, styles.radiobuttonIconLayout]}
              contentFit="cover"
              source={require("../assets/togglefalse-statehover-labelfalse.png")}
            />
            <Image
              style={[styles.groupIcon1, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group1.png")}
            />
            <Text style={[styles.chooseWashType, styles.confirmTypo]}>
              Choose wash type
            </Text>
            <View style={[styles.rectangleContainer, styles.groupLayout1]}>
              <View style={[styles.groupInner, styles.groupLayout1]} />
              <View style={[styles.normalWashParent, styles.parentPosition]}>
                <Text style={[styles.normalWash, styles.text2Position]}>
                  Normal Wash
                </Text>
                <Text
                  style={[styles.text2, styles.text2Position]}
                >{`₹ 60.00 `}</Text>
              </View>
            </View>
            <Image
              style={[styles.radiobuttonIcon2, styles.radiobuttonIconLayout]}
              contentFit="cover"
              source={require("../assets/radiobutton.png")}
            />
            <View style={[styles.view, styles.viewLayout1]}>
              <View style={[styles.content, styles.wrapperFlexBox]}>
                <View style={[styles.wrapper, styles.wrapperFlexBox]}>
                  <View style={styles.viewLayout}>
                    <View style={[styles.rectangleView, styles.viewLayout]} />
                    <Image
                      style={styles.materialSymbolsinfoIRoundeIcon}
                      contentFit="cover"
                      source={require("../assets/materialsymbolsinfoirounded.png")}
                    />
                  </View>
                  <View style={styles.headlineAndDetails}>
                    <Text
                      style={[styles.forNormalItems, styles.iiitdNewDelhiTypo]}
                    >
                      For normal items with cold water
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={[styles.groupIcon2, styles.groupIconLayout]}
              contentFit="cover"
              source={require("../assets/group2.png")}
            />
          </View>
          <View style={[styles.lineParent, styles.lineParentLayout]}>
            <View style={[styles.lineView, styles.lineParentLayout]} />
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.groupParent1, styles.groupLayout]}>
                <View style={styles.groupPosition}>
                  <View style={styles.groupPosition}>
                    <View style={[styles.groupChild1, styles.groupPosition]} />
                  </View>
                </View>
                <Text style={[styles.iiitdNewDelhi, styles.iiitdNewDelhiTypo]}>
                  IIITD, New Delhi
                </Text>
              </View>
              <Image
                style={styles.tdesignlocationIcon}
                contentFit="cover"
                source={require("../assets/tdesignlocation.png")}
              />
            </View>
            <View style={[styles.groupParent2, styles.lineParentLayout]}>
              <View style={[styles.groupParent2, styles.lineParentLayout]}>
                <View style={[styles.groupParent2, styles.lineParentLayout]}>
                  <View style={styles.groupPosition}>
                    <View style={styles.groupPosition}>
                      <View
                        style={[styles.groupChild1, styles.groupPosition]}
                      />
                    </View>
                  </View>
                  <Text
                    style={[styles.iiitdNewDelhi, styles.iiitdNewDelhiTypo]}
                  >
                    Available
                  </Text>
                </View>
              </View>
              <Image
                style={styles.iconParkcheckCorrect}
                contentFit="cover"
                source={require("../assets/iconparkcheckcorrect.png")}
              />
            </View>
          </View>
          <View
            style={[
              styles.iphone1415ProMax41Child1,
              styles.iphone1415ChildLayout,
            ]}
          />
          <View
            style={[
              styles.iphone1415ProMax41Child2,
              styles.iphone1415ChildLayout,
            ]}
          />
          <View
            style={[
              styles.iphone1415ProMax41Child3,
              styles.iphone1415ChildLayout,
            ]}
          />
          <Image
            style={[styles.tablerwashIcon, styles.tablerwashIconPosition]}
            contentFit="cover"
            source={require("../assets/tablerwash.png")}
          />
          <Image
            style={[styles.tablerwashOffIcon, styles.tablerwashIconPosition]}
            contentFit="cover"
            source={require("../assets/tablerwashoff.png")}
          />
          <Image
            style={[styles.tablerwashGentleIcon, styles.tablerwashIconPosition]}
            contentFit="cover"
            source={require("../assets/tablerwashgentle.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iosStatusBarPosition: {
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  viewLayout1: {
    width: 362,
    position: "absolute",
  },
  confirmTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  wrapperFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  viewLayout: {
    height: 24,
    width: 24,
  },
  groupLayout1: {
    height: 60,
    width: 362,
    left: 0,
    position: "absolute",
  },
  parentPosition: {
    height: 44,
    top: 8,
    marginLeft: -112,
    left: "50%",
    position: "absolute",
  },
  spinPosition: {
    marginLeft: -22,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.midBlue,
    fontSize: FontSize.poppins12_size,
    top: 26,
  },
  radiobuttonIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
  },
  groupIconLayout: {
    maxWidth: "100%",
    left: "4.97%",
    right: "90.06%",
    width: "4.97%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  text1Position: {
    marginLeft: -57.5,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  text2Position: {
    marginLeft: -55,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  iiitdNewDelhiTypo: {
    color: Color.grey,
    fontSize: FontSize.poppins12_size,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  lineParentLayout: {
    height: 23,
    position: "absolute",
  },
  groupLayout: {
    width: 119,
    height: 23,
    top: 0,
    position: "absolute",
  },
  groupPosition: {
    width: 23,
    height: 23,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iphone1415ChildLayout: {
    height: 42,
    width: 42,
    left: 46,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  tablerwashIconPosition: {
    left: 55,
    height: 24,
    width: 24,
    overflow: "hidden",
    position: "absolute",
  },
  iphone1415ProMax41Child: {
    top: 115,
    left: 678,
    backgroundColor: Color.colorGainsboro_100,
    width: 34,
    height: 143,
    position: "absolute",
  },
  iphone1415ProMax41Item: {
    top: 850,
    height: 48,
    backgroundColor: Color.midBlue,
    borderRadius: Border.br_5xs,
    left: 34,
  },
  confirm: {
    marginLeft: -33,
    top: 862,
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
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
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    borderStyle: "solid",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    opacity: 0.4,
    width: 1,
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
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
    position: "absolute",
  },
  iphone1415ProMax41Inner: {
    top: 50,
    left: 34,
    position: "absolute",
  },
  washingMachine11: {
    marginLeft: -113,
    top: 48,
    fontSize: FontSize.poppins22Bold_size,
    fontWeight: "600",
    color: Color.iosStatusBarStatusBarTextColor,
  },
  groupChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xs,
    top: 0,
  },
  spin: {
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  text: {
    marginLeft: -22,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  spinParent: {
    width: 44,
  },
  rectangleParent: {
    top: 180,
  },
  radiobuttonIcon: {
    top: 200,
    left: 322,
    height: 20,
    width: 20,
  },
  groupIcon: {
    top: "61.73%",
    bottom: "32.72%",
    height: "5.56%",
    maxWidth: "100%",
    left: "4.97%",
    right: "90.06%",
    width: "4.97%",
  },
  delicateWash: {
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  text1: {
    color: Color.midBlue,
    fontSize: FontSize.poppins12_size,
    top: 26,
  },
  delicateWashParent: {
    width: 115,
  },
  rectangleGroup: {
    top: 0,
  },
  groupWrapper: {
    top: 264,
  },
  radiobuttonIcon1: {
    top: 284,
    left: 322,
    height: 20,
    width: 20,
  },
  groupIcon1: {
    top: "87.65%",
    bottom: "6.79%",
    height: "5.56%",
    maxWidth: "100%",
    left: "4.97%",
    right: "90.06%",
    width: "4.97%",
  },
  chooseWashType: {
    marginLeft: -178,
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  groupInner: {
    backgroundColor: Color.midBlue,
    borderRadius: Border.br_5xs,
    top: 0,
  },
  normalWash: {
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontWeight: "500",
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  text2: {
    color: Color.white,
    fontSize: FontSize.poppins12_size,
    top: 26,
    marginLeft: -55,
  },
  normalWashParent: {
    width: 110,
  },
  rectangleContainer: {
    top: 40,
  },
  radiobuttonIcon2: {
    top: 60,
    left: 323,
  },
  rectangleView: {
    backgroundColor: Color.d9D9D9,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    position: "absolute",
  },
  materialSymbolsinfoIRoundeIcon: {
    top: 4,
    left: 4,
    width: 16,
    height: 16,
    overflow: "hidden",
    position: "absolute",
  },
  forNormalItems: {
    display: "flex",
    width: 226,
    alignItems: "center",
  },
  headlineAndDetails: {
    marginLeft: 12,
  },
  content: {
    width: 280,
    alignItems: "center",
  },
  view: {
    top: 100,
    backgroundColor: "#f3f5fb",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_base,
    borderRadius: Border.br_5xs,
    overflow: "hidden",
    left: 0,
  },
  groupIcon2: {
    height: "4.63%",
    top: "19.14%",
    bottom: "76.23%",
  },
  groupParent: {
    top: 141,
    height: 324,
    left: 34,
  },
  lineView: {
    top: 1,
    left: 107,
    borderColor: Color.grey,
    borderRightWidth: 1,
    width: 1,
    borderStyle: "solid",
  },
  groupChild1: {
    borderRadius: 4,
    backgroundColor: Color.colorGreen,
  },
  iiitdNewDelhi: {
    top: 2,
    left: 31,
    position: "absolute",
  },
  groupParent1: {
    left: 0,
  },
  tdesignlocationIcon: {
    top: 5,
    left: 5,
    width: 13,
    height: 13,
    overflow: "hidden",
    position: "absolute",
  },
  groupContainer: {
    left: 129,
  },
  groupParent2: {
    width: 87,
    left: 0,
    top: 0,
  },
  iconParkcheckCorrect: {
    top: 6,
    left: 6,
    width: 11,
    height: 11,
    overflow: "hidden",
    position: "absolute",
  },
  lineParent: {
    top: 94,
    left: 91,
    width: 248,
  },
  iphone1415ProMax41Child1: {
    top: 190,
    backgroundColor: Color.colorWhitesmoke_100,
  },
  iphone1415ProMax41Child2: {
    top: 330,
    backgroundColor: Color.midBlue,
  },
  iphone1415ProMax41Child3: {
    top: 414,
    backgroundColor: Color.midBlue,
  },
  tablerwashIcon: {
    top: 199,
  },
  tablerwashOffIcon: {
    top: 339,
  },
  tablerwashGentleIcon: {
    top: 423,
  },
  iphone1415ProMax41: {
    overflow: "hidden",
    height: 932,
  },
  iphone1415ProMax41Wrapper: {
    top: 22,
    left: 24,
    height: 932,
    width: 430,
    position: "absolute",
  },
  washType: {
    flex: 1,
    width: "100%",
    height: 975,
  },
});

export default WashType;
