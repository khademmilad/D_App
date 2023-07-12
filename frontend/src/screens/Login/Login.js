import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password")
    }
  return (
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />

      <CustomInput 
        placeholder="Username" 
        value={username} 
        setValue={setUsername}
      />
      <CustomInput 
        placeholder="Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
      />
      <CustomButton
        text="Sign In"
        onPress={onSignInPressed}
      />
      <CustomButton
        text="Forgot Password?"
        onPress={onForgotPasswordPressed}
        type="TERTIARY"
      />
    </View>
  )
}

const styles = StyleSheet.create({
    root : {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        maxWidth: 250,
        height: 250,
    }
})

export default Login