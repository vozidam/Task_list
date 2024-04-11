import {useNavigation} from '@react-navigation/native';
import {Box, Pressable, Text} from 'native-base';
import React, {useState} from 'react';

const Home = () => {
  return (
    <Box
      width={'100%'}
      height={'100%'}
      alignItems={'center'}
      justifyContent={'center'}>
      <Pressable>
        <Text>Главная</Text>
      </Pressable>
    </Box>
  );
};

export default Home;
