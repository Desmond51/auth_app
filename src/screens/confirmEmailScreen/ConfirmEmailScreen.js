import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = data => {
    console.warn(data);
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
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{required: 'Confirmation code is required'}}
        />

        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

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
