import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
export default class Settings extends Component {
  render() {


    const JUNGLE = '#29AB87'
    const SAGE = "#9DC183"
    const LAUREL = "#A9BA9F"

    return (
      <Container>
        {/* '#682cbe' */}
        <Header style={{ backgroundColor:  JUNGLE}}>
                    <Left>
                        <Button bage transparent 
                            onPress={() => {
                                this.props.navigation.openDrawer();
                            }}
                        >
                            <Icon name='menu' />
                        </Button>
                    </Left>
          <Body>
            <Title>Settings</Title>
          </Body>
          <Right />

        </Header>
        <Content>
          <Card>
              <CardItem bordered>
              <Left>
                <Thumbnail source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}} />
                <Body>
                  <Text>User</Text>
                  <Text note>user@gmail.com</Text>
                </Body>
              </Left>
                
            </CardItem>
            <CardItem_getHelp text={"Privacy"} iconName={"lock"} iconType={"Entypo"} bgColor={'#881027'}/>
            <CardItem_getHelp text={"Change Info"} iconName={"information"} iconType={'MaterialCommunityIcons'} bgColor={'#d50c32'}/>
            <CardItem_getHelp text={"Notifications"} iconName={"md-notifications"} iconType={'IonIcons'} bgColor={'#cf04d5'}/>
            <CardItem_getHelp text={"Friends and Social"} iconName={"user-friends"} iconType={'FontAwesome5'} bgColor={'#379ef6'}/>
           </Card>
        </Content>
      </Container>
    );
  }
}