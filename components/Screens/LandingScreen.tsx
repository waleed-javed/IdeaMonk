import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import { FontAwesome6 } from '@expo/vector-icons';

const LandingScreen = () => {
  return (
    <View className="h-full">
      <View className="flex flex-1  bg-white items-start justify-end">

        {/* Landing CTA Container View */}
        <View className="pb-36 pl-6">
          <View className="space-y-3">
        <View
          className="w-[135px] h-[135px] border-primary transform -rotate-6 translate-x-8 -translate-y-4 rounded-md bg-yellow items-center justify-center"
        >
          <FontAwesome6 name="check" size={86} color="white" />
        </View>
            <Text className="font-bold text-primary text-2xl">
              Get Things done.
            </Text>
            <Text className="font-normal w-72 text-gray-400 capitalize text-base">
              Just clicks away from capturing your next million $$ Idea!
            </Text>
            </View>
        </View>
      </View>
      
      {/* CTA Button  */}
      <View className="flex justify-center items-end bg-white">
        <View className="bg-secondary w-2/5 h-[20vh] rounded-tl-full items-center justify-center">
          <View className="relative">
          <TouchableOpacity className="absolute -bottom-10 -right-11" onPress={()=> router.push('/(auth)/sign-in')}>
            <FontAwesome6 name="arrow-right" size={56} color="white" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
