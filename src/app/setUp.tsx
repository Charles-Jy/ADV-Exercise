import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Button,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function ImagePickerExample() {
  const router = useRouter();
  const [image, setImage] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required.",
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    if (!firstName || !lastName) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    // Show success message, then immediately navigate to homepage
    Alert.alert("Success", "Form submitted");
    router.replace("/homepage");

    // also try plain path to support non-absolute router configs
    // in case /homepage does not resolve in some environments:
    // router.replace("homepage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri:
              image ||
              "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg",
          }}
          style={styles.image}
        />
        <Button title="Select Profile Picture" onPress={pickImage} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={(text: string) => setFirstName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text: string) => setLastName(text)}
        />
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.submitEvent}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d9d6fd",
    padding: 20,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5972ff",
    paddingHorizontal: 80,
    paddingVertical: 40,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 10,
    borderColor: "#5364ff",
    borderWidth: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: "130%",
    color: "#ffffff",
  },
  submitEvent: {
    color: "#5364ff",
    fontWeight: "bold",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    overflow: "hidden",
    textAlign: "center",
    marginTop: 10,
  },
});
