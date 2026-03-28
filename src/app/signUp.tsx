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
  const { register, handleSubmit, setValue, watch } = useForm();
  const router = useRouter();
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  const handleRegister = () => {
    const email = watch("email");
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");

    if (!email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    // 👉 after successful register/login
    router.push("/setUp"); // or router.push('/dashboard')
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign Up</Text>
        <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            {...register("email")}
            onChangeText={(text) => setValue("email", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            {...register("password")}
            onChangeText={(text) => setValue("password", text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            {...register("confirmPassword")}
            onChangeText={(text) => setValue("confirmPassword", text)}
          />

          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.SubmitEvent}>Submit</Text>
          </TouchableOpacity>
        </form>
        <TouchableOpacity onPress={() => router.push("/logIn")}>
          <Text style={styles.link}>Already have an account? Log In</Text>
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
    cursor: "pointer",
    width: "100%",
    color: "#5972ff",
    fontWeight: "bold",
  },
  form: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  link: {
    marginTop: 10,
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});
