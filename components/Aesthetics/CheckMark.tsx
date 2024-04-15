import { View, Image } from 'react-native';
import React from 'react';

const CheckMark = () => {
  return (
    <View className="mx-auto">
      <Image
        source={require('../../assets/images/LoginCheck.png')}
        resizeMode="contain"
        className="h-[135px] w-[200px]"
      />
    </View>
  );
};

export default CheckMark;
