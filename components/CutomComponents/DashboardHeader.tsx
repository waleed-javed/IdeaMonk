import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons'

// wip: make dates dynamic
const DashboardHeader = () => {
  const date = new Date()
  const dateStamp = date.toUTCString().slice(0, 16)

  return (
    <View className="relative bg-primary pb-1 overflow-hidden">
    <View className="relative">
      <View className="absolute -left-12 top-3 rounded-full bg-secondary px-20 py-20" />
    </View>
    <View className="mx-4 mt-4 flex-row justify-between items-center">
      <FontAwesome5 name="user-circle" size={24} color="white" />

        <View className="flex-row items-center justify-start rounded-full bg-white px-2 gap-x-2">
        <FontAwesome5 name="search" size={10} color="gray" />
              <TextInput placeholder="search" 
              
              className="text-gray-400 pr-2 py-1 w-[148px]"/>
      </View>
      
      <MaterialIcons name="settings" size={24} color="white" />
    </View>
    <View className="mx-4 mt-4">
      <Text className="font-poppins-light text-xs text-white">{dateStamp}</Text>
      <Text className="font-poppins-semiBold text-xl text-white">Dashboard</Text>
    </View>
  </View>
  )
}

export default DashboardHeader