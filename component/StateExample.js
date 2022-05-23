import React, {Component} from "react";
import {StyleSheet,Text,View} from "react-native";

export default class StateExample extends Component{
    state={
        mystate:'this is the changeable state'
    }

    UpdateState = ()=> this.setState({mystate:'state is updated'})

    render(){
        return(
            <View>
                <Text onPress={this.UpdateState}>{this.state.mystate}</Text>
            </View>
        );
    }

}