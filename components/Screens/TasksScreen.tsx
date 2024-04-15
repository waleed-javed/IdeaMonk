import { View, Text, ScrollView, Image, TextInput, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import DashboardHeader from '../CutomComponents/DashboardHeader';
import { Tasks } from '@/lib/types';
import TaskCard from '../CutomComponents/TaskCard';

const dummyTask: Tasks = [
  {
    id: '6c08d1be-1a60-4304-9faa-136b4f76b29c',
    title: 'A very very long task item title description to see how it will look in app interface in case someone writes this long',
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum quas voluptatum laudantium veritatis magnam animi eum consectetur molestiae, ratione vitae saepe. Repudiandae optio perferendis saepe consequuntur nisi dignissimos alias iusto vero veniam ipsam! Inventore esse vitae dicta cum id ullam iusto quae ipsa, fugit aliquam sapiente consequatur! Excepturi, optio quas?",
    technologies: [
      {
        id: '1',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'React',
        label: 'React',
        version: '1',
      },
      {
        id: '2',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'Node',
        label: 'Node',
        version: '1',
      },
      {
        id: '3',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'AWS',
        label: 'AWS',
        version: '1',
      },
    ],
    isFinished: true,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b29c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b30b', url: 'https://picsum.photos/200/300' },
    ],
  },
  {
    id: '21d8bc1a-06d0-4947-a1fb-61285111e053',
    title: 'Task 2',
    description: 'Task 2 description',
    technologies: [
      {
        id: '2',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'Node',
        label: 'Node',
        version: '2',
      },
    ],
    isFinished: false,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b28c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b31b', url: 'https://picsum.photos/200/300' },
    ],
  },
  {
    id: '2a66a11f-3668-482e-aa52-a07f3fec77da',
    title: 'Task 3',
    description: 'Task 3 description',
    technologies: [
      {
        id: '3',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'Next',
        label: 'Next',
        version: '3',
      },
    ],
    isFinished: false,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b27c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b32b', url: 'https://picsum.photos/200/300' },
    ],
  },
  {
    id: '2001e82c-f158-435c-b9d5-c5c9ae56aa12',
    title: 'Task 4',
    description: 'Task 4 description',
    technologies: [
      {
        id: '4',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'AWS',
        label: 'AWS',
        version: '4',
      },
    ],
    isFinished: false,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b26c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
    ],
  },
  {
    id: 'b0e29691-6625-42ae-ad15-0794ba9094d2',
    title: 'Task 5',
    description: 'Task 5 description',
    technologies: [
      {
        id: '5',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'MongoDB',
        label: 'Mondo Db',
        version: '5',
      },
    ],
    isFinished: false,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b25c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
    ],
  },
  {
    id: 'b0e29691-6625-42ae-ad15-0794ba9095d2',
    title: 'Task 6',
    description: 'Task 6 description',
    technologies: [
      {
        id: '5',
        url: 'https://sample.org',
        icon: 'https://picsum.photos/200',
        value: 'MongoDB',
        label: 'Mondo Db',
        version: '5',
      },
    ],
    isFinished: false,
    images: [
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b25c', url: 'https://picsum.photos/200/300' },
      { id: '6c08d1be-1a60-4304-9faa-136b4f76b33b', url: 'https://picsum.photos/200/300' },
    ],
  },
];

const TasksScreen = () => {
  const [tasks, setTasks] = React.useState(dummyTask || []);

  return (
    <View>
      <DashboardHeader />
      <Options />
      <FlatList
      horizontal={false}
      style={{marginBottom:204}}
        data={tasks}
        renderItem={({ item }) => <TaskCard card={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TasksScreen;

export const Options = () => {
  return (
    <View className="flex-row items-center justify-around py-2">
      <OptionItem title="List" icon="tasks" iconFactory="FontAwesome5" />
      <OptionItem title="Calendar" icon="calendar" iconFactory="FontAwesome5" />
      <OptionItem title="Kanban" icon="view-kanban" iconFactory="MaterialIcons" />
    </View>
  );
};

export const OptionItem = ({
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