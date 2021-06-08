/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AppBottomNavigator } from './src/navigation/app_navigation';
import { enableScreens } from 'react-native-screens';
import store from './src/store/store';
import { Provider } from 'react-redux';
import Colors from './src/utils/colors';
import AppStatusBar from './src/components/app_status_bar';

enableScreens();

const App = props => {
  return (
  <Provider store={store}>
  <NavigationContainer>
    <AppStatusBar />
    <AppBottomNavigator />
  </NavigationContainer>
  </Provider>)
};

export default App;
