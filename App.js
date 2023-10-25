import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import { store } from "./src/store";
import { Provider } from "react-redux";

import Mainnavigation from "./src/navigation";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Mainnavigation />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
