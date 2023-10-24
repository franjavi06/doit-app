import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInput, Button } from "react-native-paper";

export const LoginScreen = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome</Text>
      <Text variant="headlineLarge">Doit</Text>
      <View style={styles.subcontainer}>
        <Text variant="bodyLarge">Login</Text>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.loginbutton}
          icon="login"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </Button>
        <Button
          icon="login"
          mode="text"
          onPress={() => navigation.navigate("Signup")}
        >
          New to App? Signup...
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
