import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import Animated, { useSharedValue, useAnimatedStyle, useAnimatedGestureHandler, useDerivedValue, interpolate } from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';



const Swipe = () => {

  const [showYesText, setShowYesText] = useState(false);
  const [showNoText, setShowNoText] = useState(false);
  const [users, setUsers] = useState([]);
  const [cardIndex, setCardIndex] = useState(0); // Initialize with 0 or any starting index
  const { width: screenWidth } = useWindowDimensions();

  useEffect(() => {
    // Fetch data from the API
    fetch('http://127.0.0.1:8000/account/api/users-without-friend-request/')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setUsers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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
          {cardIndex < users.length ? (
            <SwipeCard
              user={users[cardIndex]}
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
