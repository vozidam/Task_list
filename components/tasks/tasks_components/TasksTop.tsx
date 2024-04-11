import {Box, HStack, Text} from 'native-base';
import React from 'react';

const TasksTop = () => {
  return (
    <Box>
      <HStack justifyContent="space-around" pr={7} pl={7} pt={10}>
        <Text>Список</Text>
        <Text>Календарь</Text>
        <Text>Поиск</Text>
      </HStack>
      <Box height={0.5} bgColor={'coolGray.300'} mt={3} />
    </Box>
  );
};

export default TasksTop;
