import React from 'react';
import { Tabs } from 'expo-router';

import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import TaskContextProvider from '@/context/TasksContextProvider';
import { KeyboardAvoidingView, Platform } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <TaskContextProvider>
<KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>

    <Tabs screenOptions={{headerShown: false,}} initialRouteName='index'>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel:false,
          tabBarActiveTintColor: Colors.primary,
          tabBarHideOnKeyboard: true,
          tabBarStyle:  { height: 60 },
          tabBarIcon: ({ color }) => <TabBarIcon name="tasks" color={color} />,
        }}
        />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarShowLabel:false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color}/>,
        }}
        />
    </Tabs>
        </KeyboardAvoidingView>
    </TaskContextProvider>
  );
}
