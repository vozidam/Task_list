import {Box} from 'native-base';
import React from 'react';
import TasksMain from './tasks_components/TasksMain';
import TasksTop from './tasks_components/TasksTop';
import {Dimensions} from 'react-native';

const Tasks = () => {
  return (
    <Box flex={1}>
      <TasksTop />
      <Box flex={1}>
        <TasksMain />
      </Box>
    </Box>
  );
};

export default Tasks;
