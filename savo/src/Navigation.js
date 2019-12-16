import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import OnboardingScreen from './Onboarding'
import Login from './Login'
import Splash from './SplashScreen'
import Signup from './Signup'
import Verification from './Verification'
import ResetPassword from './ResetPassword'
import ForgetPassword from './ForgetPassword'
import Main from './Main'





const Navigation = createStackNavigator({
    Splash: { screen: Splash }, 
    Login: { screen: Login }, 
    ForgetPassword: { screen: ForgetPassword }, 
    Verification: { screen: Verification }, 
    Main: { screen: Main }, 
    ResetPassword: { screen: ResetPassword }, 
    Onboard: { screen: OnboardingScreen }, 
    Signup: { screen: Signup }, 
        },{
            headerMode: 'none',
            navigationOptions: {
                headerVisible: false,
            }        }
);
export default createAppContainer(Navigation)
