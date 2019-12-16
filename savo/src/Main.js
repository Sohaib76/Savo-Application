import React, { Component } from 'react';
import { Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { createDrawerNavigator ,createStackNavigator, createAppContainer , DrawerItems} from 'react-navigation'
import Home from './Home'
import Settings from './Settings';
import PaymentMethods from './PaymentMethods';
import GetHelp from './GetHelp';
import {StatusBar,View} from 'react-native';
import SearchArticles from './SearchArticles';
import AtlantaBeachArticle from './AtlantaBeachArticle';
import ArbuckleIslandArticle from './ArbuckleIslandArticle';
import BloodDonationArticle from './BloodDonationArticle';
import VillageInArticle from './ArticleVillageInn';
import ProfileSettings from './ProfileSettings';
import Goals from './Goals.js'
import GroupsJoined from './GroupsJoined.js'
import Balance from './Balance.js'
import UpcomingPayments from './UpcomingPayments.js'

export default class Main extends Component {


  render() {
    return (
      <View style={{flex:1}}> 
        
        <MyApp />
      </View>
        
    );
  }
}

const CustomDrawerContentComponent = ( props ) => {
  const JUNGLE = '#29AB87'
  const SAGE = "#9DC183"
  const LAUREL = "#A9BA9F"

return  <Container >
  {/* '#a928bd' */}
      <Header style={{backgroundColor: JUNGLE}}>
      <Body style={{flex:1, marginRight:30,justifyContent:'flex-start', alignItems:'center',flexDirection:'row'}}>
        <Icon name="money-check-alt" size={24} style={{ color: 'white' ,margin:5}}  type={'FontAwesome5'}/>
        <Text style={{color:'#fff', fontSize:18}}>Savo App</Text>   
      </Body>
      </Header>
      <Content>
        <DrawerItems {...props} />
      </Content>
  </Container>
}







export const MyHomeStack = createStackNavigator(
  {
    Home: {
      screen:Home,
      navigationOptions: {
       
      },
    },

    Goals : {
      screen:Goals
    },
    GroupsJoined: {
      screen: GroupsJoined
    },
    Balance: {
      screen: Balance
    },
    PaymentMethod: {
      screen:PaymentMethods,
      navigationOptions: {
        drawerLabel: 'Payment Methods',
        drawerIcon: ({ tintColor }) => (
          <Icon name="wallet" size={24} style={{ color: tintColor }} />
        ),
    },
    },

     UpcomingPayments: {
      screen:UpcomingPayments,
     },

    Search: {
      screen:SearchArticles,
      navigationOptions: {
        headerMode:null
      },
    },
    Profile:{
      screen:ProfileSettings
    },
    Article1: {
      screen:AtlantaBeachArticle,
    },
    Article2: {
      screen: ArbuckleIslandArticle,
    },
    Article3: {
      screen: BloodDonationArticle,
    },
    Article4: {
      screen: VillageInArticle,
    },

  }, 
  
  {
    initialRouteName: 'Home'
  }
    
   
















  )




const MyApp = createAppContainer(createDrawerNavigator(
  {
    Home: {
      screen:MyHomeStack,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    PaymentMethod: {
      screen:PaymentMethods,
      navigationOptions: {
        drawerLabel: 'Payment Methods',
        drawerIcon: ({ tintColor }) => (
          <Icon name="wallet" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    Settings: {
      screen:Settings,
      navigationOptions: {
        drawerLabel: 'Settings',
        drawerIcon: ({ tintColor }) => (
          <Icon name="settings" size={24} style={{ color: tintColor }} />
        ),
      },
    },
    GetHelp: {
      screen:GetHelp,
      navigationOptions: {
        drawerLabel: 'Get Help',
        drawerIcon: ({ tintColor }) => (
          <Icon name="help-box" type={'MaterialCommunityIcons'} size={24} style={{ color: tintColor }} />
        ),
      },
    },
    
  },
  {
    contentComponent:CustomDrawerContentComponent,
drawerOpenRoute:'DrawerOpen',
drawerCloseRoute:'DrawerClose',
drawerToggleRoute:'DrawerToggle',
mode: 'modal',
headerMode: 'none',
}
))











    