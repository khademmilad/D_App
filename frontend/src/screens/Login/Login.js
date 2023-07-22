import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import BASE_URL from '../../../config'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
      // Prepare the data to be sent to the API
      const data = {
        email: email,
        password: password,
      };

      // Make the API request using the Fetch API
      fetch('http://127.0.0.1:8000/account/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => {
          // Check if the response status is OK (200)
        if (response.ok) {
          console.warn('Login successful'); // Display success message in console
          // You can also handle redirection to another screen upon successful login if needed
        } else {
          console.warn('Login failed'); // Display failure message in console
          // Handle the case of unsuccessful login (e.g., show an error message to the user)
        }
      })
      .catch(error => {
        console.error('Error occurred:', error);
      })
        console.warn("sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password")
    }
    
    const onSignInGoogle = () => {
      console.warn("Sign in with Google")
    }

    const onSignUpPress = () => {
      console.warn("Sign up")
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />

        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail}
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

        <CustomButton
          text="Sign In with Google"
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
          onPress={onSignInGoogle}
        />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        />

      </View>
    </ScrollView>
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