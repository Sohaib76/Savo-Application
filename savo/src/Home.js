
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Card,CardItem,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions,TouchableOpacity} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'
import FooterNav from './FooterNav.js'
import MyProgressChart from './MyProgressChart.js'



export default class Home extends Component {
    

// componentDidMount(){
//     StatusBar.setBarStyle( 'light-content',true)
//     StatusBar.setBackgroundColor("#a928bd")
//   }

  static navigationOptions = { header: null };

    render() {
        const JUNGLE = '#29AB87'
        const SAGE = "#9DC183"
        const LAUREL = "#A9BA9F"


        const screenWidth = Dimensions.get('window').width - 10

          const graphstyle={
                            marginVertical: 8,
                            marginRight:5,
                            marginLeft:5,
                            borderRadius: 16
                        }

        const chartConfig = {
        // backgroundGradientFrom: '#4d7ada',
        // backgroundGradientTo: '#32a3e9',
        // color: (opacity = 1) => `rgba(35,8,74, ${opacity})`,
        backgroundGradientFrom: '#1E2923',
        backgroundGradientTo: '#08130D',
        color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
        //////////////////////PURPLE
        // backgroundGradientFrom: '#6a2ca3',
        // backgroundGradientTo: '#A32CA3',
        // color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
        // optional, default 3
        strokeWidth: 2, 
        
        }

        const data = [0.14, 0.20, 0.26]


        const commitsData = [
            { date: '2017-01-02', count: 1 },
            { date: '2017-01-03', count: 2 },
            { date: '2017-01-04', count: 3 },
            { date: '2017-01-05', count: 4 },
            { date: '2017-01-06', count: 5 },
            { date: '2017-01-30', count: 2 },
            { date: '2017-01-31', count: 3 },
            { date: '2017-03-01', count: 2 },
            { date: '2017-04-02', count: 4 },
            { date: '2017-03-05', count: 2 },
            { date: '2017-02-30', count: 4 }
            ]
        

        const Bardata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [ 20, 45, 28, 80, 99, 43 ]
            }]
            }

        const Linedata = {
            
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                     ]
                            }]
               
        }
    
      











        const navigation = this.props.navigation;



        return (
            
            // <View style={{flex:1}}>
            //     <StatusBar backgroundColor="red"/>
            <Container>
                {/* '#682cbe'  */}
                <Header style={{ backgroundColor: JUNGLE}}>
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
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <Button badge transparent active >
                            <Icon name="apps" />
                            <Badge><Text>2</Text></Badge>
                        </Button>
                    </Right>
                </Header>




                <Content style={{backgroundColor:'#fff'}}>
                    <TouchableOpacity onPress={()=>{navigation.navigate("UpcomingPayments")}}
                    activeOpacity={0.6} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15, color:'black',fontWeight:'bold'}}>
                            Upcoming Payments
                        </Text>
                        <LineChart
                            data={Linedata}
                            width={screenWidth} 
                            height={220}
                            yAxisLabel={'$'}
                            chartConfig={chartConfig}
                            bezier
                            style={graphstyle}
                        />
                        </TouchableOpacity>


                    <TouchableOpacity onPress={()=>{navigation.navigate("Goals")}}
                    activeOpacity={0.6} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15, color:'black',fontWeight:'bold'}}>
                           Goals
                        </Text>
                    <MyProgressChart  screenWidth={screenWidth}
                    data={data} chartConfig={chartConfig} graphstyle={graphstyle}/>
                    </TouchableOpacity>
                      
                     
                        

                    <TouchableOpacity onPress={()=>{navigation.navigate("GroupsJoined")}}
                    activeOpacity={0.6} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15, color:'black',fontWeight:'bold'}}>
                            Groups Joined
                        </Text>
                        <ContributionGraph
                        values={commitsData}
                        endDate={new Date('2017-04-01')}
                        numDays={105}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                         style={graphstyle}
                        />
                    </TouchableOpacity>


                    <TouchableOpacity onPress={()=>{navigation.navigate("Balance")}} 
                    activeOpacity={0.6} style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:15, color:'black',fontWeight:'bold'}}>
                            Balance
                        </Text>
                        <BarChart
                         style={graphstyle}
                        data={Bardata}
                        width={screenWidth}
                        height={220}
                        yAxisLabel={'$'}
                        chartConfig={chartConfig}
                        />
                    </TouchableOpacity>







                </Content>



            <FooterNav navigation={this.props.navigation}/>
        
            </Container>
            // </View>
            
        )




    }
}


