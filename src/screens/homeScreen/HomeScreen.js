import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Welcome<Text style={styles.home}> Home</Text>, </Text>
        <Text style={styles.title}><Text style={styles.home1}>Home</Text> <Text style={styles.sweet}>sweet</Text> home</Text>
           
        <CustomButton
          text="Sign In"
          onPress={onSignInPressed}
          type="TERTIARY"
          bgColor=""
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Sign Up"
          onPress={onSignUpPressed}
          type="TERTIARY"
          bgColor=""
          fgColor="#363636"
        />

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingVertical: 290,
    backgroundColor: '#4d4AA6',
  },
  title: {
    fontSize: 40,
    marginHorizontal: 5,
    color: 'white',
  },
  home: {
    color: 'green',
  },
  home1: {
    color: 'red',
  },
  sweet: {
    color: 'yellow',
  }


});

export default HomeScreen;
