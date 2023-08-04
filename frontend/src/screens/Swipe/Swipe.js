import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import ImageSwipe from '../../../assets/images/swipe.jpg'

const { width, height } = Dimensions.get('window');

const Swipe = () => {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <ImageBackground source={ImageSwipe} style={styles.image} resizeMode='cover'>
          <View style={styles.cartInner} >
            <View style={styles.textContainer}>
              <Text style={styles.name}>Elon Musk</Text>
              <Text style={styles.bio}>Elon Musk's biography goes here...</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: width * 0.9,
    height: height * 0.6,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  cartInner:{
    padding: 10,
    backgroundColor: 'red'
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  name: {
    fontSize: 0.05 * width, // Adjust font size based on screen width
    color: 'white',
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 0.04 * width, // Adjust font size based on screen width
    color: 'white',
    lineHeight: 24,
  }
})

export default Swipe
