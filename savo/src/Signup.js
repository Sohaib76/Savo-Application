import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert } from 'react-native'
import { Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

        
        // '#A32CA3', '#a928bd', '#c837c8'
        return (
            <LinearGradient colors={[JUNGLE, SAGE, LAUREL]} style={styles.linearGradient}>
                <View style={{ flexDirection:'row', marginTop:50, alignItems:'center'}}>
                    <Button full light 
                    onPress={() => {
                            this.props.navigation.navigate('Login')
                        }}
                    style={{marginRight:50,opacity:0.5, alignItems:'center',textAlign:'center',  width: 150, backgroundColor: '#280b28', borderRadius:8 }}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Log in </Text>
                    </Button>
                    <Button full style={{ backgroundColor: '#280b28',width: 150, borderRadius:8, opacity: 1,}}>
                        <Text style={{ color: '#fff', fontWeight: '700' }}>Sign up </Text>
                    </Button>
                </View>
                <View style={{marginTop:100, width:'90%', alignItems:'center', flex:1}}>

                <TextInput
                    placeholder="Name"
                    placeholderTextColor='#fff'
                    style={{ height: 40, marginTop: 20, fontSize:18, color: '#fff', borderBottomColor: '#fff', borderBottomWidth: 1,  width:'100%'}}

                />
                <TextInput
                block
                    placeholder="Email"
                    placeholderTextColor='#fff'
                    keyboardType='email-address'
                    style={{ height: 40, marginTop: 20, color: '#fff', fontSize:18, borderBottomColor: '#fff', borderBottomWidth: 1, width:'100%' }}

                />
                <TextInput
                    placeholder="Phone Number"
                    keyboardType='phone-pad'
                    placeholderTextColor='#fff'
                    style={{ height: 40, color: '#fff', marginTop: 20, fontSize:18, borderBottomColor: '#fff', borderBottomWidth: 1, width:'100%' }}
                />
                <Button 
                onPress={() => {
                            this.props.navigation.navigate('Verification')
                        }}
                full style={{ borderRadius: 20, marginTop: 15, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#fc5c7d' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Sign In</Text></Button>
                </View>
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