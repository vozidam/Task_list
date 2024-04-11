import {Box, FlatList, HStack, Pressable, Text, VStack} from 'native-base';
import React from 'react';
import {Image} from 'react-native';
import TasksMainHeader from './TasksMainHeader';
import {useNavigation} from '@react-navigation/native';

const TasksMain = () => {
  const navigation = useNavigation();

  const cards = [
    {
      title: 'Сделать логотип мемфиса',
      status: 'Новый',
      priority: 'Средний',
      type: 'Напоминание',
      starsDate: '16.06.2022',
      endDate: '17.07.2003',
    },
    {
      title:
        'Название задачи длинное очень длинное в две строки. Задача сделать карточку',
      status: 'Новый',
      priority: 'Незаконченый',
      type: 'Напоминание',
      starsDate: '16.06.2022',
      endDate: '17.07.2003',
    },
    {
      title: 'Сделать иконку для приложения',
      status: 'Проверено',
      priority: 'Средний',
      type: 'Напоминание',
      starsDate: '16.06.2022',
      endDate: '17.07.2003',
    },
  ];
  return (
    <Box>
      <Box mt={1} pr={4} pl={4}>
        <FlatList
          data={cards}
          ListHeaderComponent={<TasksMainHeader />}
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable onPress={() => navigation.navigate('TasksMainCard')}>
              <Box
                mb={4}
                p={3}
                bgColor={'coolGray.100'}
                borderRadius={8}
                borderWidth={1}
                borderColor={'coolGray.200'}>
                <Text mb={3}>{item.title}</Text>
                <VStack>
                  <HStack justifyContent={'space-between'} mb={3}>
                    <Text color={'coolGray.500'}>Статус</Text>
                    <Box
                      mr={130}
                      borderRadius={10}
                      p={1}
                      bgColor={
                        item.status == 'Новый'
                          ? 'red.300'
                          : item.status == 'Проверено'
                          ? 'blue.300'
                          : ''
                      }>
                      <Text>{item.status}</Text>
                    </Box>
                  </HStack>
                  <HStack justifyContent={'space-between'} mb={3}>
                    <Text color={'coolGray.500'}>Приоритет</Text>
                    <Box
                      mr={130}
                      borderRadius={10}
                      p={1}
                      bgColor={
                        item.priority == 'Средний'
                          ? 'red.300'
                          : item.priority == 'Незаконченый'
                          ? 'cyan.300'
                          : ''
                      }>
                      <Text>{item.priority}</Text>
                    </Box>
                  </HStack>
                  <HStack justifyContent={'space-between'} mb={3}>
                    <Text color={'coolGray.500'}>Тип</Text>
                    <Box mr={130} borderRadius={10} p={1}>
                      <Text color={'blue.400'}>{item.type}</Text>
                    </Box>
                  </HStack>
                  <HStack justifyContent={'space-between'} mb={3}>
                    <Text color={'coolGray.500'}>Дата начала</Text>
                    <Box mr={130} p={1}>
                      <Text>{item.starsDate}</Text>
                    </Box>
                  </HStack>
                  <HStack justifyContent={'space-between'} mb={3}>
                    <Text color={'coolGray.500'}>Дата окончания</Text>
                    <Box mr={130} p={1}>
                      <Text>{item.endDate}</Text>
                    </Box>
                  </HStack>
                </VStack>
                <Box h={'2px'} bgColor={'coolGray.200'} mb={3} />
                <HStack justifyContent={'space-between'}>
                  <HStack>
                    <Image
                      style={{width: 27, height: 27}}
                      source={require('../../../Image/card_chat.png')}
                    />
                    <Text ml={1} top={2} color={'blue.500'}>
                      0
                    </Text>
                  </HStack>
                  <HStack>
                    <Image
                      style={{width: 27, height: 27}}
                      source={require('../../../Image/notes.png')}
                    />
                    <Image
                      style={{width: 27, height: 27, marginLeft: 17}}
                      source={require('../../../Image/check_mark.png')}
                    />
                  </HStack>
                </HStack>
              </Box>
            </Pressable>
          )}
          keyExtractor={item => item.title}
        />
      </Box>
    </Box>
  );
};

export default TasksMain;
