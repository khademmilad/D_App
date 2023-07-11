import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder='placeholder' style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,

        // paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
    width: '100%',
    height: 40,
    borderColor: '#e8e8e8',
    paddingHorizontal: 10,
    },
})

export default CustomInput