const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Halaman from "./screens/Halaman";
import Authenticationcode from "./screens/Authenticationcode";
import NewOrder from "./screens/NewOrder";
import Payment from "./screens/Payment";
import Pemantauan from "./screens/Pemantauan";
import WashType from "./screens/WashType";
import Scan from "./screens/Scan";
import Pilih from "./screens/Pilih";
import Company from "./screens/Company";
import Location1 from "./screens/Location1";
import Order from "./screens/Order";
import Profile from "./screens/Profile";
import Notifications from "./screens/Notifications";
import Frame from "./screens/Frame";
import Frame1 from "./screens/Frame1";
import Home from "./screens/Home";
import Frame2 from "./screens/Frame2";
import Frame3 from "./screens/Frame3";
import Frame4 from "./screens/Frame4";
import Authentication from "./screens/Authentication";
import Signup from "./screens/Signup";
import Image1 from "./components/Image1";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Halaman"
              component={Halaman}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authenticationcode"
              component={Authenticationcode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewOrder"
              component={NewOrder}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payment"
              component={Payment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pemantauan"
              component={Pemantauan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WashType"
              component={WashType}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Scan"
              component={Scan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pilih"
              component={Pilih}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Company"
              component={Company}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Location1"
              component={Location1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Order"
              component={Order}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame1"
              component={Frame1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame2"
              component={Frame2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame3"
              component={Frame3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame4"
              component={Frame4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
