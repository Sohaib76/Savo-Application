import React, { Component } from 'react';
import { Thumbnail,Container, Header, Content, Card, CardItem, Text, Icon, Right,Left,Body,Title,Button } from 'native-base';
import CardItem_getHelp from './CardItem_getHelp';
import {Image} from 'react-native';
import CardArticles from './CardArticles';

export default class SearchArticles extends Component {

    static navigationOptions = { 
        header: null,
      
     };

  render() {

    const JUNGLE = '#29AB87'
    const SAGE = "#9DC183"
    const LAUREL = "#A9BA9F"

    const articleImg1 = require("./photos/beach.jpg")
    const articleImg2 = require("./photos/island2.jpg")
    const articleImg3 = require("./photos/hospital1.jpg")
    const articleImg4 = require("./photos/Restaurant.jpg")

    const navigation = this.props.navigation;
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
                        <Title>Articles</Title>
                    </Body>
                    <Right />
                </Header>
        <Content>
            <CardArticles imgSrc={articleImg1} title={'Atlanta Beach'} topic={"Picnic"} date={'July 8 2019'} navigation={navigation} whereToNavigate={"Article1"}/>
            <CardArticles imgSrc={articleImg2}  title={'Arbuckle Island'} topic={"Picnic"} date={'Sept 8 2019'} navigation={navigation}  whereToNavigate={"Article2"}/>
            <CardArticles imgSrc={articleImg3}  title={'Blood Donation'} topic={"Charity"} date={'Oct 8 2019'} navigation={navigation} whereToNavigate={"Article3"}/>
            <CardArticles imgSrc={articleImg4} title={'Village Inn'} topic={"Fun"} date={'August 3 2019'} navigation={navigation} whereToNavigate={"Article4"}/>
        </Content>
      </Container>

    );
  }
}