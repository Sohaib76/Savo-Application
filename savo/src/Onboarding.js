
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


export default class OnboardingScreen extends Component {
  render() {
    return (
     <Onboarding
    onDone={() => console.log(this.props.navigation.navigate('Login'))}
    onSkip={() => console.log(this.props.navigation.navigate('Login'))}
  pages={[

    {
      backgroundColor: '#fff',
      image: <Text></Text>,
      title: 'What is Savo??',
      subtitle: 'Savo Explanation Here',
    },
    {
      backgroundColor: '#fff',
      image: <Text></Text>,
      title: 'Social Expects',
      subtitle: 'Socail expects here',
    },
    {
      backgroundColor: '#fff',
      image: <Text></Text>,
      title: 'App Features',
      subtitle: 'App Features',
    },
    
  ]}
/>
    );
  }
}
