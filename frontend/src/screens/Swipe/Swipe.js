import 'react-native-gesture-handler';
import React, { useState } from 'react'; // Import useState
import { View, StyleSheet, Text, Pressable, useWindowDimensions } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import ImageSwipe from '../../../assets/images/swipe.jpg';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, useDerivedValue, interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';


const cardData = [
  {
    name: "Elon Musk",
    bio: "Elon Musk's biography goes here...",
    imageSource: ImageSwipe,
  },
  {
    name: "Elon Musk 2",
    bio: "Elon Musk's biography goes here...",
    imageSource: ImageSwipe,
  },
  {
    name: "Elon Musk 3",
    bio: "Elon Musk's biography goes here...",
    imageSource: ImageSwipe,
  },
  // Add more card data objects as needed
];

const Swipe = () => {

  const [cardIndex, setCardIndex] = useState(0); // Initialize with 0 or any starting index

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
    onEnd: (event) => {
      if (event.translationX > 0) {
        // Swiped right
        console.log('Yes');
      } else {
        // Swiped left
        console.log("No");
      }
      setCardIndex((prevIndex) => prevIndex + 1);

      // Reset translateX value for the next card
      translateX.value = 0;

    },
  });

  return (
    <View style={styles.root}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
          {cardIndex < cardData.length ? (
            <SwipeCard
              name={cardData[cardIndex].name}
              bio={cardData[cardIndex].bio}
              imageSource={cardData[cardIndex].imageSource}
            />
          ) : null}
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
