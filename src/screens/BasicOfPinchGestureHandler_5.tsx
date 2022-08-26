import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const imageUrl =
  'https://www.youtube.com/watch?v=R7vyLItMQJw&list=PLjHsmVtnAr9TWoMAh-3QMiP7bPUqPFuFZ&index=5&ab_channel=Reactiive';

const BasicOfPinchGestureHandler = () => {
  return <Image source={{uri: imageUrl}} style={{flex: 1}}></Image>;
};
export default BasicOfPinchGestureHandler;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
