import { Task } from '@/lib/types';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Colors from '@/constants/Colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTask } from '@/context/TasksContextProvider';


// container
const TaskContainer = () => {
  const {tasks, getTasksCategorically} = useTask();
  const categorizedTasks = getTasksCategorically(tasks);

  return (
    <ScrollView
      style={{ marginBottom: 208 }}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {Object.keys(categorizedTasks).map((category) => (
        <CatergoryItem key={category} category={category} tasks={categorizedTasks[category]} />
      ))}
    </ScrollView>
  );
};

const TaskItem = ({ task }: { task: Task }) => {
  const { onItemPressedToggleStatusCompleted} = useTask();
  return (
    <View onTouchEnd={()=>onItemPressedToggleStatusCompleted(task.id)} className="justify-between rounded-md  border border-primary p-1">
      <View className="flex-row items-center">
        <MaterialCommunityIcons
          name={task.isFinished ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'}
          size={25}
          color={Colors.primary}
          style={{ paddingHorizontal: 4 }}
        />
        <Text
          className={`pt-1 font-poppins-light text-[16px] ${task.isFinished && 'line-through'} w-11/12`}
        >
          {task.title}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="rounded-full px-2 font-poppins-semiBold text-gray-400" >
          {task.date.slice(0, 6)}
        </Text>
        <Text
          className={`w-20 text-center 
      ${task.priority == 'high' && 'bg-orange'}  
      ${task.priority == 'medium' && 'bg-yellow'}
      ${task.priority == 'low' && 'bg-support'}
      rounded-full px-2 font-poppins-semiBold text-white`}
      style={{elevation:2}} >
          {task.priority}
        </Text>
      </View>
    </View>
  );
};

const CatergoryItem = ({ category, tasks }: { category: string; tasks: Task[] }) => {

  if(category && tasks.length <1){
    return null;
  }
  return (
    <View className="mx-2 overflow-auto">
      <View className='items-center justify-center mt-3 mb-1'>
      <Text className="bg-primary text-white px-2 w-11/12 text-center py-0.5 my-1 rounded-full font-poppins-semiBold text-lg"  style={{elevation:3}}>{category}</Text>
      </View>

      <ScrollView
        horizontal={false}
        contentContainerStyle={{ justifyContent: 'center', gap: 12 }}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ScrollView>
    </View>
  );
};

export default TaskContainer;
