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
import Intro from './src/screens/01_Intro';
import BasicOfPanGestureHandler from './src/screens/02_BasicOfPanGestureHandler';
import InterpolateWithScrollView from './src/screens/03_InterpolateWithScrollView';
import InterpolateColors from './src/screens/04_InterpolateColors';
import BasicOfPinchGestureHandler from './src/screens/05_BasicOfPinchGestureHandler';
import AnimatedOnDoubleTapLikeInstagram from './src/screens/06_AnimatedOnDoubleTapLikeInstagram';
import ScrollViewFromScratchWithPanGestureHandler from './src/screens/07_ScrollViewFromScratchWithPanGestureHandler';
import ColorPickerAnimation from './src/screens/08_ColorPickerAnimation';
import CircularProgressBar from './src/screens/09_CircularProgressBar';

const App = () => {
  return (
    // <View style={{flex: 1, backgroundColor: 'red'}}>
      <CircularProgressBar />
    // </View>
  );
};

export default App;
