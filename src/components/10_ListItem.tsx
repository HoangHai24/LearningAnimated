import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  PanGestureHandlerProps,
} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { TaskInterface } from '../screens/10_SwipeToDelete';

const LIST_ITEM_HEIGHT = 70;
const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

interface listItemProps{
    task: TaskInterface
}
const ListItem: React.FC<listItemProps>  =({task}) => {
    return(
        <View style={styles.taskContainer}>
            <PanGestureHandler>
                <Animated.View>
                    <Text style={[styles.taskTitle]}>
                        {task.title}
                    </Text>
                </Animated.View>
            </PanGestureHandler>
        </View>
    )
}
export default ListItem;

const styles = StyleSheet.create({
    taskContainer: {
      width: '100%',
      alignItems: 'center',
    },
    task: {
      width: '90%',
      height: LIST_ITEM_HEIGHT,
      justifyContent: 'center',
      paddingLeft: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      // Shadow for iOS
      shadowOpacity: 0.08,
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowRadius: 10,
      // Shadow for Android
      elevation: 5,
    },
    taskTitle: {
      fontSize: 16,
    },
    iconContainer: {
      height: LIST_ITEM_HEIGHT,
      width: LIST_ITEM_HEIGHT,
      position: 'absolute',
      right: '10%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });