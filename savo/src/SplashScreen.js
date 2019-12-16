import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4f6d7a',
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
  text:{
    color:'#F5FCFF',
    fontSize: 20,
  }
})
class Splash extends React.Component {
  componentDidMount(){
    setTimeout(()=>{
      //Onboard
      this.props.navigation.navigate('Onboard')
    },3000)
  }
  render(){
    return( 
      <View style={styles.container}>
        <Text style={styles.text}>Splash Screen</Text>
      </View>
    )
  }
}
export default Splash
// 4F6D7A
