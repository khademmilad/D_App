import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.jpg'
import CustomInput from '../../components/CustomInput/CustomInput'

const Login = () => {
    const {height} = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />

      <CustomInput />
      <CustomInput />
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        maxWidth: 200,
        height: 200,
    }
})

export default Login