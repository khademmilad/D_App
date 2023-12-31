import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login'
import SignUp from '../screens/SignUp/SignUp'
import NewPassword from '../screens/NewPassword/NewPassword'
import ConfirmEmail from '../screens/ConfirmEmail/ConfirmEmail'
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import Profile from '../screens/Profile/Profile';
import Swipe from '../screens/Swipe/Swipe';


// Define the Stack variable
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Swipe" component={Swipe} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation