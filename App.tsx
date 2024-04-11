import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import Navigation, {NavigationStack} from './navigate/Navigation';
import Tasks from './components/tasks/Tasks';
import TasksTop from './components/tasks/tasks_components/TasksTop';
import NavigationTab from './navigate/Navigation';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationTab />
    </NativeBaseProvider>
  );
};

export default App;
