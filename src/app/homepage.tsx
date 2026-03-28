import { StyleSheet, Text, View } from "react-native";
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Page!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d9d6fd",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5972ff",
  },
});
