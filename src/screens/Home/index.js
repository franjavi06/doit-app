import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInput, Button } from "react-native-paper";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome Username</Text>
      <View style={styles.subcontainer}>
        <Button
          style={styles.loginbutton}
          icon="logout"
          mode="contained"
          onPress={() => console.log("Pressed")}
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
