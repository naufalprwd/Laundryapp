import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Pilih = () => {
  return (
    <View style={styles.pilih}>
      <View style={[styles.iphone1415ProMax55Wrapper, styles.iconLayout]}>
        <View style={[styles.iphone1415ProMax55, styles.iconLayout]}>
          <View
            style={[
              styles.bookedWashingMachinesParent,
              styles.washingParentPosition,
            ]}
          >
            <Text
              style={[styles.bookedWashingMachines, styles.iiitdNewDelhiTypo]}
            >
              Booked washing machines
            </Text>
            <View style={[styles.groupParent, styles.groupParentLayout1]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no2Parent, styles.parentPosition1]}>
                  <Text style={[styles.no2, styles.no2Typo]}>No. 2</Text>
                  <Text style={[styles.mLeft, styles.leftClr]}>15m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no3Parent, styles.parentLayout2]}>
                  <Text style={[styles.no3, styles.no3Layout]}>No. 3</Text>
                  <Text style={[styles.mLeft, styles.leftClr]}>20m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine1.png")}
                />
              </View>
              <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no6Parent, styles.parentLayout2]}>
                  <Text style={[styles.no6, styles.no3Layout]}>No. 6</Text>
                  <Text style={[styles.mLeft, styles.leftClr]}>35m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine2.png")}
                />
              </View>
            </View>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no7Parent, styles.parentLayout1]}>
                  <Text style={[styles.no7, styles.no2Typo]}>No. 7</Text>
                  <Text style={[styles.mLeft, styles.leftClr]}>37m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine3.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no12Parent, styles.parentPosition1]}>
                  <Text style={[styles.no12, styles.no3Layout]}>No. 12</Text>
                  <Text style={[styles.mLeft, styles.leftClr]}>40m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine4.png")}
                />
              </View>
            </View>
            <View style={[styles.groupParent1, styles.groupLayout]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no1Parent, styles.parentPosition]}>
                  <Text style={[styles.no1, styles.no1Typo]}>No. 1</Text>
                  <Text style={[styles.mLeft5, styles.leftClr]}>15m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine5.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no4Parent, styles.parentPosition]}>
                  <Text style={[styles.no4, styles.no1Typo]}>No. 4</Text>
                  <Text style={[styles.mLeft5, styles.leftClr]}>20m left</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine6.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.iphone1415ProMax55Child, styles.iphone1415Bg]} />
          <View style={[styles.iphone1415ProMax55Item, styles.iphone1415Bg]} />
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
          <Text style={[styles.completed, styles.washTypo]}>Completed</Text>
          <Text style={[styles.oct2023At, styles.textPosition]}>
            06 Oct 2023 at 6:46 PM
          </Text>
          <Text style={[styles.text, styles.textPosition]}>₹ 60.00</Text>
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
            style={[styles.image8Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-8.png")}
          />
          <Image
            style={[styles.e114d0a484dc4c15967f93c0baIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/e114d0a484dc4c15967f93c0ba8b0b3b-2.png")}
          />
          <Image
            style={[styles.image9Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/image-9.png")}
          />
          <View
            style={[
              styles.iphone1415ProMax55Inner,
              styles.iphone1415ProMax55InnerLayout,
            ]}
          />
          <Text style={[styles.iiitdNewDelhi, styles.iiitdNewDelhiTypo]}>
            IIITD, New Delhi
          </Text>
          <Image
            style={[
              styles.mingcutearrowUpLineIcon,
              styles.iphone1415ProMax55InnerLayout,
            ]}
            contentFit="cover"
            source={require("../assets/mingcutearrowupline.png")}
          />
          <View style={styles.iosStatusBar}>
            <Text style={[styles.time, styles.no2Typo]}>9:41</Text>
            <View style={styles.wrapper}>
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
          <View
            style={[
              styles.availableWashingMachinesParent,
              styles.washingParentPosition,
            ]}
          >
            <Text
              style={[styles.bookedWashingMachines, styles.iiitdNewDelhiTypo]}
            >
              Available washing machines
            </Text>
            <View style={[styles.groupParent, styles.groupParentLayout1]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild4, styles.menuListPosition]} />
                <View style={[styles.no1Group, styles.parentPosition1]}>
                  <Text style={[styles.no11, styles.no11Typo]}>No. 1</Text>
                  <Text style={[styles.kg, styles.leftPosition]}>7 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine7.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={styles.no4Group}>
                  <Text style={[styles.no41, styles.no3Layout]}>No. 4</Text>
                  <Text style={[styles.kg1, styles.leftClr]}>7 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine8.png")}
                />
              </View>
              <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={styles.no4Group}>
                  <Text style={[styles.no41, styles.no3Layout]}>No. 5</Text>
                  <Text style={[styles.kg2, styles.leftClr]}>8 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine9.png")}
                />
              </View>
            </View>
            <View style={[styles.groupParent3, styles.groupParentLayout1]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no8Parent, styles.parentLayout]}>
                  <Text style={[styles.no8, styles.no2Typo]}>No. 8</Text>
                  <Text style={[styles.kg3, styles.leftClr]}>6 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine7.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={styles.no4Group}>
                  <Text style={[styles.no41, styles.no3Layout]}>No. 9</Text>
                  <Text style={[styles.kg1, styles.leftClr]}>7 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine8.png")}
                />
              </View>
              <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={styles.no4Group}>
                  <Text style={[styles.no41, styles.no3Layout]}>No. 10</Text>
                  <Text style={[styles.kg2, styles.leftClr]}>8 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine9.png")}
                />
              </View>
            </View>
            <View style={[styles.groupWrapper, styles.groupLayout1]}>
              <View style={[styles.rectangleParent, styles.groupLayout1]}>
                <View style={[styles.groupChild, styles.groupChildLayout]} />
                <View style={[styles.no11Parent, styles.parentLayout]}>
                  <Text style={[styles.no8, styles.no2Typo]}>No. 11</Text>
                  <Text style={[styles.kg1, styles.leftClr]}>7 Kg</Text>
                </View>
                <Image
                  style={styles.washingMachine}
                  contentFit="cover"
                  source={require("../assets/washing-machine7.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.groupParent4, styles.groupParentLayout]}>
            <View style={[styles.groupParent5, styles.groupParentLayout]}>
              <View style={styles.groupPosition}>
                <View style={styles.groupPosition}>
                  <View style={[styles.groupChild11, styles.groupPosition]} />
                </View>
                <Image
                  style={styles.materialSymbolsdoorOpenOutIcon}
                  contentFit="cover"
                  source={require("../assets/materialsymbolsdooropenoutline.png")}
                />
              </View>
              <Text style={[styles.open, styles.leftClr]}>Open</Text>
            </View>
            <View style={[styles.groupParent7, styles.groupParentLayout]}>
              <View style={styles.groupPosition}>
                <View style={styles.groupPosition}>
                  <View style={[styles.groupChild11, styles.groupPosition]} />
                </View>
                <Image
                  style={styles.materialSymbolsdoorOpenOutIcon}
                  contentFit="cover"
                  source={require("../assets/mdieventavailableoutline.png")}
                />
              </View>
              <Text style={[styles.open, styles.leftClr]}>
                11 machines available
              </Text>
            </View>
            <View style={[styles.lineView, styles.groupParentLayout]} />
          </View>
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
                    source={require("../assets/octiconhome24.png")}
                  />
                  <Text style={[styles.home, styles.no11Typo]}>Home</Text>
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/fluentscandash24regular.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/fluentcart24regular.png")}
                  />
                </View>
              </View>
              <View style={styles.menu2}>
                <View style={styles.octiconhome24ParentSpaceBlock}>
                  <Image
                    style={styles.octiconhome24}
                    contentFit="cover"
                    source={require("../assets/iconamoonprofilelight.png")}
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
  iconLayout: {
    height: 932,
    position: "absolute",
  },
  washingParentPosition: {
    width: 363,
    marginLeft: -181,
    left: "50%",
    position: "absolute",
  },
  iiitdNewDelhiTypo: {
    color: Color.iosStatusBarStatusBarTextColor,
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
    left: "50%",
    position: "absolute",
  },
  groupParentLayout1: {
    height: 112,
    width: 362,
    position: "absolute",
  },
  groupLayout1: {
    width: 115,
    height: 112,
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: 5,
    width: 115,
    height: 112,
    top: 0,
  },
  parentPosition1: {
    height: 42,
    top: 53,
    position: "absolute",
  },
  no2Typo: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
  },
  leftClr: {
    color: Color.grey,
    fontFamily: FontFamily.poppins16Bold,
    position: "absolute",
  },
  parentLayout2: {
    width: 49,
    height: 42,
    top: 53,
    position: "absolute",
  },
  no3Layout: {
    height: 16,
    width: 45,
  },
  groupLayout: {
    width: 239,
    height: 112,
    left: 0,
    position: "absolute",
  },
  parentLayout1: {
    width: 48,
    left: 34,
  },
  parentPosition: {
    height: 43,
    top: 53,
    position: "absolute",
  },
  no1Typo: {
    fontSize: FontSize.size_base_7,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    top: 0,
    position: "absolute",
  },
  iphone1415Bg: {
    backgroundColor: Color.colorGainsboro_100,
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
    fontFamily: FontFamily.inter,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    fontSize: FontSize.poppins16Bold_size,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    top: 306,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.poppins12_size,
    textAlign: "left",
    color: Color.iosStatusBarStatusBarTextColor,
    left: "50%",
    position: "absolute",
  },
  iphone1415ProMax55InnerLayout: {
    height: 24,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  menuListPosition: {
    backgroundColor: Color.midBlue,
    left: 0,
    position: "absolute",
  },
  no11Typo: {
    fontWeight: "500",
    textAlign: "left",
    fontFamily: FontFamily.poppins16Bold,
  },
  leftPosition: {
    top: 24,
    textAlign: "center",
  },
  parentLayout: {
    width: 40,
    height: 42,
    top: 53,
    position: "absolute",
  },
  groupParentLayout: {
    height: 23,
    position: "absolute",
  },
  groupPosition: {
    width: 23,
    height: 23,
    left: 0,
    top: 0,
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
  bookedWashingMachines: {
    marginLeft: -180.5,
    textAlign: "left",
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
  },
  groupChild: {
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
    position: "absolute",
  },
  no2: {
    left: 2,
    textAlign: "center",
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    position: "absolute",
  },
  mLeft: {
    fontSize: FontSize.poppins12_size,
    top: 24,
    textAlign: "center",
    left: 0,
  },
  no2Parent: {
    left: 35,
    width: 46,
  },
  washingMachine: {
    top: 12,
    left: 42,
    width: 31,
    height: 33,
    position: "absolute",
  },
  rectangleParent: {
    left: 0,
    top: 0,
  },
  no3: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: 2,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    position: "absolute",
  },
  no3Parent: {
    left: 33,
  },
  rectangleGroup: {
    left: 124,
    top: 0,
  },
  no6: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    left: 1,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    position: "absolute",
  },
  no6Parent: {
    left: 34,
  },
  rectangleContainer: {
    left: 247,
    top: 0,
  },
  groupParent: {
    top: 47,
    left: 1,
  },
  no7: {
    left: 3,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    position: "absolute",
  },
  no7Parent: {
    height: 42,
    top: 53,
    position: "absolute",
  },
  no12: {
    left: 3,
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    top: 0,
    position: "absolute",
  },
  no12Parent: {
    width: 50,
    left: 32,
  },
  groupContainer: {
    top: 172,
  },
  no1: {
    left: 5,
  },
  mLeft5: {
    fontSize: FontSize.size_smi_6,
    top: 24,
    textAlign: "center",
    left: 0,
  },
  no1Parent: {
    width: 48,
    left: 34,
  },
  no4: {
    left: 3,
    height: 16,
    width: 45,
  },
  no4Parent: {
    width: 51,
    left: 32,
  },
  groupParent1: {
    top: 296,
  },
  bookedWashingMachinesParent: {
    top: 576,
    height: 408,
  },
  iphone1415ProMax55Child: {
    top: 115,
    left: 678,
    width: 34,
    height: 143,
  },
  iphone1415ProMax55Item: {
    top: 179,
    left: 1616,
    height: 156,
    width: 362,
    backgroundColor: Color.colorGainsboro_100,
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
    fontSize: FontSize.poppins16Bold_size,
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
  iphone1415ProMax55Inner: {
    left: 1632,
    backgroundColor: Color.colorDimgray_100,
    width: 20,
    top: 193,
  },
  iiitdNewDelhi: {
    marginLeft: -84,
    top: 45,
    fontWeight: "600",
    fontSize: FontSize.poppins22Bold_size,
    textAlign: "left",
  },
  mingcutearrowUpLineIcon: {
    top: 50,
    width: 24,
    left: 34,
    overflow: "hidden",
  },
  time: {
    fontSize: FontSize.size_mid,
    lineHeight: 22,
    fontWeight: "900",
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
    maxHeight: "100%",
    opacity: 0.4,
    width: 1,
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
  groupChild4: {
    borderRadius: 5,
    width: 115,
    height: 112,
    top: 0,
  },
  no11: {
    color: Color.iosStatusBarStatusBarBackgroundColor,
    fontSize: FontSize.poppins16Bold_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kg: {
    left: 4,
    color: Color.white,
    fontSize: FontSize.poppins12_size,
    fontFamily: FontFamily.poppins16Bold,
    top: 24,
    position: "absolute",
  },
  no1Group: {
    left: 40,
    width: 36,
  },
  no41: {
    textAlign: "center",
    color: Color.iosStatusBarStatusBarTextColor,
    fontFamily: FontFamily.poppins16Bold,
    fontSize: FontSize.poppins16Bold_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kg1: {
    left: 8,
    fontSize: FontSize.poppins12_size,
    top: 24,
    textAlign: "center",
  },
  no4Group: {
    left: 36,
    width: 45,
    height: 42,
    top: 53,
    position: "absolute",
  },
  kg2: {
    left: 9,
    fontSize: FontSize.poppins12_size,
    top: 24,
    textAlign: "center",
  },
  no8: {
    fontSize: FontSize.poppins16Bold_size,
    left: 0,
    top: 0,
    position: "absolute",
  },
  kg3: {
    left: 6,
    fontSize: FontSize.poppins12_size,
    top: 24,
    textAlign: "center",
  },
  no8Parent: {
    left: 38,
  },
  groupParent3: {
    top: 171,
    left: 0,
  },
  no11Parent: {
    left: 36,
  },
  groupWrapper: {
    top: 295,
    left: 0,
  },
  availableWashingMachinesParent: {
    top: 148,
    height: 407,
  },
  groupChild11: {
    borderRadius: 4,
    backgroundColor: Color.colorGreen,
  },
  materialSymbolsdoorOpenOutIcon: {
    top: 5,
    width: 13,
    height: 13,
    left: 5,
    overflow: "hidden",
    position: "absolute",
  },
  open: {
    top: 2,
    left: 31,
    fontSize: FontSize.poppins12_size,
    textAlign: "left",
  },
  groupParent5: {
    width: 64,
    left: 0,
    top: 0,
  },
  groupParent7: {
    left: 107,
    width: 161,
    top: 0,
  },
  lineView: {
    top: 1,
    left: 85,
    borderColor: Color.grey,
    borderRightWidth: 1,
    width: 1,
    borderStyle: "solid",
  },
  groupParent4: {
    top: 94,
    left: 81,
    width: 268,
  },
  octiconhome24: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_sm_1,
    lineHeight: 18,
    color: Color.midBlue,
    marginLeft: 6.56,
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
    left: 0,
    position: "absolute",
    flexDirection: "row",
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
    width: 430,
  },
  bottomNav: {
    top: 820,
    borderRadius: 26,
    height: 113,
    overflow: "hidden",
    width: 430,
  },
  iphone1415ProMax55: {
    overflow: "hidden",
    backgroundColor: Color.iosStatusBarStatusBarBackgroundColor,
    left: 0,
    top: 0,
    width: 430,
  },
  iphone1415ProMax55Wrapper: {
    top: 22,
    left: 24,
    width: 430,
  },
  pilih: {
    width: "100%",
    height: 975,
    flex: 1,
  },
});

export default Pilih;
