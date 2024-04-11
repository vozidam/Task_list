import {useNavigation} from '@react-navigation/native';
import {Box, Pressable, Text} from 'native-base';
import React from 'react';

const TasksMainCard = () => {
  const navigation = useNavigation();
  return (
    <Box>
      <Pressable onPress={() => navigation.goBack()} mt={5} ml={5}>
        <Box
          size={12}
          borderRadius={'2xl'}
          bgColor={'blue.400'}
          alignItems={'center'}
          justifyContent={'center'}>
          <Text fontWeight={'bold'}>back</Text>
        </Box>
      </Pressable>
      <Box height={'100%'} alignItems={'center'} justifyContent={'center'}>
        <Text>Card</Text>
      </Box>
    </Box>
  );
};

export default TasksMainCard;
