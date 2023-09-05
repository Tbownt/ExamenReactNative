/* eslint-disable react-hooks/exhaustive-deps */
import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, ActivityIndicator, Image} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {useUsers} from '../hooks/useUsers';
import {styles} from '../theme/appTheme';
import {useWindowDimensions} from 'react-native';
import userImage from '../assets/images/user.png';
import userHorizontal from '../assets/images/userTitle.png';
import emailImage from '../assets/images/email.png';
import linkedinImage from '../assets/images/linkedin.png';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

export const DetailUserScreen = ({route}: Props) => {
  const user = route.params as any;
  const {usuario, getUserDetail} = useUsers();
  const uri = usuario?.avatar;
  const {width} = useWindowDimensions();

  useEffect(() => {
    getUserDetail(user);
  }, [user]);

  return !usuario ? (
    <View style={styles.loadingScreen}>
      <ActivityIndicator color={'#080961'} size={100} />
    </View>
  ) : (
    <View style={styles.detailContainer}>
      <View
        style={
          width >= 768
            ? {
                ...styles.borderImage,
                width: 325,
                bottom: 0,
                borderRadius: 0,
                left: 0,
              }
            : styles.borderImage
        }
      />

      <Text
        style={
          width >= 768
            ? {...styles.titleProfile, top: 30, right: 275}
            : styles.titleProfile
        }>
        {usuario.first_name} {usuario.last_name}
      </Text>
      <Image
        source={{uri}}
        style={
          width >= 768
            ? {
                ...styles.imageUserDetail,
                top: 50,
                width: 180,
                height: 180,
                right: 272,
              }
            : styles.imageUserDetail
        }
      />
      <View
        style={
          width >= 768
            ? styles.userNameContainerHorizontal
            : styles.userNameContainer
        }>
        <Image
          source={width >= 768 ? userHorizontal : userImage}
          style={
            width >= 768
              ? {
                  ...styles.iconNameDetail,
                  width: 50,
                  height: 50,
                  top: -178,
                  left: 100,
                }
              : styles.iconNameDetail
          }
        />
        <Text
          style={
            width >= 768
              ? {
                  ...styles.userNameDetail,
                  fontSize: 36,
                  top: -180,
                  left: 120,
                }
              : styles.userNameDetail
          }>
          {usuario.first_name} {usuario.last_name}
        </Text>
        <View
          style={width >= 768 ? {display: 'none'} : styles.lineDetailName}
        />
      </View>
      <View
        style={
          width >= 768
            ? {flexDirection: 'row', bottom: 120, left: 350, gap: 25}
            : styles.userEmailContainer
        }>
        <Image
          source={emailImage}
          style={
            width >= 768
              ? {...styles.iconEmailDetail, height: 55, width: 55}
              : styles.iconEmailDetail
          }
        />
        <Text
          style={
            width >= 768
              ? {...styles.userEmailDetail, fontSize: 36, top: 1}
              : styles.userEmailDetail
          }>
          <Text>{usuario.email}</Text>
        </Text>
        <View
          style={width >= 768 ? {display: 'none'} : styles.lineDetailEmail}
        />
      </View>
      <View style={width >= 768 ? {display: 'none'} : styles.roleContainer}>
        <Image source={linkedinImage} style={styles.roleIcon} />
        <Text style={styles.roleDetail}>
          {usuario.first_name} {usuario.last_name}
        </Text>
      </View>
    </View>
  );
};
