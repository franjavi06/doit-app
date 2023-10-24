import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";

import Mainnavigation from "./src/navigation";

export default function App() {
  return (
    <PaperProvider>
      <Mainnavigation />
    </PaperProvider>
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
