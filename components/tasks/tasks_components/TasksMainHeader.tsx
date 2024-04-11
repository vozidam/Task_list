import {Box, FlatList, HStack, Image, Menu, Pressable, Text} from 'native-base';
import React from 'react';
import {Dimensions} from 'react-native';

const TasksMainHeader = () => {
  const screenHeight = Dimensions.get('window').height;

  const menuContent = [
    {number: 2, text: 'Назначенные мне'},
    {number: 0, text: 'Текущие'},
    {number: 0, text: 'В работе'},
    {number: 0, text: 'Завершено'},
  ];

  return (
    <Box mt={6}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <Box>
            <Menu
              left={-16}
              bgColor={'rgb(0, 35, 63)'}
              height={screenHeight}
              bottom={130}
              width={300}
              trigger={triggerProps => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}>
                    <Box>
                      <Box height={'3px'} width={5} bgColor={'black'} mb={1} />
                      <Box height={'3px'} width={5} bgColor={'black'} mb={1} />
                      <Box height={'3px'} width={5} bgColor={'black'} />
                    </Box>
                  </Pressable>
                );
              }}>
              <Box bgColor={'rgb(0, 35, 63)'}>
                <Menu.Item>
                  <HStack
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Text color={'white'}>Разделы</Text>
                    <Image
                      size={43}
                      source={require('../../../Image/plus.png')}
                    />
                  </HStack>
                </Menu.Item>
                <FlatList
                  data={menuContent}
                  keyExtractor={item => item.text}
                  renderItem={({item}) => (
                    <Menu.Item>
                      <HStack
                        pl={3}
                        pr={3}
                        width={'100%'}
                        justifyContent={'space-between'}
                        alignItems={'center'}>
                        <Text color={'white'}>{item.text}</Text>
                        <Box
                          display={item.number === 0 ? 'none' : ''}
                          bgColor={'red.600'}
                          size={6}
                          borderRadius={'full'}
                          alignItems={'center'}
                          justifyContent={'center'}>
                          <Text color={'white'}>{item.number}</Text>
                        </Box>
                      </HStack>
                    </Menu.Item>
                  )}
                />
              </Box>
            </Menu>
          </Box>
          <Text fontSize={20} fontWeight={'bold'} ml={4}>
            Назначенные мне
          </Text>
        </HStack>

        <Box size={10}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../Image/trash_can.png')}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default TasksMainHeader;
