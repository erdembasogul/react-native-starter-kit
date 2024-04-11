import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStackNavigator from './src/navigation/MainStackNavigator';

type RootStackNavigatorParamsList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainStackNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
