import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput/CustomInput'
import CustomButton from '../../components/CustomButton/CustomButton'
import BASE_URL from '../../../config'
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const navigation = useNavigation();

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
          navigation.navigate('ConfirmEmail');
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
    
    const onSignInPress = () => {
      console.warn("Sign In")

      navigation.navigate('SignIn');


    }

    <SocialSignInButtons/>

    const onTermsOfUsePressed = () => {
      console.warn('onTermsOfUserPressd');
    }

    const onPrivacyPressed = () => {
      console.warn('onPrivacyPressed');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>

        <CustomInput 
          placeholder="Email" 
          value={email} 
          setValue={setEmail}
        />

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

        <CustomInput 
          placeholder="Repeat Password" 
          value={password2} 
          setValue={setPassword2}
          secureTextEntry={true}
        />

        <CustomButton
          text="Register"
          onPress={onRegisterPressed}
        />

        <Text style={styles.text}>
          By registering, you confirm that you accept out<Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of Use</Text> and <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPress}
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

export default SignUp