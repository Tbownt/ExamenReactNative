/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useNavigation} from '@react-navigation/core';
import {User} from '../interfaces/userInterface';
import {RootStackParams} from '../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';

type homeScreenProp = StackNavigationProp<RootStackParams>;

interface Props {
  User: User;
  ind: number;
}

export const UserCard = ({User, ind}: Props) => {
  const uri = User.avatar;
  const navigator = useNavigation<homeScreenProp>();

  return (
    <TouchableOpacity
      onPress={() => navigator.navigate('Detail', User.id)}
      activeOpacity={0.5}>
      <View
        style={
          ind === 0
            ? {...styles.userCardContainer, paddingTop: 25}
            : styles.userCardContainer
        }>
        <Image source={{uri}} style={styles.imageUserCard} />
        <Text style={styles.firstNameUserCard}>
          {User.first_name} {User.last_name}
        </Text>
        <View style={styles.lineEmailUserCard} />
      </View>
    </TouchableOpacity>
  );
};
