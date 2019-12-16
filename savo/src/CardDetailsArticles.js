import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
import {Image,TouchableOpacity,View} from 'react-native';

export default class CardDetailArticle extends Component {

   

  render() {

   

    return (
        
        <Content>
          <Card>
             
                <CardItem cardBody >
                    

                    
                        <Image opacity={0.9} source={this.props.imgSrc} style={{height: 200, width: null, flex: 1,backgroundColor: 'rgba(0,0,0,.6)'}}/>
                        <Text 
                        style={{textShadowOffset:{width:1,height:2},textShadowColor:'black'
                        ,textShadowRadius:2
                        ,position:'absolute',color:'white',bottom:40,left:20
                        ,fontSize:30,fontWeight:'bold',fontFamily:'monospace'}}>
                            
                            {this.props.title}</Text>

                        
                
                </CardItem>

              <CardItem>

              <Text 
                            style={{color:'black',marginRight:80
                            ,fontSize:15,fontFamily:'serif'}}>
                         {this.props.topic}</Text>

                                
                  

                  <Text 
                            style={{color:'black',marginRight:30
                            ,fontSize:15,fontFamily:'serif'
                            ,}}>
                                
                                {this.props.date}</Text>
                            
                    <Right></Right>
                        

                <Right>
                        
                <Icon style={{color:'green'
                        }} name="user-friends" type={"FontAwesome5"} size={10} />
                 </Right>

                    <Right>
                    <Text 
                        style={{color:'green'
                        ,fontSize:15,textShadowOffset:{width:1,height:1},textShadowColor:'grey'
                        ,textShadowRadius:2}}>
                            
                            39</Text>
                    </Right>
                       
                        <Right></Right>
                        <Right>
                             <Icon style={{color:'green'
                            }} name="hearto" type={"AntDesign"} size={10} />
                        </Right>
                    
                            <Right>
                            <Text 
                        style={{color:'green'
                        ,fontSize:15,textShadowOffset:{width:1,height:1},textShadowColor:'grey'
                        ,textShadowRadius:2}}>
                            {/* fontFamily:'serif', */}
                            99</Text>
                            </Right>
                          

                     

               
              </CardItem>

                <CardItem>
                    <Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                    , but also the leap into electronic typesetting, remaining essentially unchanged. 
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Text>
                </CardItem>


              <CardItem>
                <Left>
                    <Button transparent>
                    <Icon name="share" type={'Entypo'} style={{color:'green'}}/>
                    <Text style={{color:'green'}}>1,926 shares</Text>
                    </Button>
                </Left>
                <Right>
                    <Button transparent>
                    <Thumbnail source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }}/>
                    <Text style={{color:'green'}}>by UXDIVERS</Text>
                    </Button>
                </Right>
                </CardItem>

              
            
          </Card>
        </Content>
    

    );
  }
}