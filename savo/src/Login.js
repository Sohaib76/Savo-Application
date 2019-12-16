import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
var { windowWidth } = Dimensions.get('window');

export default class Login extends Component {
    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"
        return (
            // '#A32CA3', '#a928bd', '#c837c8'
            <LinearGradient colors={[JUNGLE,SAGE,LAUREL]} style={styles.linearGradient}>
                {/* <View style={{ flexDirection: 'row', marginTop: 50, alignItems: 'center' }}>
                    <Button full light style={{ marginRight: 50, opacity: 1, alignItems: 'center', textAlign: 'center', width: 150, backgroundColor: '#280b28', borderRadius: 8 }}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Log in </Text>
                    </Button>
                    <Button full
                        onPress={() => {
                            this.props.navigation.navigate('Signup')
                        }}
                        style={{ backgroundColor: '#280b28', width: 150, borderRadius: 8, opacity: 0.5, }}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Sign up </Text>
                    </Button>
                </View> */}
                <TextInput
                    placeholder="Name"
                    placeholderTextColor='#fff'
                    style={{ height: 40, marginTop:80, fontSize:18, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1, }}

                />
                <TextInput
                    placeholder="Email"
                    placeholderTextColor='#fff'
                    keyboardType='email-address'
                    style={{ height: 40, marginTop: 20, fontSize:18,color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1, }}

                />
                <TextInput
                    inlineImageLeft='search_icon'
                    placeholder="Phone Number"
                    keyboardType='phone-pad'
                    placeholderTextColor='#fff'
                    style={{ height: 40, color: '#fff', fontSize:18, marginTop: 20, borderBottomColor: '#fff', borderBottomWidth: 1, }}
                />
                <Button
                onPress={() => {
                            this.props.navigation.navigate('Verification')
                        }}
                 full style={{ borderRadius: 20, marginTop: 15, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#fc5c7d' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Log In</Text></Button>
                  <Button
                onPress={() => {
                            this.props.navigation.navigate('Verification')
                        }}
                 full style={{ borderRadius: 20, marginTop: 15, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#0b84d9' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Sign Up</Text></Button>
                
                <Button full style={{ opacity: 1 }} transparent
                onPress={()=>{
                    this.props.navigation.navigate('ForgetPassword')
                }}
                
                >
                    <Text style={{ marginTop: 30, color: '#fff', fontSize: 12, alignSelf: 'center', fontWeight: '400' }}>Forget Password ? Reset</Text>
                </Button>
                <Text style={{ marginTop: 30, color: '#fff', fontSize: 18, alignSelf: 'center', fontWeight: '400' }}>────────  OR  ────────</Text>
                <Button  full style={{ borderRadius: 20, marginTop: 20, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#3b5998' }}><Text style={{ color: '#fff', fontWeight: '700' }} >
                    <Icon name="facebook-f" size={20} color="#fff" iconStyle={{ marginRight: 40, }} />    Sign in with Facebook </Text></Button>
                <Button full style={{ borderRadius: 20, marginTop: 20, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#ea4335' }}>
                    <Text style={{ color: '#fff', fontWeight: '700' }}>
                        <Icon name="google" size={20} iconStyle={{ marginRight: 40, }} color="#fff" />    Sign in with Google</Text></Button>
            </LinearGradient>
        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        fontSize: 24,
        alignContent: 'center',

    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        marginTop: 20,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
});