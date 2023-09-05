import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {styles} from '../theme/appTheme';
import {profilePic, github, linkedin} from '../assets/index';

export const AboutScreen = () => {
  const {width} = useWindowDimensions();

  return (
    <ScrollView pagingEnabled>
      <View style={styles.aboutMeContainer}>
        <View style={styles.profileBackground}>
          <View style={styles.pictureBackground} />
          <Image source={profilePic} style={styles.profilePic} />
          <Text style={styles.headerAboutMe}>Andrés Salom</Text>
          <Text style={styles.subTitle}>
            Desarrollador Web - Frontend Developer
          </Text>
          <TouchableOpacity
            style={width >= 768 ? {bottom: 15} : null}
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/in/andres-salom/')
            }>
            <View style={styles.linkedinContainer}>
              <Text style={styles.linkedinTitle}> {'-   '}Andrés Salom</Text>
              <Image source={linkedin} style={styles.linkedinIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://github.com/Tbownt')}>
            <View
              style={
                width >= 768
                  ? {...styles.linkedinContainer, top: 1}
                  : {...styles.linkedinContainer, height: 100}
              }>
              <Text style={styles.githubTitle}> {'-   '}Tbownt</Text>
              <Image source={github} style={styles.githubIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
