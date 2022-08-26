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
import Intro from './src/screens/Intro_1';
import BasicOfPanGestureHandler from './src/screens/BasicOfPanGestureHandler_2';
import InterpolateWithScrollView from './src/screens/InterpolateWithScrollView_3';
import InterpolateColors from './src/screens/InterpolateColors_4';
import BasicOfPinchGestureHandler from './src/screens/BasicOfPinchGestureHandler_5';

const App = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <BasicOfPinchGestureHandler />
    </View>
  );
};

export default App;
