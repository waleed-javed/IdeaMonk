import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import CheckMark from '@/components/Aesthetics/CheckMark';
import ButtonTouchable from '@/components/CutomComponents/ButtonTouchable';
import FormField from '@/components/CutomComponents/FormField';
import GotAnAccountText from '@/components/CutomComponents/GotAnAccountText';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = () => {
    // if (!form.email || !form.password) return Alert.alert('Error', 'Please fill in all fields');
    // Alert.alert('Login Creds:', `Signing in with: ${form.email} and Pass: ${form.password}`);

    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1">
      {/* Landing CTA Container View */}
      <View className="px-5 pt-8">
        <View className="mx-auto space-y-3">
          <CheckMark />
          <Text className=' mx-auto text-[26px] text-secondary font-poppins-semiBold'>Welcome Back!</Text>

          <View className="space-y-3">
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              autoCapitalize="none"
            />

            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              secureTextEntry
            />

          </View>
          <ButtonTouchable title="Log In" onClick={handleSignIn} />
          <GotAnAccountText />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
