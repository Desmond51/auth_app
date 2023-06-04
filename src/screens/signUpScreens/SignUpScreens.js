import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import SocialSignUpButtons from '../../components/socialSignInButtons/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [repeatPasswor, setRepeatPassword] = useState('');
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
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email}
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Repeat Password"
          value={repeatPasswor}
          setValue={setRepeatPassword}
          secureTextEntry
        />

        <CustomButton text="Register" onPress={onRegisterPressed} />
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
