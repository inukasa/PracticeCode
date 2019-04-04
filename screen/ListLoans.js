import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
export default class ListLoans extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.Container}>
        <Card/>
        <Card/>
        <Button onPress={()=>this.props.navigation.navigate('Find')}
        title="List loans">
        </Button>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  Container :{
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex:1,
    },
   
   rowViewContainer: {
     fontSize: 17,
     padding: 10
    },
   
    TextInputStyleClass:{
          
     textAlign: 'center',
     height: 40,
     borderWidth: 1,
     borderColor: '#009688',
     borderRadius: 7 ,
     backgroundColor : "#FFFFFF"
          
     },
});
