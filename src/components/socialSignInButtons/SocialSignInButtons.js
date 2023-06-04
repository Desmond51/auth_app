// import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../customButton/CustomButton';

const SocialSignUpButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };
  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };
  const onSignInAmazon = () => {
    console.warn('onSignInAmazon');
  };

  return (
    <>
      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        fgColor="white"
      />
      <CustomButton
        text="Sign In Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign In Amazon"
        onPress={onSignInAmazon}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignUpButtons;
