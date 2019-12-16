import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right ,Left,Body} from 'native-base';
export default class CardItem_getHelp extends Component {
  render() {
    return (

        <Card style={{flexDirection:'row'}}>
      
          <CardItem bordered style={{backgroundColor:this.props.bgColor}}>

            
                <Icon active name={this.props.iconName} type={this.props.iconType}
                    style={{color:'white'}}
              />
             
              
            
        </CardItem>

        <CardItem >

                    
       
        <Text style={{margin:20}}>{this.props.text}</Text>



        </CardItem>

        </Card>
             
    );
  }
}