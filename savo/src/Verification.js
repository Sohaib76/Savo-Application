import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableHighlight, Alert, Dimensions } from 'react-native'
import { Button, Row } from 'native-base'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
var { windowWidth } = Dimensions.get('window');

export default class Login extends Component {
    render() {

        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

        return (
            // '#302ca3', '#6a2ca3', '#A32CA3'
            <LinearGradient colors={[JUNGLE, SAGE, LAUREL]} style={styles.linearGradient}>
            <View
            style={{ flex:1, flexDirection:"column", justifyContent:'center',}}>
            <View>
            <Text style={{ color: '#fff', fontWeight: '400', alignSelf:'center', fontSize:32,marginTop:15 }}>Verification </Text>
            <Text style={{ color: '#fff', fontWeight: '200', alignSelf:'center', fontSize:18,marginTop:15  }}>Please type The Verficatiom Code Here </Text>
            <Text style={{ color: '#fff', fontWeight: '200', alignSelf:'center', fontSize:18 ,marginTop:15 }}>Send to your number +923**************</Text>
            </View>
            <View style={{ flex: 0, flexDirection: 'row', height:100,marginTop:30 }}>
                    <TextInput
                        maxLength={1}
                        keyboardType='phone-pad'
                        //#e9afe9
                        style={{ height: 40, width: 50, marginLeft: 20, color: '#000', fontSize: 18, backgroundColor: '#86be71', }}
                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='phone-pad'
                        style={{ height: 40, width: 50, marginLeft: 20, color: '#000', fontSize: 18, backgroundColor: '#86be71', }}
                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='phone-pad'
                        style={{ height: 40, width: 50, marginLeft: 20, color: '#000', fontSize: 18, backgroundColor: '#86be71', }}
                    />
                    <TextInput
                        maxLength={1}
                        keyboardType='phone-pad'
                        style={{ height: 40, width: 50, marginLeft: 20, color: '#000', fontSize: 18, backgroundColor: '#86be71', }}
                    />
                </View>
              <View style={{marginTop:30}}>
                     <Button 
                        onPress={() => {
                            this.props.navigation.navigate('Main')
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