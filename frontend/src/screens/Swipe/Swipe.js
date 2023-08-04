import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import ImageSwipe from '../../../assets/images/swipe.jpg'


const Swipe = () => {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <ImageBackground source={ImageSwipe} style={[styles.image]} resizeMode='contain'>
          <Text style={styles.name}>Elon Musk</Text>
          <Text style={styles.bio}>Elon Musk</Text>
        </ImageBackground>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  card: {
    width: '83%',
    height: '70%',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 24,
  }
})

export default Swipe