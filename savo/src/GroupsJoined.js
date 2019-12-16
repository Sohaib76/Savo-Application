
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Separator,Thumbnail,Card,CardItem,Container, Badge ,Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions,ProgressBarAndroid,TouchableOpacity} from 'react-native';
import { Divider, Avatar } from 'react-native-elements';
import FooterNav from './FooterNav.js'
import CardGoals from './CardGoals.js'
import LinearGradient from 'react-native-linear-gradient';

export default class GroupsJoined extends Component {
    

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
               {/* '#682cbe' */}
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
                        <Title>Groups</Title>
                    </Body>
                    <Right />
                </Header>


                <Content>

                         <View style={{justifyContent:'center'}}>
                        
                            <Text style={{margin:10}}>Joined</Text>
                         </View> 
                    <Card>

                        
                        
                           <CardItem style={{justifyContent:'space-around',flexDirection:'row'}}>
                              
                                    <View style={{flexDirection:'column'}}>
                                   

                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Text>Group 1</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Badge style={{ position: 'absolute', top: -4, right: -4 }}><Text>1</Text></Badge>
                                        <Text>Group 2</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Text>Group 3</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Text>Group 4</Text>
                                    </View>
                                       
                                       

                                           
                        </CardItem>


                        <CardItem style={{justifyContent:'space-around',flexDirection:'row'}}>
                              
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'http://1.bp.blogspot.com/-o8qOuHWxZ_E/UAe8wMAtthI/AAAAAAAAHE0/gzbHDIBOt8g/s1600/Hdhut.blogspot.com+%2827%29.jpg'}}/> 
                                        <Badge style={{ position: 'absolute', top: -4, right: -4 }}><Text>4</Text></Badge>
                                        <Text>Group 5</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Text>Group 6</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'http://1.bp.blogspot.com/-o8qOuHWxZ_E/UAe8wMAtthI/AAAAAAAAHE0/gzbHDIBOt8g/s1600/Hdhut.blogspot.com+%2827%29.jpg'}}/> 
                                        <Badge style={{ position: 'absolute', top: -4, right: -4 }}><Text>8</Text></Badge>
                                        <Text>Group 7</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                        <Text>Group 8</Text>
                                    </View>
                                       
                                    
                        </CardItem>


                    </Card>

                    <View style={{justifyContent:'center'}}>
                        
                         <Text style={{margin:10}}>Discover</Text>
                    </View>    
                    

                    <Card>
                         <CardItem style={{justifyContent:'space-around',flexDirection:'row'}}>
                              
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://outaboutscotland.com/wp-content/uploads/2017/09/mountains-1236330_1920.jpg'}}/> 
                                        <Badge primary style={{ position: 'absolute', top: -4, right: -4 }}><Text>+</Text></Badge>
                                        <Text>Group x</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://www.nationalgeographic.com/content/dam/travel/2018-digital/25-most-iconic-mountains/grand-peaks-mount-cook.ngsversion.1532703607926.adapt.1900.1.jpg'}}/> 
                                         <Badge primary style={{color:'blue', position: 'absolute', top: -4, right: -4 }}><Text>+</Text></Badge>
                                        <Text>Group y</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://outaboutscotland.com/wp-content/uploads/2017/09/mountains-1236330_1920.jpg'}}/> 
                                         <Badge primary style={{color:'blue', position: 'absolute', top: -4, right: -4 }}><Text>+</Text></Badge>
                                        <Text>Group z</Text>
                                    </View>
                                    <View style={{flexDirection:'column'}}>
                                     <Thumbnail source={{uri: 'https://outaboutscotland.com/wp-content/uploads/2017/09/mountains-1236330_1920.jpg'}}/> 
                                        <Badge primary style={{color:'blue', position: 'absolute', top: -4, right: -4 }}><Text>+</Text></Badge>
                                        <Text>Group e</Text>
                                    </View>
                                       
                                    
                        </CardItem>
                    </Card>
                </Content>


                


                  
               

                 <FooterNav navigation={navigation}/>
            </Container>
            
            
            
        )




    }
}


