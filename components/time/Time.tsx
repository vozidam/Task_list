import {Box, Pressable, Text} from 'native-base';
import React from 'react';

const Time = () => {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Pressable>
        <Text>Учет времени</Text>
      </Pressable>
    </Box>
  );
};

export default Time;
