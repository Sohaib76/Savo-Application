import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
import {Image} from 'react-native';
import CardArticles from './CardArticles';
import CardDetailArticle from './CardDetailsArticles';

export default class ArbuckleIslandArticle extends Component {

    static navigationOptions = { header: null };

  render() {

    const JUNGLE = '#29AB87'
    const SAGE = "#9DC183"
    const LAUREL = "#A9BA9F"

    const articleImg1 = require("./photos/island1.jpg")


   

    const navigation = this.props.navigation;
    return (
        
        <Container>
        <Header style={{ backgroundColor: JUNGLE }}>
                    <Left>
                        <Button bage transparent 
                            onPress={() => {
                                navigation.navigate("Search");
                            }}
                        >
                            <Icon name='back' type={'AntDesign'} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Arbuckle Island</Title>
                    </Body>
                    <Right />
                </Header>
        <Content>
            <CardDetailArticle imgSrc={articleImg1} title={"Arbuckle Island"} topic={"Picnic"} date={"Sept 8 2019"}/>
            
        </Content>
      </Container>

    );
  }
}