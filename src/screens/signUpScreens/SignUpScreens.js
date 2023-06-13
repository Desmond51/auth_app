import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import SocialSignUpButtons from '../../components/socialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'**/==/=?^_{1}]/
const SignUpScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigtion = useNavigation();

  const onRegisterPressed = () => {
    navigtion.navigate('ConfirmEmail');
  };
  const onSignInPress = () => {
    navigtion.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed');
  };
  const onPrivacyPressed = () => {
    console.warn('onPrivacyPressed');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account </Text>
        <CustomInput
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            maxLength: {
              value: 20,
              message: 'Your password should not be more than 20 characters',
            },
          }}
        />
        <CustomInput
          placeholder="Email"
          control={control}
          rules={{required: 'Email is required'}}
        />
        <CustomInput
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required',
            minLegth: {
              value: 8,
              message: 'Password should be minimum 8 characters long',
            },
          }}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          control={control}
          rules={{
            required: 'Repeat your password',
            minLegth: {
              value: 8,
              message: 'Password must be minimum of 8 characters',
            },
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text style={styles.text}>
          By registering, you confirm that you accept our
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>
          and
          <Text style={styles.link} onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignUpButtons />
        <CustomButton
          text="Already have an accont? Sign In"
          onPress={onSignInPress}
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
    padding: 20,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
});

export default SignUpScreen;
