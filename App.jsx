import {
  Box,
  HamburgerIcon,
  Menu,
  Modal,
  NativeBaseProvider,
  Pressable,
  ScrollView,
} from 'native-base';
import React, {useState} from 'react';
import Tasks from './components/tasks/Tasks';
import Tasks_top from './components/tasks/tasks_components.jsx/Tasks_top';
import Tasks_main_header from './components/tasks/tasks_components.jsx/Tasks_main_header';

const App = () => {
  return (
    <NativeBaseProvider>
      <Tasks_top />
      <Box>
        <Tasks_main_header />
      </Box>
      <Box flex={1}>
        <Tasks />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
