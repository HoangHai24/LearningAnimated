import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat } from 'react-native-reanimated';

const SIZE = 100;

const handleRotation = (progress:  Animated.SharedValue<number>) => {
  'worklet';
  return  `${progress.value * 2 * Math.PI}rad`
}
const Intro = () => {
  const progress = useSharedValue(1)
  const scale = useSharedValue(2);

  const reanimatedStyle = useAnimatedStyle(() => {
    return{
      opacity: progress.value,
      borderRadius: progress.value * SIZE /2,
      transform: [
        {scale: scale.value}, 
        {rotate: handleRotation(progress)}
      ]
    }
  }, [])

  useEffect(() => {
    progress.value = withRepeat(withSpring(0.5), 10, true);
    scale.value = withRepeat(withSpring(1), 10, true);
  }, [])
  return (
      <Animated.View 
        style={[{height: SIZE, width: SIZE, backgroundColor: 'blue'}, reanimatedStyle]}
      />
  );
};


export default Intro;
