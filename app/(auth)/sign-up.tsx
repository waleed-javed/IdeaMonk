import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import CheckMark from '@/components/Aesthetics/CheckMark';
import ButtonTouchable from '@/components/CutomComponents/ButtonTouchable';
import GotAnAccountText from '@/components/CutomComponents/GotAnAccountText';
import FormField from '@/components/CutomComponents/FormField';

const SignUp = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
  });

  const handleSignUp = () => {
    if (!form.email || !form.password || !form.username)
      return Alert.alert('Error', 'Please fill in all fields');
    Alert.alert('Login Creds:', `Signing in with: ${form.email} and Pass: ${form.password}`);

    // handle signup logic here
    Alert.alert('Success', 'User created successfully');

    router.replace('/(tabs)');
  };

  return (
    <SafeAreaView className="flex-1">
      <View className="px-5 pt-8">
        <View className="mx-auto space-y-3">
          <CheckMark />
          <Text className='mx-auto text-[26px] text-secondary font-poppins-semiBold'>Lets Get Started!</Text>

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
          <ButtonTouchable title="Sign Up" onClick={handleSignUp} />
          <GotAnAccountText />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
