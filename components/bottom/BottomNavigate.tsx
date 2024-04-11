import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Image, Pressable, Text} from 'native-base';
import React from 'react';

const BottomNavigate = () => {
  return (
    <HStack
      pr={7}
      pl={7}
      pt={4}
      bgColor={'rgb(0, 35, 63)'}
      height={100}
      justifyContent={'space-between'}>
      <Pressable>
        <Box alignItems={'center'} width={'100px'}>
          <Image size={'35px'} source={require('../../Image/home.png')} />
          <Text color={'white'}>Главная</Text>
        </Box>
      </Pressable>

      <Pressable>
        <Box alignItems={'center'} width={'100px'}>
          <Image size={'35px'} source={require('../../Image/layers.png')} />
          <Text color={'white'}>Задачи</Text>
        </Box>
      </Pressable>
      <Pressable>
        <Box alignItems={'center'} width={'100px'}>
          <Image size={'35px'} source={require('../../Image/clock.png')} />
          <Text color={'white'}>Учет времени</Text>
        </Box>
      </Pressable>
    </HStack>
  );
};

export default BottomNavigate;
