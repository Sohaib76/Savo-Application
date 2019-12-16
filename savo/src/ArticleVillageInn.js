import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
import {Image} from 'react-native';
import CardArticles from './CardArticles';
import CardDetailArticle from './CardDetailsArticles';

export default class VillageInArticle extends Component {

    static navigationOptions = { header: null };

  render() {

    const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"

        
    const articleImg1 = require("./photos/Restaurant.jpg")


   

    const navigation = this.props.navigation;
    return (
        
        <Container>
        <Header style={{ backgroundColor:JUNGLE }}>
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
                        <Title>Village Inn</Title>
                    </Body>
                    <Right />
                </Header>
        <Content>
            <CardDetailArticle imgSrc={articleImg1} title={"Village Inn"} topic={"Fun"} date={"August 3 2019"}/>
            
        </Content>
      </Container>

    );
  }
}