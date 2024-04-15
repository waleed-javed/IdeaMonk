import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Task, Technologies } from '@/lib/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
type CardProps = {
  card: Task;
};

const TaskCard = ({ card }: CardProps) => {
  return (
    <View className="border border-primary bg-white px-2 py-1">
      <CardHeader isFinished={card.isFinished} />
      <CardTitle title={card.title}/>
      
      <View className='items-center mx-2'>
      <FlatList
        data={card.technologies}
        horizontal={true}
        keyExtractor={(item: Technologies) => item.id}
        renderItem={({ item }) => (
            <Text className="font-poppins-semiBold mr-1 rounded-full bg-secondary px-2.5 py-1.5 text-xs text-white">
            {item.value}
          </Text>
        )}
        />
        </View>

      <View className='py-2 px-1 items-center'>
        <Text className="font-normal">{card.description}</Text>
      </View>
    </View>
  );
};

export default TaskCard;

const CardTitle = ({ title }: { title:string}) => {
  return (
    <View className="items-center">
      <Text className="text-start font-poppins-semiBold w-[285px] font-semibold leading-5">
        {title}
      </Text>
  </View>
  );
};

const CardHeader = ({ isFinished }: { isFinished: Boolean }) => {
  return (
    <View className=" flex-row items-center justify-between">
        <MaterialCommunityIcons name="source-commit-start-next-local" size={32} color={Colors.accent} style={{ transform: [{ rotate: '180deg' }] }}/>
        <Text className={` font-poppins-semiBold rounded-full px-4 py-1 text-xs text-white ${!isFinished ? 'bg-yellow' : 'bg-secondary'}`}>
          {isFinished ? 'Done' : 'Pending'}
        </Text>
    </View>
  );
};
