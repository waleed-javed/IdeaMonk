import React from 'react';
import { Stack } from 'expo-router';

const TaskLayoutNav = () => {
  return (
    <Stack initialRouteName='details'>
      <Stack.Screen name="details" options={{ headerShown: false }} />
    </Stack>
  );
};

export default TaskLayoutNav;
