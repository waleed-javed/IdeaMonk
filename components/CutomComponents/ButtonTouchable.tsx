import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export type ButtonProps = {
  title: string;
  extraStyles?: string;
  onClick: () => void;
};

const ButtonTouchable = ({ title, onClick, extraStyles }: ButtonProps) => {
  return (
    <View className="mt-3">
      <TouchableOpacity
        onPress={onClick}
        className={`mx-auto rounded-[18px] bg-secondary ${extraStyles}`}
      >
        <Text className="px-10 py-2.5 text-center font-bold text-white">{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonTouchable;
