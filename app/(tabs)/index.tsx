import TasksScreen from '@/components/Screens/TasksScreen';
import {View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TabOneScreen() {
  return (
    <SafeAreaView className='flex-1'>
    <TasksScreen/>
    </SafeAreaView>
  );
}
