import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../store/reducers/counterReducer';
import { RootState } from '../store/reducers';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const DetailsScreen = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const navigation = useNavigation<StackNavigationProp<any>>();
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const onHandlePress = () => {
    navigation.navigate("Profile");
  };

  return (
    <View>
      <Text>Number: {count}</Text>
      <Button title="Increase" onPress={handleIncrement} />
      <Button title="Decrease" onPress={handleDecrement} />
      <Button title={"Profile"} onPress={onHandlePress} />
    </View>
  );
};

export default DetailsScreen;