import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import {userImage, aboutMe} from '../assets/index';
import {useUsers} from '../hooks/useUsers';
import {styles} from '../theme/appTheme';
import {UserList} from '../components/UserList';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigation/Navigation';

type homeScreenProp = StackNavigationProp<RootStackParams>;

export const HomeScreen = () => {
  const {isLoading} = useUsers();
  const {width} = useWindowDimensions();

  const navigator = useNavigation<homeScreenProp>();
  if (isLoading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator
          color={'#080961'}
          size={100}
          style={styles.loadingScreen}
        />
      </View>
    );
  }
  return (
    <View style={styles.homeScreen}>
      <View style={styles.titleContainer}>
        <Image source={userImage} style={styles.homeIcon} />
        <Text style={styles.homeTitle}>Usuarios</Text>
        <TouchableOpacity
          activeOpacity={0.2}
          onPress={() => navigator.navigate('About')}
          style={width >= 768 && {left: 200}}>
          <Image source={aboutMe} style={styles.aboutMe} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <UserList />
      </ScrollView>
    </View>
  );
};
