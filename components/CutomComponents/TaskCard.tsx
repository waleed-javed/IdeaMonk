import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { Task, Technologies } from '@/lib/types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const TaskCard = ({ card }: { card: Task }) => {

  return (
    <View className="mx-2 rounded-md border border-primary bg-white px-2 py-1">
      <CardHeader isFinished={card.isFinished} />
      <CardTitle title={card.title} />
      {/* <TechnologiesInvolved listItems={card.technologies} /> */}

      {/* <View className="items-center px-1 py-2">
        <Text className="font-normal">{card.description}</Text>
      </View> */}
      <View className='items-start mx-2'>
        <Text className='font-poppins-thin'>{card.date.slice(5,16)}</Text>
      </View>
    </View>
  );
};

export default TaskCard;

const CardTitle = ({ title }: { title: string }) => {
  return (
    <View className="items-center">
      <Text className="w-[285px] text-start font-poppins-semiBold font-semibold leading-5">
        {title}
      </Text>
    </View>
  );
};

const CardHeader = ({ isFinished }: { isFinished: Boolean }) => {
  return (
    <View className=" flex-row items-center justify-between">
      <MaterialCommunityIcons
        name="source-commit-start-next-local"
        size={32}
        color={Colors.accent}
        style={{ transform: [{ rotate: '145deg' }, { translateX: 5 }, { translateY: 15 }] }}
      />
      <Text
        className={` rounded-full px-4 py-1 font-poppins-semiBold text-xs text-white ${!isFinished ? 'bg-yellow' : 'bg-secondary'}`}
      >
        {isFinished ? 'Done' : 'Pending'}
      </Text>
    </View>
  );
};

const TechnologiesInvolved = ({ listItems }: { listItems: Technologies[] }) => {
  return (
    <View className="mx-2 items-center">
      <FlatList
        data={listItems}
        horizontal={true}
        keyExtractor={(item: Technologies) => item.id}
        renderItem={({ item }) => (
          <Text className="mr-1 rounded-full bg-secondary px-2.5 py-1.5 font-poppins-semiBold text-xs text-white">
            {item.value}
          </Text>
        )}
      />
    </View>
  );
};
