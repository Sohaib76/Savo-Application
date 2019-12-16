import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Button, Row } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ForgetPassword extends Component {
    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"
        return (
            // '#A32CA3', '#a928bd', '#c837c8'
            <LinearGradient colors={[JUNGLE,SAGE,LAUREL]} style={styles.linearGradient}>
            <View
            style={{ flex:1, flexDirection:"column", justifyContent:'center', width:'100%'}}>
            <View>
            <Text style={{ color: '#fff', fontWeight: '400', alignSelf:'center', fontSize:32,marginTop:15 }}>Forget Password </Text>
            <Text style={{ color: '#fff', fontWeight: '200', alignSelf:'center', fontSize:18,marginTop:15  }}>Please Input Your registered  Number</Text>
            <Text style={{ color: '#fff', fontWeight: '200', alignSelf:'center', fontSize:18 ,marginTop:15 }}> You will recieve a verifiation code </Text>
            </View>
            <View style={{ marginTop:30 ,}}>
                    <TextInput
                        keyboardType='phone-pad'
                        placeholder="Phone Number"
                        style={{  color: '#000', fontSize: 18, backgroundColor: '#e9afe9'}}
                    />
                </View>
              <View style={{marginTop:30}}>
                     <Button full 
                     onPress={()=>{
                    this.props.navigation.navigate('ResetPassword')
                }}
                style={{ borderRadius: 20, opacity: 0.8, backgroundColor: '#782178', backgroundColor: '#fc5c7d' }}><Text style={{ color: '#fff', fontWeight: '700' }}>Send</Text></Button>
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