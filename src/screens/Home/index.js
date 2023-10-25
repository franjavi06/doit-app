import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInput, Button } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/authSlice";

export const HomeScreen = ({ navigation }) => {
  const { firstname, lastname } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">
        Welcome {firstname} {lastname}
      </Text>
      <View style={styles.subcontainer}>
        <Button
          style={styles.loginbutton}
          icon="logout"
          mode="contained"
          onPress={handleLogout}
        >
          Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subcontainer: {
    width: "80%",
  },
  loginbutton: {
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 5,
  },
});
