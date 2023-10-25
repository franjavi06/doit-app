import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useSelector } from "react-redux";
import { LoginScreen, SignupScreen } from "../screens";
import BottomTabNav from "./BottomTabNav";

const Stack = createNativeStackNavigator();
//const isLoggedIn = false;

const Mainnavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

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
