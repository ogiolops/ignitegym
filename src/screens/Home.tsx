import { useState } from 'react';
import { HStack, VStack, FlatList, Heading, Text } from 'native-base';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';
import { useNavigation } from '@react-navigation/native';

export function Home(){

  const [groups, setGroups] = useState(['costa', 'Ombro', 'bícipes', 'perna']);
  const [exercices, setExercices] = useState([' Puxada frontal', 'Remada da morte', 'remada transcendente', 'perna cavalo', 'Panturrilha', 'Agachamento', 'Tricepis']);
  const [groupSelected, setGroupSelected] = useState('Costa');

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return(
    <VStack flex={1} >
      <HomeHeader />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={ ({item}) => (
          <Group 
            name={item} 
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8} >
        <HStack justifyContent='space-between' marginBottom={5}>
          <Heading color="gray.200" fontSize="md" >
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm" >
            {exercices.length}
          </Text>
        </HStack>
        
        
        <FlatList 
          data={exercices}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <ExerciseCard 
              onPress={handleOpenExerciseDetails}
            />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ paddingBottom:20 }}
        />

      </VStack>
    </VStack>
  );
}