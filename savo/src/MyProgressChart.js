
import React, { Component , Image} from 'react';
import { Alert } from 'react-native'
import {Card,CardItem,Container, Badge, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import {StatusBar,View,Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'


export default class MyProgressChart extends Component {
    

  static navigationOptions = { header: null };

    render() {
        const {data} = this.props
        const {screenWidth} = this.props
        const {chartConfig} = this.props
        const {graphstyle} = this.props
        
        return (
      
                    
              <ProgressChart
                        data={data}
                        width={screenWidth}
                        height={220}
                        chartConfig={chartConfig}
                        style={graphstyle}
             />

        
            
        )
    }
}