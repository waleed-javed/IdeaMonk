import React from 'react';
import { Stack } from 'expo-router';

const AuthLayoutNav = () => {
  return (
    <Stack initialRouteName='sign-in'>
      <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      <Stack.Screen name="sign-up" options={{ headerShown: false }} />
    </Stack>
  );
};

export default AuthLayoutNav;
