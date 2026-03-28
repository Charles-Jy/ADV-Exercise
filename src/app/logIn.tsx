import { useRouter } from "expo-router";
import { FieldValues, useForm } from "react-hook-form";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: FieldValues) => console.log(data);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Log In</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            {...register("email")}
          />
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Password"
            {...register("password")}
          />
          <TouchableOpacity
            style={styles.SubmitEvent}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => router.push("/signUp")}>
          <Text style={styles.link}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
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
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#fff",
  },
  input: {
    width: "140%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    color: "#ffffff",
  },
  SubmitEvent: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  submitText: {
    color: "#5972ff",
    fontWeight: "bold",
  },
  form: {
    alignItems: "center",
    gap: 10,
  },
  link: {
    marginTop: 10,
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});
