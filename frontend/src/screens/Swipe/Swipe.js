import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import ImageSwipe from '../../../assets/images/swipe.jpg';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, useAnimatedGestureHandler } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';


const Swipe = () => {
  const sharedValue = useSharedValue(1); // Starting opacity value

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: sharedValue.value * 100,
    },
    ],
  }));

  const changeOpacity = () => {
    sharedValue.value = Math.random();
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_) => {
      console.warn('Touch start')
    },
    onActive: (event) => {
      console.log('Touch x', event.translationX)
    },
    onEnd: () => {
      console.warn('Touch ended')
    }
  })

  return (
    <View style={styles.root}>
      <PanGestureHandler gestureHandler={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          <SwipeCard
            name="Elon Musk"
            bio="Elon Musk's biography goes here..."
            imageSource={ImageSwipe}
          />
        </Animated.View>
      </PanGestureHandler>
      <Pressable onPress={() => (sharedValue.value = withSpring(Math.random()))}>
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
