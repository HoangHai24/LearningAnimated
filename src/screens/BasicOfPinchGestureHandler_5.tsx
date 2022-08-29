import React, { useEffect } from 'react';
import {View, Text, StyleSheet, Image, Dimensions, ImageBackground} from 'react-native';
import { GestureDetector, GestureHandlerRootView, PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const imageUrl =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';
const AnimatedImage = Animated.createAnimatedComponent(Image)
const {width, height} = Dimensions.get('window')

const BasicOfPinchGestureHandler = () => {
  const scale = useSharedValue(1)
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);

  const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
    onActive: (event) => {
      console.log(event)
      scale.value = event.scale;
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withTiming(1)
    }
  })
 const rstyle = useAnimatedStyle(() => {
  return {
    transform: [
      {translateX: focalX.value},
      {translateY: focalY.value},
      {translateX: -width / 2},
      {translateY: -height / 2},
      {scale: scale.value},
      {translateX: -focalX.value},
      {translateY: -focalY.value},
      {translateX: width / 2},
      {translateY: height / 2},
    ]
  }
 })
 const focalPointStyle = useAnimatedStyle(() => {
  return{
    transform: [
      {
        translateX: focalX.value
      },
      {
        translateY: focalY.value
      }
    ]
  }
 })
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PinchGestureHandler onGestureEvent={pinchHandler}>
        <Animated.View style={{flex: 1}}>
            <AnimatedImage source={{uri: imageUrl}} style={[{flex: 1}, rstyle]} />
            <Animated.View style={[styles.focalPoint, focalPointStyle]}/>
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  )
};
export default BasicOfPinchGestureHandler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focalPoint: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 20
  }
});
// import React from 'react';
// import { StyleSheet, Image, Dimensions } from 'react-native';
// import {
//   GestureHandlerRootView,
//   PinchGestureHandler,
//   PinchGestureHandlerGestureEvent,
// } from 'react-native-gesture-handler';
// import Animated, {
//   useAnimatedGestureHandler,
//   useAnimatedStyle,
//   useSharedValue,
//   withTiming,
// } from 'react-native-reanimated';

// const imageUri =
//   'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';

// const AnimatedImage = Animated.createAnimatedComponent(Image);

// const { width, height } = Dimensions.get('window');

// export default function BasicOfPinchGestureHandler() {
//   const scale = useSharedValue(1);
//   const focalX = useSharedValue(0);
//   const focalY = useSharedValue(0);

//   const pinchHandler =
//     useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
//       onActive: (event) => {
//         console.log(event)
//         scale.value = event.scale;
//         focalX.value = event.focalX;
//         focalY.value = event.focalY;
//       },
//       onEnd: () => {
//         scale.value = withTiming(1);
//       },
//     });

//   const rStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         { translateX: focalX.value },
//         { translateY: focalY.value },
//         { translateX: -width / 2 },
//         { translateY: -height / 2 },
//         { scale: scale.value },
//         { translateX: -focalX.value },
//         { translateY: -focalY.value },
//         { translateX: width / 2 },
//         { translateY: height / 2 },
//       ],
//     };
//   });

//   const focalPointStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateX: focalX.value }, { translateY: focalY.value }],
//     };
//   });

//   return (
//     // <GestureHandlerRootView style={{ flex: 1 }}>
//       <PinchGestureHandler onGestureEvent={pinchHandler}>
//         {/* <Animated.View style={{ flex: 1 }}> */}
//           <AnimatedImage
//             style={[{ flex: 1 }, rStyle]}
//             source={{ uri: imageUri }}
//           />
//           <Animated.View style={[styles.focalPoint, focalPointStyle]} />
//         {/* </Animated.View> */}
//       </PinchGestureHandler>
//     // </GestureHandlerRootView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   focalPoint: {
//     ...StyleSheet.absoluteFillObject,
//     width: 20,
//     height: 20,
//     backgroundColor: 'blue',
//     borderRadius: 10,
//   },
// });