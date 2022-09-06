import React from "react";
import {View, Text, StyleSheet} from 'react-native';

import Page5, {PAGE_WIDTH} from "../components/Page_5";

import {
    GestureHandlerRootView,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
  } from 'react-native-gesture-handler';
  import Animated, {
    cancelAnimation,
    useAnimatedGestureHandler,
    useDerivedValue,
    useSharedValue,
    withDecay,
  } from 'react-native-reanimated';

const titles = ["What's", 'up', 'mobile', 'devs?'];
type ContextType = {
    x: number;
  };

const MAX_TRANSLATE_X = -PAGE_WIDTH * (titles.length - 1);

const ScrollViewFromScratchWithPanGestureHandler = () => {
    const translateX = useSharedValue(0)
    const clampedTranslateX = useDerivedValue(() => {
        return Math.max(Math.min(translateX.value, 0), MAX_TRANSLATE_X);
      });

    const panGestureHandler = useAnimatedGestureHandler<PanGestureHandlerGestureEvent, ContextType>({
        onStart: (_, context) => {
            context.x = translateX.value;
            cancelAnimation(translateX)
        },
        onActive: (event, context) => {
            // console.log(event.translationX)
            translateX.value = event.translationX + context.x;
        },
        onEnd: (event) => {
            translateX.value = withDecay({velocity: event.velocityX})
        }
    })
    return (
        <GestureHandlerRootView style={styles.container}>  
            <PanGestureHandler onGestureEvent={panGestureHandler}>
                <Animated.View style={{ flex: 1, flexDirection: 'row' }}>
                    {titles.map((title, index) => {
                        return (
                            <Page5
                                key={index.toString()}
                                index={index}
                                title={title}
                                translateX={clampedTranslateX}
                            />
                        );
                    })}
                </Animated.View>
            </PanGestureHandler>
        </GestureHandlerRootView>
    )
}
export default ScrollViewFromScratchWithPanGestureHandler;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });