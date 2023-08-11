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
    name: "Elon Musk 1",
    bio: "1 Elon Musk's biography goes here...",
    imageSource: ImageSwipe,
  },
  {
    name: "Elon Musk 3",
    bio: "2 Elon Musk's biography goes here...",
    imageSource: ImageSwipe,
  },
  // Add more card data objects as needed
];

const Swipe = () => {

  const [showYesText, setShowYesText] = useState(false);
  const [showNoText, setShowNoText] = useState(false);

  const [cardIndex, setCardIndex] = useState(0); // Initialize with 0 or any starting index

  const { width: screenWidth } = useWindowDimensions();

  const translateX = useSharedValue(0); // Starting opacity value
  
  const rotate = useDerivedValue(
    () => interpolate(translateX.value, [0, screenWidth], [0, 60]) + 'deg',
    );

  // CardStyle
  const cardStyle = useAnimatedStyle(() => ({
    transform: [
    {
      translateX: translateX.value,
    },
    {
      rotate: rotate.value,
    },
    {
      scale: interpolate(translateX.value, [-screenWidth, 0, screenWidth], [0.8, 1, 0.8]), // Adjust scale values as needed
    }
    ],
    opacity: interpolate(translateX.value, [-100, 0, 100], [0, 1, 0]), // Adjust opacity values as neededas needed
  }));

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
      setShowYesText(false);
      setShowNoText(false);
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
  
      if (event.translationX > 20) {
        setShowYesText(true);
        setShowNoText(false);
      } else if (event.translationX < -20) {
        setShowYesText(false);
        setShowNoText(true);
      } else {
        setShowYesText(false);
        setShowNoText(false);
      }
    },
    onEnd: (event) => {
      // Reset state and transition to the next card
      setShowYesText(false);
      setShowNoText(false);
  
      const swipeThreshold = screenWidth * 0.2; // 40% of screen width
  
      if (event.translationX > swipeThreshold) {
        console.log("Swipe right: Next card"); // Swiped more than 50% to the right
        setCardIndex((prevIndex) => prevIndex + 1);
      } else if (event.translationX < -swipeThreshold) {
        console.log("Swipe left: Next card"); // Swiped more than 50% to the left
        setCardIndex((prevIndex) => prevIndex + 1);
      }
  
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
              showYesText={showYesText}
              showNoText={showNoText}
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
    width: '80%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Swipe;
