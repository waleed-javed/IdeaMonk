import { View, Text } from 'react-native'
import React from 'react'
import TaskDetailScreen from '@/components/Screens/TaskDetailScreen'
import { SafeAreaView } from 'react-native-safe-area-context'

const Details = () => {
  return (
    <SafeAreaView>
   <TaskDetailScreen/>
    </SafeAreaView>
  )
}

export default Details