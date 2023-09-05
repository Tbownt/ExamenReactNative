import React from 'react';
import {useUsers} from '../hooks/useUsers';
import {UserCard} from './UserCard';
import {View, ActivityIndicator} from 'react-native';
import {styles} from '../theme/appTheme';

export const UserList = () => {
  const {usuarios} = useUsers();
  return usuarios.length > 0 ? (
    usuarios.map((usuario, ind) => (
      <UserCard User={usuario} key={usuario.id} ind={ind} />
    ))
  ) : (
    <View style={styles.loadingScreen}>
      <ActivityIndicator color={'#080961'} size={100} />
    </View>
  );
};
