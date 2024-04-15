import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const TasksScreen = () => {
  return (
    <View>
      <Header />
      <ScrollView className="bg-red-400">
        <Options />
      </ScrollView>
    </View>
  );
};

export default TasksScreen;

const Header = () => {
  return (
    <View className="relative bg-primary pb-1">
      <View className="relative">
        <View className="absolute -left-12 top-3 rounded-full bg-secondary px-20 py-20" />
      </View>
      <View className="mx-4 mt-4 flex-row justify-between items-center">
        <FontAwesome5 name="user-circle" size={24} color="white" />

          <View className="flex-row items-center justify-start rounded-full bg-white px-2 gap-x-2">
          <FontAwesome5 name="search" size={10} color="gray" />
                <TextInput placeholder="search" className="text-gray-300 pr-12 py-1 w-[148px]"/>
        </View>
        
        <MaterialIcons name="settings" size={24} color="white" />
      </View>
      <View className="mx-4 mt-4">
        <Text className="font-poppins-light text-xs text-white">Today, 15 April</Text>
        <Text className="font-poppins-semiBold text-xl text-white">Dashboard</Text>
      </View>
    </View>
  );
};

const Options = () => {
  return (
    <View className="flex-row items-center justify-around py-2">
      <OptionItem title="List" icon="tasks" iconFactory="FontAwesome5" />
      <OptionItem title="Calendar" icon="calendar" iconFactory="FontAwesome5" />
      <OptionItem title="Kanban" icon="view-kanban" iconFactory="MaterialIcons" />
    </View>
  );
};

const OptionItem = ({
  title,
  icon,
  iconFactory,
}: {
  title: string;
  icon: any;
  iconFactory: string;
}) => {
  return (
    <View className="items-center justify-center space-y-1">
      <Text className="font-poppins-semiBold text-sm">{title}</Text>
      <View className="rounded-[10px] bg-white px-8 py-3">
        {iconFactory === 'MaterialIcons' ? (
          <MaterialIcons name={icon} size={20} color={Colors.primary} />
        ) : iconFactory === 'FontAwesome5' ? (
          <FontAwesome5 name={icon} size={20} color={Colors.primary} />
        ) : (
          ''
        )}
      </View>
    </View>
  );
};
