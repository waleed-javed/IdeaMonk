import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import CheckMark from '../Aesthetics/CheckMark';

const LandingScreen = () => {
  return (
    <View className="h-full">
      <View className="flex flex-1  items-start justify-end bg-white">
        {/* Landing CTA Container View */}
        <View className="pb-36 pl-6">
          <View className="gap-y-1">
            <View className="-mb-6">
              <Image
                source={require('../../assets/images/LoginCheck.png')}
                resizeMode="contain"
                className="w-[200px] h-[185px]"
              />
            </View>
            <Text className="text-2xl font-poppins-black text-primary">Get Things done.</Text>
            <Text className="w-72 text-base font-poppins-semiBold capitalize text-gray-400">
              Just clicks away from capturing your next million $$ Idea!
            </Text>
          </View>
        </View>
      </View>

      {/* CTA Button  */}
      <View className="flex items-end justify-center bg-white">
        <View className="h-[20vh] w-2/5 items-center justify-center rounded-tl-full bg-secondary">
          <View className="relative">
            <TouchableOpacity
              className="absolute -bottom-10 -right-11"
              onPress={() => router.replace('/(auth)/sign-in')}
            >
              <FontAwesome6 name="arrow-right" size={56} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
