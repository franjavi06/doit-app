import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, TextInput, Button, HelperText } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../store/thunks/authThunk";

export const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { isLoading, isError, error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ username, password }));
    //console.log(username, password);
  };
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Welcome</Text>
      <Text variant="headlineLarge">Doit</Text>
      <View style={styles.subcontainer}>
        <Text variant="bodyLarge">Login</Text>
        <TextInput
          mode="outlined"
          label="Username"
          error={isError}
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          error={isError}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Button
          style={styles.loginbutton}
          icon="login"
          mode="contained"
          onPress={handleLogin}
          loading={isLoading}
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
        <HelperText
          style={{
            textAlign: "center",
          }}
          type="error"
          visible={isError}
        >
          {error}
        </HelperText>
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
