import { View, Text, FlatList, TextInput} from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import DashboardHeader from '../CutomComponents/DashboardHeader';
import { Task} from '@/lib/types';
import { useTask } from '@/context/TasksContextProvider';
import TaskContainer from '../CutomComponents/TaskContainer';


const TasksScreen = () => {
  const {tasks, setTasks, onItemPressedToggleStatusCompleted, onDelete} = useTask();

  return (
    <View >
      <DashboardHeader />
      <Options />      
        <TaskContainer/>
      {/* <FlatList
        data={tasks}
        horizontal={false}
        style={{ marginBottom: 204 }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View className="mb-3" />}
        renderItem={({ item }) => {
          return (
            <View onTouchEnd={()=> onItemPressedToggleStatusCompleted(item.id)}>
            <TaskCard task={item} />
            </View>
          );
        }}
        ListFooterComponent={()=>(<View>
          <TextInput placeholder='task ...' className='border border-primary' />
        </View>)}
      /> */}
    </View>
  );
};

export default TasksScreen;

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

const TaskCard = ({task}: {task: Task}) => {
  
  return (
    <View className="mx-2 p-1 rounded-md  justify-between border border-primary">
    <View className='flex-row items-center'>
    <MaterialCommunityIcons name={task.isFinished ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'} size={25} color={Colors.primary} style={{paddingHorizontal:4}}/>
    <Text  className={`text-[16px] font-poppins-light pt-1 ${task.isFinished && 'line-through'} max-w-xs`}>{task.title}</Text>
    </View>

    <View className='items-center justify-between flex-row'>
      <Text className='px-2 rounded-full text-gray-400 font-poppins-semiBold'>{task.date.slice(0,6)}</Text>
      <Text className={`w-20 text-center 
      ${task.priority == 'high' && 'bg-orange'}  
      ${task.priority == 'medium' && 'bg-yellow'}
      ${task.priority == 'low' && 'bg-support'}
      px-2 rounded-full text-white font-poppins-semiBold`}>{task.priority}</Text>
    </View>
  </View>
  ); 
}