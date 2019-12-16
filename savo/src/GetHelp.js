import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
export default class GetHelp extends Component {
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
            <Title>Get Help</Title>
          </Body>
          <Right />

        </Header>
        <Content>
          <Card>
            <CardItem_getHelp text={"Browse FAQ"} iconName={"questioncircle"} iconType={"AntDesign"} bgColor={'#a625a4'}/>
            <CardItem_getHelp text={"Contact Us"} iconName={"md-contact"} iconType={'Ionicons'} bgColor={'#d119ce'}/>
            <CardItem_getHelp text={"Submit a Ticket"} iconName={"sticky-note"} iconType={'FontAwesome'} bgColor={'#105cc8'}/>
            <CardItem_getHelp text={"View Tickets"} iconName={"ticket"} iconType={'Entypo'} bgColor={'#458aed'}/>
           </Card>
        </Content>
      </Container>
    );
  }
}