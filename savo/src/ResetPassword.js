import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Button, Row } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ResetPassword extends Component {
    render() {

        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

        return (
            <LinearGradient colors={[JUNGLE, SAGE, LAUREL]} style={styles.linearGradient}>
            <View
            style={{ flex:1, flexDirection:"column", justifyContent:'center', width:'100%'}}>
            <View>
            <Text style={{ color: '#fff', fontWeight: '400', alignSelf:'center', fontSize:32,marginTop:15 }}>Reset Password </Text>
            </View>
            <View style={{ marginTop:30 }}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder="Enter Verification Code"
                        style={{  color: '#000', fontSize: 18, backgroundColor: '#e9afe9'}}
                    />
                </View>
            <View style={{ marginTop:30 ,  }}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder="New Password"
                        style={{  color: '#000', fontSize: 18, backgroundColor: '#e9afe9'}}
                    />
                </View>
            <View style={{ marginTop:30 ,  }}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder="Type Password again"
                        style={{  color: '#000', fontSize: 18, backgroundColor: '#e9afe9'}}
                    />
                </View>
              <View style={{marginTop:30}}>
                     <Button 
                     onPress={() => {
                         this.props.navigation.navigate('Login')
                     }}
                     full style={{ borderRadius: 20, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#fc5c7d' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Submit</Text></Button>
             </View>
         

            </View>
            </LinearGradient>

        )
    }
}

var styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',   
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        height:'80%',
        fontSize: 24,

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