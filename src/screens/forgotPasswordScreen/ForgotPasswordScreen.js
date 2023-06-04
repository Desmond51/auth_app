import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('NewPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.sign}>Reset your password</Text>
        <Text>Username *</Text>
        <CustomInput
          placeholder="Enter your username or email"
          value={username}
          setValue={setUsername}
        />

        <CustomButton text="Send" onPress={onSendPressed} bgColor="#4d4AA6" />

        <CustomButton
          text="Back to Sign In"
          onPress={onSignUpPress}
          type="TERTIARY"
          bgColor=""
          fgColor="#363636"
        />
        <Text style={styles.title}>
          <CustomButton
            text="Please Sign In / Sign Up"
            onPress={onSignUpPress}
            type="TERTIARY"
            bgColor="#4d4AA6"
            fgColor="white"
          />
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  sign: {
    fontSize: 25,
    fontWeight: 'bold',
    alignItems: 'flex-start',
    color: 'black',
  },
  title: {
    paddingTop: 400,
  },
});

export default ForgotPasswordScreen;
