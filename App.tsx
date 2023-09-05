import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default App;
