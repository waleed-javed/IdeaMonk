import React from 'react';
import { Tabs } from 'expo-router';

import { FontAwesome5 } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome5>['name'];
  color: string;
}) {
  return <FontAwesome5 size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false,}}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel:false,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => <TabBarIcon name="tasks" color={color} />,
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          tabBarShowLabel:false,
          tabBarActiveTintColor: Colors.primary,
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color}/>,
        }}
      />
    </Tabs>
  );
}
