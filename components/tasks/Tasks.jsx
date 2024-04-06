import React from 'react';
import {Box, ScrollView, Text, View} from 'native-base';
import Tasks_top from './tasks_components.jsx/Tasks_top';
import Tasks_main from './tasks_components.jsx/Tasks_main';

const Tasks = () => {
  return (
    <Box>
      <Tasks_main />
    </Box>
  );
};

export default Tasks;
