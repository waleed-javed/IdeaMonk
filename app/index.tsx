import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LandingScreen from '@/components/Screens/LandingScreen';
import { StatusBar } from 'expo-status-bar';
import Colors from '@/constants/Colors';

const Landing = () => {
  return (
    <>
      <SafeAreaView className="flex-1">
        <LandingScreen />
      </SafeAreaView>

      {/* status bar does not need to altered so leave this */}
      <StatusBar backgroundColor={"#fff"} style="dark" />
    </>
  );
};

export default Landing;
