import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<any>>();

  const onHandlePress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Text style={{color: 'black'}}>Profile Screen</Text>
    </View>
  );
};

export default ProfileScreen;