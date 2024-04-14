import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = () => {
    if (!form.email || !form.password)
      return Alert.alert("Error", "Please fill in all fields");
    Alert.alert(
      "Login Creds:",
      `Signing in with: ${form.email} and Pass: ${form.password}`
    );

    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Landing CTA Container View */}
      <View className="mt-16 p-5">
        <View className="space-y-3 mx-auto">
          <View className="w-[135px] h-[135px] border-primary transform rotate-6 mx-auto -translate-y-4 rounded-md bg-yellow items-center justify-center">
            <FontAwesome6 name="check" size={86} color="white" />
          </View>

          <TextInput
            className="h-[40px] border-secondary border mb-[10px] px-[10px] rounded-md min-h-12"
            placeholder="Email"
            value={form.email}
            onChangeText={(e) => setForm({ ...form, email: e })}
            autoCapitalize="none"
          />

          <TextInput
            className="h-[40px] border-secondary border mb-[10px] px-[10px] rounded-md min-h-12"
            placeholder="Password"
            value={form.password}
            onChangeText={(e) => setForm({ ...form, password: e })}
            secureTextEntry
          />

          <TouchableOpacity onPress={handleSignIn} className="px-32 border-2 border-primary mx-auto py-4 bg-yellow rounded-full">
            <Text className="text-white font-bold text-center">
              Sign In</Text>
          </TouchableOpacity>

          <View className="flex-row mt-[10px]">
            <Text>Don't have an account?</Text>
            <Text
              className="text-secondary ml-1 font-bold"
              onPress={() => router.navigate("/(auth)/sign-up")}
            >
              Sign Up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
