import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignIn');
  };
  const onResendPress = () => {
    console.log('onResendCode');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.sign}>Confirm your email</Text>

        <CustomInput
          placeholder="Enter your confirmation code"
          value={code}
          setValue={setCode}
          secureTextEntry
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
        />
        <CustomButton
          text="Back to Sign In"
          onPress={onSignUpPress}
          type="TERTIARY"
        />
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
  },
});

export default ConfirmEmailScreen;
