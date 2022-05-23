import React, { Component } from "react";  
import { StyleSheet, View, TextInput, Button } from "react-native";  
  
export default class PositioningElement extends Component {  
    state = {  
        placeName: "",  
        places: []  
    };  
  
    placeNameChangedHandler = val => {  
        this.setState({  
            placeName: val  
        });  
    };  
  
    placeSubmitHandler = () => {  
        alert("button clicked")  
    };  
  
    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.innerContainer}>  
                    <TextInput  
                            placeholder="An awesome place"  
                            onChangeText={this.placeNameChangedHandler}  
                            style={styles.textStyle}  
                    />  
                    <Button  
                            title="Submit"  
                            onPress={this.placeSubmitHandler}  
                    />  
                </View>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        padding: 26,  
        backgroundColor: "#fff",  
        justifyContent: "flex-start"  
    },  
    innerContainer:{  
       // flex: 1,  
        width: "100%",  
        flexDirection: "row",  
        justifyContent: "space-between",  
        alignItems: "center"  
    },  
    textStyle:{  
        width: "70%",  
        backgroundColor: "pink",  
    },  
    buttonStyle:{  
        width: "30%",  
    }  
});  