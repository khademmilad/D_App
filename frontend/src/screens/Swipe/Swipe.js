import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ImageSwipe from '../../../assets/images/swipe.jpg'


const Swipe = () => {
  return (
    <View style={styles.root}>
      <Image source={ImageSwipe} style={[styles.image]} resizeMode='contain' />
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1
    },
    image: {
      width: 250,
      height: 250
    }
})

export default Swipe