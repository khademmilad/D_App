import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import SwipeCard from '../../components/SwipeCard/SwipeCard';
import ImageSwipe from '../../../assets/images/swipe.jpg';

const { width, height } = Dimensions.get('window');

const Swipe = () => {
  return (
    <View style={styles.root}>
      <SwipeCard
        name="Elon Musk"
        bio="Elon Musk's biography goes here..."
        imageSource={ImageSwipe}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
});

export default Swipe;
