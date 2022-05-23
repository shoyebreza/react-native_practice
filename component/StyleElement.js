import React, {Component} from "react";
import {StyleSheet,Text,View} from "react-native";

export default class StyleElement extends Component{

  render(){
    return(
        <View style={styles.container}>
          <View style={{backgroundColor: 'blue', flex: 0.3}} />  
          <View style={{backgroundColor: 'red', flex: 0.5}} />  
          <Text style={styles.welcome}> nurajannat </Text>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    welcome:{
      fontSize: 20,  
      textAlign: 'center',  
      margin: 10,  
    },
    container: {  
      flex: 1,  
      flexDirection: 'row',  
      height: 100,  
      width: "80%",  
      backgroundColor:"#5ead97"  
  }
});