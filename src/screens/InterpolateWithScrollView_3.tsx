import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  useAnimatedScrollHandler,
  event,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {Page} from '../components/Page_3';

const SIZE = 100;
const WORDS = ["What's", 'up', 'mobile', "dev's"];

// type ContextType = {
//     translateX: number,
//     translateY: number,
// }
const {width, height} = Dimensions.get('window');

const InterpolateWithScrollView = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    console.log(event.contentOffset.x, width);
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      pagingEnabled
      horizontal
      style={styles.container}
      scrollEventThrottle={16}>
      {WORDS.map((title, index) => {
        return (
          <Page
            key={index.toString()}
            title={title}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default InterpolateWithScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
