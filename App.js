/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigator } from './navigation/app_navigation';
import { enableScreens } from 'react-native-screens';
import store from './store/store';
import { Provider } from 'react-redux';

enableScreens();

const App = props => {
  return (
  <Provider store={store}>
  <NavigationContainer>
    <AppBottomNavigator />
  </NavigationContainer>
  </Provider>)
};

export default App;
