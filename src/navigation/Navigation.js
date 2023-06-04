import {View, Text} from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/signInScreens/SignInScreen';
import SignUpScreen from '../screens/signUpScreens/SignUpScreens';
import ConfirmEmailScreen from '../screens/confirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/forgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/newPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignInScreen} />
        <Stack.Screen name='SignUp' component={SignUpScreen} />
        <Stack.Screen name='ConfirmEmail' component={ConfirmEmailScreen} />
        <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen} />
        <Stack.Screen name='NewPassword' component={NewPasswordScreen} />
        <Stack.Screen name='Home' component={HomeScreen } />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
