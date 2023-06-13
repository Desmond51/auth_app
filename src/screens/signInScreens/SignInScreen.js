import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import CustomButton from '../../components/customButton/CustomButton';
import CustomInput from '../../components/customInputs/CustomInput';
import Logo from '../../../assets/images/Logo_2.jpeg';
import SocialSignUpButtons from '../../components/socialSignInButtons/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const SignInScreen = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const {height} = useWindowDimensions();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = data => {
    console.log(data);
    // Validate User
    navigation.navigate('Home');
  };
  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <CustomInput
          name="Username"
          placeholder="Username"
          control={control}
          rules={{require: 'Username is required'}}
        />
        <CustomInput
          name="Password"
          placeholder="Password"
          control={control}
          rules={{
            require: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long'
            },
          }}
          secureTextEntry
        />

        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          bgColor="#4d4AA6"
        />
        <CustomButton
          text="Forgot password"
          onPress={onForgotPassword}
          type="TERTIARY"
          bgColor="#4d4AA6"
          fgColor="white"
        />

        <SocialSignUpButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
          bgColor="#4d4AA6"
          fgColor="white"
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
});

export default SignInScreen;
