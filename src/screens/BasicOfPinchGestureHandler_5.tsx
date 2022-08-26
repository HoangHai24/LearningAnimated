import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';
import { PinchGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler } from 'react-native-reanimated';

const imageUrl =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

const {width, height} = Dimensions.get('window')
const BasicOfPinchGestureHandler = () => {
  return (
    <PinchGestureHandler>
        <Animated.Image source={{uri: imageUrl}} style={{flex: 1}} ></Animated.Image>;
    </PinchGestureHandler>
  )
  
};
export default BasicOfPinchGestureHandler;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
