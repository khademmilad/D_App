import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import ImageSwipe from '../../../assets/images/swipe.jpg';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';



const Swipe = () => {
  const translateX = useSharedValue(0); // Starting opacity value

  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: translateX.value,
    },
    ],
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: _ => {
      console.log('Touch start')
    },
    onActive: (event) => {
      translateX.value = event.translationX;
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
      <Pressable onPress={() => (translateX.value = withSpring(Math.random()))}>
        <Text>Change value</Text>
      </Pressable>
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
