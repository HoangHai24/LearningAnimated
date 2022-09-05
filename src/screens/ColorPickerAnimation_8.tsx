import React, {useEffect, useCallback, useState} from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import {ColorPicker}  from "../components/ColorPicker";

const COLORS = [
    'red',
    'purple',
    'blue',
    'cyan',
    'green',
    'yellow',
    'orange',
    'black',
    'white',
  ];

  const BACKGROUND_COLOR = 'rgba(0,0,0,0.9)';

const { width } = Dimensions.get('window');

const CIRCLE_SIZE = width * 0.8;
const PICKER_WIDTH = width * 0.9;

const ColorPickerAnimation = () => {
    return(
        <View style={{flex:1, backgroundColor: 'red'}}>
            <View style={styles.topContainer}/>
            <View style={styles.bottomContainer}>
                <ColorPicker 
                    colors={COLORS} 
                    style={styles.gradient}
                    start={{ x: 0, y: 0}}
                    end={{x: 1, y: 0 }}
                />
            </View>
        </View>
    )
}

export default ColorPickerAnimation;
const styles = StyleSheet.create({
    topContainer: {
      flex: 3,
      backgroundColor: "#fff",
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: BACKGROUND_COLOR,
      alignItems: 'center',
      justifyContent: 'center',
    },
    circle: {
      width: CIRCLE_SIZE,
      height: CIRCLE_SIZE,
      borderRadius: CIRCLE_SIZE / 2,
    },
    gradient: { height: 40, width: PICKER_WIDTH, borderRadius: 20 },
  });
  