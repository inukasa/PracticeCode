import React, { Component } from 'react';
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native';
import { black } from 'ansi-colors';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.MainContainer}>
        <View>
            <Text>Loan1</Text>
            <Text>Số tiền vay: </Text>
            <Text>Ngày vay: </Text>
            <Text>Kì đã thanh toán: </Text>
        </View>
        <View>
            <TouchableOpacity>
                <Text>Chi tiết khoản vay</Text>            
            </TouchableOpacity>
            <Text>Kì hạn: </Text>
            <Text>Trạng thái: </Text>
            <Text>Chờ duyệt:</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    MainContainer :{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex:1,
      borderColor: 'black',
      borderWidth: 1,
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
