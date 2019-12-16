import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
import {Image,TouchableOpacity,View} from 'react-native';

export default class CardArticles extends Component {

   

  render() {

   

    return (
        
        <Content>
          <Card>
              <TouchableOpacity activeOpacity={0.6}  onPress={()=>this.props.navigation.navigate(this.props.whereToNavigate)}>
                <CardItem cardBody >
                        <Image opacity={0.9} source={this.props.imgSrc} style={{height: 200, width: null, flex: 1,backgroundColor: 'rgba(0,0,0,.6)'}}/>
                        <Text 
                        style={{textShadowOffset:{width:1,height:2},textShadowColor:'black'
                        ,textShadowRadius:3
                        ,position:'absolute',color:'white',bottom:40,left:20
                        ,fontSize:30,fontWeight:'bold'}}>
                            {/* ,fontFamily:'monospace' */}
                            {this.props.title}</Text>

                        
                            <Text 
                        style={{position:'absolute',color:'white',bottom:20,left:20
                        ,fontSize:15,textShadowOffset:{width:1,height:2},textShadowColor:'black'
                        ,textShadowRadius:3}}>
                            
                            {this.props.topic}</Text>

                            <Text 
                        style={{position:'absolute',color:'white',bottom:20,left:120
                        ,fontSize:15,textShadowOffset:{width:1,height:2},textShadowColor:'black'
                        ,textShadowRadius:3}}>
                            
                            {this.props.date}</Text>

                            <Icon style={{color:'green',position:'absolute',bottom:20,right:95
                        }} name="user-friends" type={"FontAwesome5"} size={15} />

                        <Text 
                        style={{position:'absolute',color:'green',bottom:20,right:78
                        ,fontSize:15,textShadowOffset:{width:1,height:1},textShadowColor:'grey'
                        ,textShadowRadius:2}}>
                            
                            39</Text>

                        
                    
                            <Icon style={{color:'green',position:'absolute',bottom:20,right:40
                        }} name="hearto" type={"AntDesign"} size={15} />

                        <Text 
                        style={{position:'absolute',color:'green',bottom:20,right:30
                        ,fontSize:15,textShadowOffset:{width:1,height:1},textShadowColor:'grey'
                        ,textShadowRadius:2}}>
                            
                            99</Text>

                        {/* <View style={{width:10,position:'absolute',backgroundColor:'green',bottom:10,left:20}}/> */}

                </CardItem>
              </TouchableOpacity>
            
          </Card>
        </Content>
    

    );
  }
}