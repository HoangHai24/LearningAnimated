import { StatusBar, View, Text, StyleSheet, Image, Dimensions, ImageBackground } from "react-native";
import React, {useCallback, useEffect, useRef, useState} from "react";
import { GestureHandlerRootView, TapGestureHandler } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withSpring, withTiming } from "react-native-reanimated";

const AnimatedOnDoubleTapLikeInstagram = () => {
    const scale = useSharedValue(1)
    const opacity = useSharedValue(0);
    const doubleTapRef = useRef();

    const rStyle = useAnimatedStyle(() => ({
        transform: 
            [{scale: Math.max(scale.value, 0)}]
        }
    ));
    const rTextStyle = useAnimatedStyle(() => ({
        opacity: opacity.value
    }))
    const onSingleTap = useCallback(() => {
        opacity.value = withTiming(0, undefined, (isFinished) => {
            if(isFinished){
                console.log('isFinished', isFinished)
                opacity.value = withDelay(1000,withTiming(1))
            }
        })
    }, [])
    const onDoubleTap = useCallback(() => {
        scale.value = withSpring(1, undefined, (isFinished) => {
            if(isFinished){
                console.log('isFinished', isFinished)
                scale.value = withDelay(1000,withSpring(0))
            }
        })
    }, [])
    return(
        <GestureHandlerRootView style={styles.container}>
            <TapGestureHandler 
                waitFor={doubleTapRef}
                onActivated={onSingleTap}
            >
                <TapGestureHandler 
                    maxDelayMs={250}
                    ref={doubleTapRef}
                    numberOfTaps={2}
                    onActivated={
                        onDoubleTap
                    }
                >
                    <Animated.View style={{flex: 1}}>
                    <ImageBackground 
                        source={require('../../assets/karsten-winegeart-60GsdOMRFGc-unsplash.jpg')}
                        style={styles.image}
                    >
                        <Animated.Image 
                            source={require('../../assets/heart_1.png')}
                            style={[
                                styles.image,
                                {
                                    shadowOffset: { width: 0, height: 20 },
                                    shadowOpacity: 0.35,
                                    shadowRadius: 35,
                                  },
                                  rStyle
                            ]}
                            resizeMode={'center'}
                        />
                    </ImageBackground>
                    <Animated.Text style={[styles.turtles, rTextStyle]}>
                        🐢🐢🐢🐢
                    </Animated.Text>
                    </Animated.View>
                </TapGestureHandler>
            </TapGestureHandler>
        </GestureHandlerRootView>
    )
}
export default AnimatedOnDoubleTapLikeInstagram;

const {width: SIZE} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: SIZE,
        height: SIZE,
    },
    turtles: { fontSize: 40, textAlign: 'center', marginTop: 30 },

})
// import React, { useCallback, useRef } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   Dimensions,
//   ImageBackground,
//   StatusBar
// } from 'react-native';
// import { TapGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedStyle,
//   useSharedValue,
//   withDelay,
//   withSpring,
//   withTiming,
// } from 'react-native-reanimated';

// const AnimatedImage = Animated.createAnimatedComponent(Image);

// export default function AnimatedOnDoubleTapLikeInstagram() {
//   const scale = useSharedValue(0);
//   const opacity = useSharedValue(1);

//   const doubleTapRef = useRef();

//   const rStyle = useAnimatedStyle(() => ({
//     transform: [{ scale: Math.max(scale.value, 0) }],
//   }));

//   const rTextStyle = useAnimatedStyle(() => ({
//     opacity: opacity.value,
//   }));

//   const onDoubleTap = useCallback(() => {
//     console.log('onDoubleTap');
//     scale.value = withSpring(1, undefined, (isFinished) => {
//       if (isFinished) {
//         scale.value = withDelay(500, withSpring(0));
//       }
//     });
//   }, []);

//   const onSingleTap = useCallback(() => {
//     opacity.value = withTiming(0, undefined, (isFinished) => {
//       if (isFinished) {
//         opacity.value = withDelay(500, withTiming(1));
//       }
//     });
//   }, []);

//   return (
//     <GestureHandlerRootView style={styles.container}>
//       <TapGestureHandler waitFor={doubleTapRef} onActivated={onSingleTap}>
//         <TapGestureHandler
//           maxDelayMs={250}
//           ref={doubleTapRef}
//           numberOfTaps={2}
//           onActivated={onDoubleTap}
//         >
//           <Animated.View>
//             <ImageBackground
//               source={require('../../assets/karsten-winegeart-60GsdOMRFGc-unsplash.jpg')}
//               style={styles.image}
//             >
//               <AnimatedImage
//                 source={require('../../assets/heart.png')}
//                 style={[
//                   styles.image,
//                   {
//                     shadowOffset: { width: 0, height: 20 },
//                     shadowOpacity: 0.35,
//                     shadowRadius: 35,
//                   },
//                   rStyle,
//                 ]}
//                 resizeMode={'center'}
//               />
//             </ImageBackground>
//             <Animated.Text style={[styles.turtles, rTextStyle]}>
//               🐢🐢🐢🐢
//             </Animated.Text>
//           </Animated.View>
//         </TapGestureHandler>
//       </TapGestureHandler>
//     </GestureHandlerRootView>
//   );
// }

// const { width: SIZE } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: SIZE,
//     height: SIZE,
//   },
//   turtles: { fontSize: 40, textAlign: 'center', marginTop: 30 },
// });