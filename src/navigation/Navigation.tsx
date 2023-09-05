import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {DetailUserScreen} from '../screens/DetailUserScreen';
import {AboutScreen} from '../screens/AboutScreen';

export type RootStackParams = {
  Home: undefined;
  Detail: undefined | any;
  About: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        title: 'Users',
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'Sobre mí',
          headerShown: true,
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailUserScreen}
        options={{
          headerShown: true,
          title: 'Perfil',
          cardStyle: {
            backgroundColor: 'white',
          },
        }}
      />
    </Stack.Navigator>
  );
};
