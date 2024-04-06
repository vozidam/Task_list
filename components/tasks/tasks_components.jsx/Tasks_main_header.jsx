import {
  Actionsheet,
  Box,
  Button,
  FormControl,
  HStack,
  HamburgerIcon,
  Image,
  Input,
  Menu,
  Modal,
  Pressable,
  Text,
  useDisclose,
} from 'native-base';
import React, {useState} from 'react';
import {Dimensions} from 'react-native';

const Tasks_main_header = () => {
  const [showModal, setShowModal] = useState(false);
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <Box mt={6}>
      <HStack alignItems={'center'} justifyContent={'space-between'}>
        <HStack alignItems={'center'}>
          <Box>
            <Menu
              bgColor={'rgb(0, 35, 63)'}
              height={screenHeight}
              bottom={130}
              width={300}
              trigger={triggerProps => {
                return (
                  <Pressable
                    accessibilityLabel="More options menu"
                    {...triggerProps}>
                    <Box ml={4}>
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
                <Menu.Item>
                  <HStack
                    pl={3}
                    pr={3}
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Text color={'white'}>Разделы</Text>
                    <Box
                      borderRadius={'full'}
                      alignItems={'center'}
                      justifyContent={'center'}
                      size={6}
                      bgColor={'red.600'}>
                      <Text color={'white'}>2</Text>
                    </Box>
                  </HStack>
                </Menu.Item>
                <Menu.Item>
                  <HStack
                    pl={3}
                    pr={3}
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Text color={'white'}>В работе</Text>
                  </HStack>
                </Menu.Item>
                <Menu.Item>
                  <HStack
                    pl={3}
                    pr={3}
                    width={'100%'}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Text color={'white'}>Завершено</Text>
                  </HStack>
                </Menu.Item>
              </Box>
            </Menu>
          </Box>
          <Text fontSize={20} fontWeight={'bold'} ml={4}>
            Назначенные мне
          </Text>
        </HStack>

        <Box size={10} mr={4}>
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../Image/trash_can.png')}
          />
        </Box>
      </HStack>
    </Box>
  );
};

export default Tasks_main_header;
