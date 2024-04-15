import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { router, usePathname } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

const GotAnAccountText = () => {
  return (
    <ScrollView
      className="mt-8"
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <LoginOption />
      <AccountExitsText />
    </ScrollView>
  );
};

export default GotAnAccountText;

const LoginOption = () => {
  const currentPath = usePathname();
  return (
    <View className="mb-3 items-center space-y-3">
      <Text className="mb-3 text-gray-400">
        {currentPath === '/sign-in'
          ? 'or log In with'
          : currentPath === '/sign-up'
            ? 'or sign up with'
            : ''}
      </Text>
      
      {/* SSO Options */}
      <SSOProviders />
    </View>
  );
};

const SSOProviders = () => {
  return (
    <View className="flex-row space-x-3">
      <View className="items-end justify-center rounded-full bg-blue-600 px-4 py-2.5">
        <FontAwesome name="facebook" size={24} color="white" />
      </View>
      <View className="items-end justify-center rounded-full bg-red-600 px-3 py-2.5">
        <FontAwesome name="google" size={24} color="white" />
      </View>
      <View className="items-end justify-center rounded-full bg-black px-3 py-2.5">
        <FontAwesome name="apple" size={24} color="white" />
      </View>
    </View>
  );
};

const AccountExitsText = () => {
  const currentPath = usePathname();
  
  const handleRedirection = () => {
    {
      currentPath === '/sign-in'
        ? router.navigate('/sign-up')
        : currentPath === '/sign-up'
          ? router.navigate('/sign-in')
          : null;
    }
  };

  return (
    <View className="flex-row">
      <Text>
        {currentPath === '/sign-in'
          ? "Don't have an Account?"
          : currentPath === '/sign-up'
            ? 'Already have an account?'
            : ''}
      </Text>

      <Text className="ml-1 font-bold text-secondary" onPress={handleRedirection}>
        {currentPath === '/sign-in' ? 'Get started!' : currentPath === '/sign-up' ? 'Log In' : ''}
      </Text>
    </View>
  );
};
