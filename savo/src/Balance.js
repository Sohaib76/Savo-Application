
import React, { Component } from 'react';
import {Separator,Thumbnail,Card,CardItem,Container, Badge ,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {Image,StatusBar,View,Dimensions,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import FooterNav from './FooterNav.js'
import CardGoals from './CardGoals.js'
import LinearGradient from 'react-native-linear-gradient';

export default class Balance extends Component {
    

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
                        <Title>Balance</Title>
                    </Body>
                    <Right />
                </Header>


                <Content>

                    {/* <Card>
                         
                    </Card> */}

                    <Card>
                    <CardItem>
                            <Image resizeMode="center" style={{flex:1,height: 200, width: null}} source={{uri : 'https://www.fepshop.com/wp-content/uploads/2017/11/flat_seo2-21-512.png'}}/>
                        </CardItem>
                        {/* fontFamily:'sans-serif-condensed' */}
                        <CardItem style={{justifyContent:'center'}}>
                            <Text style={{fontSize:30,}}>Your Current Balance : </Text>
                        </CardItem>
                         <CardItem style={{justifyContent:'center'}}>
                            <Text style={{fontSize:40,fontStyle:'italic',color:'#3688f7'}}>$39.50</Text>
                        </CardItem>  
                         <CardItem style={{justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>Want To Contribute In Your Savings?</Text>
                        </CardItem> 
                          <CardItem style={{justifyContent:'center'}}>
                            <Button onPress={()=> {this.props.navigation.navigate("PaymentMethod")}}
                            style={{backgroundColor:'#141e33'}}><Text style={{fontSize:16}}>Go To Payment Options</Text></Button>
                            
                        </CardItem> 

                    </Card>  


                </Content>


                


                  
               

                 <FooterNav navigation={navigation}/>
            </Container>
            
            
            
        )




    }
}


