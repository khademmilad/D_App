import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text, Pressable, useWindowDimensions } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import ImageSwipe from '../../../assets/images/swipe.jpg';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, useDerivedValue, interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';



const Swipe = () => {

  const { width: screenWidth } = useWindowDimensions();

  const translateX = useSharedValue(0); // Starting opacity value
  
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, screenWidth], [0, 60]) + 'deg',
    );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: translateX.value,
    },
    {
      rotate: rotate.value,
    }
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: () => {
      console.log('Touch ended')
    }
  })

  return (
    <View style={styles.root}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <SwipeCard
            name="Elon Musk"
            bio="Elon Musk's biography goes here..."
            imageSource={ImageSwipe}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  animatedCard: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Swipe;
