import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useDispatch, useSelector } from "react-redux";
import { LoginScreen, SignupScreen } from "../screens";
import BottomTabNav from "./BottomTabNav";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { autologin } from "../store/thunks/authThunk";

const Stack = createNativeStackNavigator();
//const isLoggedIn = false;

// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

const Mainnavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autologin());
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabNav />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Mainnavigation;
