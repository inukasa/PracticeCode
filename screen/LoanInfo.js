import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ListView, TextInput, ActivityIndicator, Alert, TouchableOpacity, Button, FlatList } from 'react-native';

export default class LoanInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { params } = this.props.navigation.state;
      const moviesID = params ? params.moviesID : null;
      const moviesName = params ? params.moviesName : null;
      const moviesReleaseYear = params ? params.moviesReleaseYear : null;
    return (
      <View>
        <View style={styles.tittle}>
            <Text style={styles.tittleText}>{JSON.stringify(moviesID)}</Text>
        </View>
        <View style={styles.containerCard}>
        <View style={styles.text}>
            <View>
                <Text>{JSON.stringify(moviesID)}</Text>
                <Text>Số tiền vay: {JSON.stringify(moviesName)}</Text>
                <Text>Ngày vay: </Text>
                <Text>Kì đã thanh toán: </Text>
            </View>
            <View>
                <Text>Kì hạn: {JSON.stringify(moviesReleaseYear)}</Text>
                <Text>Trạng thái: </Text>
                <Text>Chờ duyệt:</Text>
            </View>
        </View>
        </View>
        <View></View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    tittle: {
        alignItems: 'center',
        
    },
    tittleText: {
      fontWeight: 'bold',
      fontSize: 30,
    },
    text :{
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex:1,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 50,
      },
     containerCard :{
        
     },

  });
