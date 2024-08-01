import React from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

function Error() {
  return (
    <LottieView
      source={require('../../assets//error.json')}
      style={{width: '100%', height: '100%'}}
      autoPlay
    />
  );
}

export default Error;
