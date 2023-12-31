import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/images/logo.png'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import BASE_URL from '../../../config'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/actions/authActions';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

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
          dispatch(loginSuccess(csrfToken));
          console.log('csrftoken', csrfToken);
          console.warn('Login successful'); // Display success message in console

          // You can also handle redirection to another screen upon successful login if needed
          navigation.navigate('Profile');

        } else {
          console.warn('Login failed'); // Display failure message in console
          // Handle the case of unsuccessful login (e.g., show an error message to the user)

          navigation.navigate('Swipe')
        }
      })
      .catch(error => {
        console.error('Error occurred:', error);
      })
        console.warn("sign in")
    }

    const onForgotPasswordPressed = () => {
        console.warn("Forgot password")

        navigation.navigate('ForgotPassword');
    }
    
    const onSignUpPress = () => {
      console.warn("Sign up")

      navigation.navigate('SignUp');
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

        <SocialSignInButtons />

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