import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import BASE_URL from '../../../config'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'


const ConfirmEmail = () => {
    const [code, setCode] = useState('');

    const onRegisterPressed = () => {
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
    
    const onConfirmPressed = () => {
      console.warn("onConfirmPressed")
    }

    const onResendPressd = () => {
      console.warn("onResendPressd")
    }

    const onSignInPressd = () => {
      console.warn('onSignInPressd')
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email</Text>

        <CustomInput 
          placeholder="Enter your confirmation code" 
          value={code} 
          setValue={setCode}
        />

        <CustomButton
          text="Confirm"
          onPress={onConfirmPressed}
        />

        <CustomButton
          text="Resend code"
          onPress={onResendPressd}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressd}
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
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    text: {
      color: 'gray',
      marginVertical: 10,
    },
    link: {
      color: '#FDB075',
    }
})

export default ConfirmEmail