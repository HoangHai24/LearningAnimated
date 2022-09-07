import React, { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import { useDerivedValue } from 'react-native-reanimated';
import { ReText } from 'react-native-redash';

import Svg, { Circle } from 'react-native-svg';

const BACKGROUND_COLOR = '#444B6F';
const BACKGROUND_STROKE_COLOR = '#303858';
const STROKE_COLOR = '#A6E1FA';

const AnimatedCircle = Animated.createAnimatedComponent(Circle)
const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const arrRank = [0, 10, 30, 70, 90, 100];

const CircularProgressBar = () => {
    const progress = useSharedValue(0);
    const progressSecond = useSharedValue(0);
    const [increase, setIncrease] = useState(arrRank[0] / 100);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
      }));

    const progressText = useDerivedValue(() => {
      console.log('in useDerivedValue');
      return `${Math.floor(progress.value * 100)}%`;
    });

    const progressReVal = useDerivedValue(() => {
      switch (increase) {
        case 1:
          return Math.floor(progress.value * 100);
        default:
          break;
      }
      return `${Math.floor(progress.value * 100)}%`;
    }, [increase]);

    useEffect(() => {
        progress.value = withTiming(arrRank[increase] / 100, {duration: 2000});
        // progressSecond.value = withTiming(1, {duration: 2000});
    }, [increase]);

    const increaseRank = () => {
        setIncrease(increase + 1)
    } 
    const decreaseRank = () => {
      setIncrease(increase - 1)
    }
    return(
        <View style={styles.container}>
            <ReText style={styles.progressText} text={progressText} />
            <Svg style={{ position: 'absolute' }}>
              <Circle
                cx={width / 2}
                cy={height / 2}
                r={R}
                stroke={BACKGROUND_STROKE_COLOR}
                strokeWidth={30}
            />
              <AnimatedCircle
                cx={width / 2}
                cy={height / 2}
                r={R}
                stroke={STROKE_COLOR}
                strokeWidth={15}
                strokeDasharray={CIRCLE_LENGTH}
                animatedProps={animatedProps}
                strokeLinecap={'round'}
              />
            </Svg>
            <TouchableOpacity onPress={increaseRank} style={styles.button}>
              <Text style={styles.buttonText}>Increase</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={decreaseRank} style={[styles.button, {bottom: 30}]}>
              <Text style={styles.buttonText}>Decrease</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CircularProgressBar;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    progressText: {
      fontSize: 80,
      color: 'rgba(256,256,256,0.7)',
      width: 200,
      textAlign: 'center',
    },
    button: {
      position: 'absolute',
      bottom: 100,
      width: width * 0.7,
      height: 60,
      backgroundColor: BACKGROUND_STROKE_COLOR,
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 25,
      color: 'white',
      letterSpacing: 2.0,
    },
});