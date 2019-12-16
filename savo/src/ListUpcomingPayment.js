
import React, { Component } from 'react';
import { List, ListItem,Separator,Thumbnail,Card,CardItem,Container, Badge ,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Image,StatusBar,View,Dimensions,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import FooterNav from './FooterNav.js'
import CardGoals from './CardGoals.js'
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle'



export default class ListUpcomingPayment extends Component {
    

// componentDidMount(){
//     StatusBar.setBarStyle( 'light-content',true)
//     StatusBar.setBackgroundColor("#a928bd")
//   }

  static navigationOptions = { header: null };

    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

        const navigation = this.props.navigation
        return (
            
         <ListItem thumbnail>
                    <Left>
                        <ProgressCircle
                            percent={this.props.percentValue}
                            radius={35}
                            borderWidth={8}
                            color="#3399FF"
                            shadowColor="#999"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18 }}>{this.props.percent}</Text>
                        </ProgressCircle>

                    </Left>
                    <Body>
                        <Text>{this.props.topic}</Text>
                        <Text note numberOfLines={2}>You need to deposit {this.props.money} to achive your daily task</Text>
                    </Body>
                    <Right>
                   
                       <TouchableOpacity style={{justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
                        <Text>Deposit</Text>
                        <Icon name="wallet" type="Entypo" style={{color:'black',opacity:1}}/>
                      </TouchableOpacity>
                    
                 
                        
                   </Right>

                    </ListItem>
             


                   

            
            
            
        )




    }
}


