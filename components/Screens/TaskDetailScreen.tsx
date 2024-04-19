import { View, Text } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'

const TaskDetailScreen = () => {
    const params = useLocalSearchParams();
    const {} = params;

  return (
    <View>
      <Text>details</Text>
    </View>
  )
}

export default TaskDetailScreen