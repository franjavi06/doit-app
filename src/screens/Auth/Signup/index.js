import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome</Text>
      <Text variant="headlineLarge">Doit</Text>
      <View style={styles.subcontainer}>
        <Text variant="bodyLarge">Signup</Text>
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
          Alredy Registered? Login...
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
