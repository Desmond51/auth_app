/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignInScreen from './src/screens/signInScreens/SignInScreen';
import SignUpScreens from './src/screens/signUpScreens/SignUpScreens';
import ConfirmEmailScreen from './src/screens/confirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/forgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/newPasswordScreen/NewPasswordScreen';
import HomeScreen from './src/screens/homeScreen/HomeScreen';
import Navigation from './src/navigation/Navigation';


function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.root}>
      {/* <SignInScreen /> */}
      {/* <SignUpScreens /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <NewPasswordScreen /> */}
      {/* <HomeScreen /> */}
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
