import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
}

const FormField = ({ title, value, handleChangeText, otherStyles, ...rest }: Props) => {
  return (
    <View className='my-2'>
      <Text className='text-sm text-gray-400 ml-4'>{title}</Text>
      <TextInput
        {...rest}
        className={`min-h-12 mt-1 h-[40px] border border-gray-200 px-[10px] focus:border-secondary rounded-[18px] bg-gray-200 ${otherStyles}`}
        value={value}
        onChangeText={handleChangeText}
      />
    </View>
  );
};

export default FormField;
