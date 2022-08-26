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
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, withRepeat, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

const SIZE = 100;
const CIRCLE_RADIUS = SIZE * 1.5;


type ContextType = {
    translateX: number,
    translateY: number,

}

const BasicOfPanGestureHandler = () => {
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);

    const panGestureEvent = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (event, context) => {
            console.log('panGestureEvent_onStart')
            context.translateX = translateX.value;
            context.translateY = translateY.value;
        },
        onActive: (event, context) => {
            translateX.value = event.translationX + context.translateX;
            translateY.value = event.translationY + context.translateY;

            console.log('panGestureEvent', event.translationX)
        },
        onEnd: (event) => {
            const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2)
            if(distance < CIRCLE_RADIUS){
                translateX.value = withSpring(0);
                translateY.value = withSpring(0);
            }
        }
    })

    const rStyle = useAnimatedStyle(() => {
        return{
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    translateY: translateY.value,
                }
            ]
        }
    })

    const backToFirst = () => {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
    }
  return (
    <View style={styles.cirle}>
        <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View 
                style={[styles.square, rStyle]}
            />
        </PanGestureHandler>
    </View>
   
  );
};


export default BasicOfPanGestureHandler;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    square: {
        width: SIZE,
        height: SIZE,
        backgroundColor: 'blue',
        opacity: 0.6,
        borderRadius: 20
    },
    cirle: {
        width: CIRCLE_RADIUS * 2,
        height: CIRCLE_RADIUS * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: CIRCLE_RADIUS,
        borderWidth: 5,
        borderColor: 'rgba(0,0,256,0.5)'
    }
})
