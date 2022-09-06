import React, { useEffect } from 'react';
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

const AnimatedCirle = Animated.createAnimatedComponent(Circle)
const { width, height } = Dimensions.get('window');

const CIRCLE_LENGTH = 1000; // 2PI*R
const R = CIRCLE_LENGTH / (2 * Math.PI);

const CircularProgressBar = () => {
    const progress = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
      }));

    useEffect(() => {
        progress.value = withTiming(1, {duration: 2000})
    }, [])  
    return(
        <View style={styles.container}>
            <Svg>
                <Circle 
                    cx={width / 2} 
                    cy={height / 2}
                    r={R}
                    stroke={BACKGROUND_STROKE_COLOR}
                    strokeWidth={30}
                />
                  <AnimatedCirle 
                    cx={width / 2} 
                    cy={height / 2}
                    r={R}
                    stroke={STROKE_COLOR}
                    strokeWidth={15}
                    strokeDasharray={CIRCLE_LENGTH }
                    // strokeDashoffset={CIRCLE_LENGTH * 0.5}
                    animatedProps={animatedProps}
                />
            </Svg>
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
});