
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Card,CardItem,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import { Divider } from 'react-native-elements';
import FooterNav from './FooterNav.js'
import CardGoals from './CardGoals.js'
import LinearGradient from 'react-native-linear-gradient';

export default class Goals extends Component {
    

// componentDidMount(){
//     StatusBar.setBarStyle( 'light-content',true)
//     StatusBar.setBackgroundColor("#a928bd")
//   }

  static navigationOptions = { header: null };

  weddingAlert = ()=>{
        alert("You have unitl 1 Years (365 days) \n You need to save around: \n  $1.81/day , $55.33/month"  )
    }

    tripAlert = ()=>{
        alert("You have unitl 6 month (180 days) \n You need to save around: \n   $4.44/day , $133.3/month"  )
    }

    homePurchaseAlert = ()=>{
        alert("You have unitl 2 Years (730 days) \n You need to save around: \n  $21.09/day , $641.66/month"  )
    }

    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

    const navigation = this.props.navigation

        return (
            <Container>
               
                <Header style={{ backgroundColor: '#682cbe' }}>
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
                        <Title>Goals Tracker</Title>
                    </Body>
                    <Right />
                </Header>


                 <LinearGradient style={{flex:1,justifyContent:'center'}}
                //  '#302ca3', '#6a2ca3', '#A32CA3'
                 colors={[JUNGLE,SAGE,LAUREL]} > 
                <Content >

                

               
                    <CardGoals percentValue={0.26} percent={"26%"} functionGoal={this.weddingAlert}
                    goal={"Wedding"} money={'$236.00 / $900.00'} />

                          <CardGoals percentValue={0.20} percent={"20%"} functionGoal={this.tripAlert}
                    goal={"Island Trip"} money={'$200.00 / $1000.00'}/>

                          <CardGoals percentValue={0.14} percent={"14%"} functionGoal={this.homePurchaseAlert}
                    goal={"Home Purchase"} money={'$2,600.00 / $18,000.00'}/>


                  
                     
       
                </Content>



                  </LinearGradient>


                    {/* <TouchableOpacity style={{ position: 'absolute',right: 5,
                        bottom: 95,
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        padding: 15}}>
                        <Icon  size={55} style={{ color:'black'}}name='share' type="Entypo"/>
                    </TouchableOpacity> */}
               

                      <TouchableOpacity style={{ position: 'absolute',right: 5,
                        bottom: 55,
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        
                        padding: 15}}>
                        <Icon  size={55} style={{ color:'black'}}name='md-add-circle' type="Ionicons"/>
                    </TouchableOpacity>
               

                 <FooterNav navigation={navigation}/>
            </Container>
           
            
              
            
        )




    }
}


