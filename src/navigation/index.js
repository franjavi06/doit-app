import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/Home";
import { LoginScreen } from "../screens/Auth/Login";
import { SignupScreen } from "../screens/Auth/Signup";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();
//const isLoggedIn = false;

const Mainnavigation = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
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
