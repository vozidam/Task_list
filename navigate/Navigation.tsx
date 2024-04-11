import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Box, Image, Text} from 'native-base';
import React from 'react';
import Home from '../components/home/Home';
import Tasks from '../components/tasks/Tasks';
import TasksMainCard from '../components/tasks/tasks_components/TasksMainCard';
import Time from '../components/time/Time';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomIconHome = () => {
  return (
    <Box alignItems={'center'} width={'100px'}>
      <Image size={'35px'} source={require('../Image/home.png')} />
      <Text color={'white'}>Главная</Text>
    </Box>
  );
};

const CustomIconTasks = () => {
  return (
    <Box alignItems={'center'} width={'100px'}>
      <Image size={'35px'} source={require('../Image/layers.png')} />
      <Text color={'white'}>Задачи</Text>
    </Box>
  );
};
const CustomIconTime = () => {
  return (
    <Box alignItems={'center'} width={'100px'}>
      <Image size={'35px'} source={require('../Image/clock.png')} />
      <Text color={'white'}>Учет времени</Text>
    </Box>
  );
};

export function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Tasks"
        component={Tasks}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="TasksMainCard"
        component={TasksMainCard}
      />
    </Stack.Navigator>
  );
}

function NavigationTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Главная"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <CustomIconHome />,
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: 'rgb(0, 35, 63)',
              height: 90,
            },
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={NavigationStack}
          options={{
            headerShown: false,
            tabBarIcon: () => <CustomIconTasks />,
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: 'rgb(0, 35, 63)',
              height: 90,
            },
          }}
        />
        <Tab.Screen
          name="Time"
          component={Time}
          options={{
            headerShown: false,
            tabBarIcon: () => <CustomIconTime />,
            tabBarLabel: () => null,
            tabBarStyle: {
              backgroundColor: 'rgb(0, 35, 63)',
              height: 90,
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTab;
