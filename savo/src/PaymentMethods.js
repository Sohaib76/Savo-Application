import React, { Component } from 'react';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import {Form, Item, Input,Label,CardItem, Card,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class PaymentMethods extends Component {

    // _onChange(form)=> {console.log(form)};

      static navigationOptions = { header: null };

    render(){

        
    const JUNGLE = '#29AB87'
    const SAGE = "#9DC183"
    const LAUREL = "#A9BA9F"

        return(
            <Container>
                {/* '#682cbe' */}
                 <Header style={{ backgroundColor: JUNGLE }}>
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
                    <Title>Payment Options</Title>
                </Body>
                <Right />

            </Header>
                <Content>
                    <Card >
                        <CardItem>
                             <Text>Credit Card  </Text>
                             <Text note>(3% extra fee)</Text>
                        </CardItem>
                        <CardItem>
                             <CreditCardInput  />
                        </CardItem>
                    </Card>

                     <Card style={{marginTop:20}}>
                        <CardItem>
                             <Text>Bank Information</Text>
                        </CardItem>
                        
                        <Form>
                            <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                            </Item>
                            <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                            </Item>
                        </Form>

                        <CardItem/>
                    </Card>

                </Content>
                
            </Container>
        )
    }
  
}

