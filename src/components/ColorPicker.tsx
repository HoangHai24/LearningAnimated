import React from 'react';
import {Dimensions, View, StyleSheet, Text} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import LinearGradient, {LinearGradientProps} from 'react-native-linear-gradient';
import { PanGestureHandler, PinchGestureHandlerGestureEvent, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const Size = width * 0.7;
interface ColorPickerProps extends LinearGradientProps{
    colors: string[];
}

const ColorPicker: React.FC<ColorPickerProps> = ({colors, start, end, style}) => {

    const translateX = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent
  >({
    onStart: (_, context) => {

    },
    onActive: (event, context) => {
      translateX.value = event.translationX 
    },
    onEnd: () => {

    },
  });
  const rStyle = useAnimatedStyle(() => {
    return{
        transform: [{ translateX: translateX.value}]
    }
  })
  return (
    // <View style={{width: 50, height: 50, backgroundColor: 'blue'}}></View>
    <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View>
            <LinearGradient 
                colors={colors}
                style={style}
                start={start}
                end={end}
            />
            <Animated.View style={[styles.picker]}>
                <Animated.View
                style={[styles.internalPicker]}
                />
            </Animated.View>
        </Animated.View>
    </PanGestureHandler>
  );
};
export  {ColorPicker};

const CIRCLE_PICKER_SIZE = 45;
const INTERNAL_PICKER_SIZE = CIRCLE_PICKER_SIZE / 2;

const styles = StyleSheet.create({
    picker: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: CIRCLE_PICKER_SIZE,
        height: CIRCLE_PICKER_SIZE,
        borderRadius: CIRCLE_PICKER_SIZE / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      internalPicker: {
        width: INTERNAL_PICKER_SIZE,
        height: INTERNAL_PICKER_SIZE,
        borderRadius: INTERNAL_PICKER_SIZE / 2,
        borderWidth: 1.0,
        borderColor: 'rgba(0,0,0,0.2)',
      },
});
