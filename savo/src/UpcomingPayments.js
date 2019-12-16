
import React, { Component } from 'react';
import { List, ListItem,Separator,Thumbnail,Card,CardItem,Container, Badge ,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Image,StatusBar,View,Dimensions,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import FooterNav from './FooterNav.js'
import CardGoals from './CardGoals.js'
import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle'
import ListUpcomingPayment from './ListUpcomingPayment';


export default class UpcomingPayments extends Component {
    

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
            
              <Container>
               {/* '#682cbe'  */}
                <Header style={{ backgroundColor: JUNGLE }}>
                    <Left>
                        <Button bage transparent 
                            onPress={() => {
                                navigation.navigate("Home");
                            }}
                        >
                            <Icon name='back' type={'AntDesign'} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Payments</Title>
                    </Body>
                    <Right />
                </Header>


                {/* <LinearGradient style={{flex:1}} colors={['#302ca3', '#6a2ca3', '#A32CA3']}> */}
                <Content> 
                    
                    <List style={{backgroundColor:'white'}}>
                        <ListUpcomingPayment money={"$1.81"} 
                        percentValue={25} percent={'25%'} topic={'Wedding Savings'}
                        />
                      

                        <ListUpcomingPayment money={"$4.44"} 
                        percentValue={20} percent={'20%'} topic={'Island Picnic'}
                        />
                      

                        <ListUpcomingPayment money={"$21.09"} 
                        percentValue={14} percent={'14%'} topic={'Home Purchase'}
                        />
                     

                        {/* <ListItem>
                        <Text>Total Amount : $ {1.81+4.44+21.09}</Text>

                        <Right> 
                        <Button transparent>
                         <Text>Deposit Now</Text>
                        </Button>
                      </Right>
                       
                        </ListItem> */}

                  </List>

               
                   


                </Content>

                 {/* </LinearGradient> */}


                


                  
               

                 <FooterNav navigation={navigation}/>
            </Container>
            
            
            
        )




    }
}


