
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Card,CardItem,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions} from 'react-native';

export default class FooterNav extends Component {
    

componentDidMount(){
    StatusBar.setBarStyle( 'light-content',true)
    StatusBar.setBackgroundColor("#a928bd")
  }

  static navigationOptions = { header: null };

    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"


        return (
            // '#682cbe'
                <Footer >
                    <FooterTab style={{ backgroundColor:  JUNGLE}}>
                        <Button onPress={()=> {this.props.navigation.navigate("Home")}}>

                            <Icon name="home" style={{color:'white'}}/>
                            <Text>Dashboard</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: JUNGLE }}>
                        <Button onPress={()=> {this.props.navigation.navigate("Search")}}>
                            <Icon name="search" style={{color:'white'}}/>
                            <Text>Search</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={{ backgroundColor: JUNGLE }}>
                        <Button onPress={()=> {this.props.navigation.navigate("Profile")}}>
                            <Icon name="contact" style={{color:'white'}}/>
                            <Text>Profile</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            
            
        )




    }
}


