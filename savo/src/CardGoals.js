
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Card,CardItem,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions,ProgressBarAndroid,ProgressViewIOS,TouchableOpacity,Platform} from 'react-native';
import { Divider } from 'react-native-elements';


export default class CardGoals extends Component {
    

// componentDidMount(){
//     StatusBar.setBarStyle( 'light-content',true)
//     StatusBar.setBackgroundColor("#a928bd")
//   }

  static navigationOptions = { header: null };

//   weddingAlert = ()=>{
//         alert("You have unitl 2 Years (730 days) \n You need to save around:")
//     }

    render() {

    const navigation = this.props.navigation
    const screenWidth = Dimensions.get('window').width 


        return (
          
           
                // #5d1597
                <TouchableOpacity activeOpacity={0.6} onPress={this.props.functionGoal} style={{margin:5}} >
                <Card style={{elevation:5,borderWidth:4,margin:20}}>
                    <CardItem style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                            <Text style={{color:'black'}}>{this.props.goal}</Text>
               
                    </CardItem>
                    <CardItem style={{backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                               <Text style={{color:'black'}}>{this.props.money}</Text>
                  
                    </CardItem>
                    <CardItem style={{backgroundColor:'white',justifyContent:'flex-start',alignItems:'center'}}>
                               
                               <View style={{width:screenWidth-100}}>
                                {Platform.OS === "ios" &&
                                       <ProgressViewIOS progress={this.props.percentValue}/>
                                }
                                {
                                        Platform.OS === 'android' &&
                                        <ProgressBarAndroid
                                        color= "#319efb"
                                         styleAttr="Horizontal"
                                         indeterminate={false}
                                         progress={this.props.percentValue}
                                         />
                                }
                             
                               </View>
                               
                                <Text style={{color:'black'}}>{this.props.percent}</Text>
                                <Icon  size={55} style={{ color:'black',marginLeft:5}}name='share' type="Entypo"/>

                              
                  
                    </CardItem>

                
                </Card>
                </TouchableOpacity>
             
            
              
            
        )




    }
}


