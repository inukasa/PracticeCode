
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, TextInput, ActivityIndicator, Alert, TouchableOpacity, Button, FlatList} from 'react-native';



type  = {};
export default class FindLoans extends Component {
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isLoading: true,  
    }
 
    this.arrayholder = [] ;
  }
  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
  }
  GetListViewItem (title) {
    
    Alert.alert(title);
   
   }
   

SearchFilterFunction(text){
     
  const newData = this.arrayholder.filter(function(item){
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
  })
  this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
  })
}


ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <View style = {styles.text}>
          <View>
              <Text>{item.id}</Text>
              <Text>Số tiền vay: {item.title}</Text>
              <Text>Ngày vay: </Text>
              <Text>Kì đã thanh toán: </Text>
          </View>
          <View>
              <Button
              title ='Chi tiết khoản vay'
              onPress = {()=>{this.props.navigation.navigate('Info',{
                moviesID: item.id,
                moviesName: item.title,
                moviesReleaseYear: item.releaseYear,
              });
              }}></Button>
              <Text>Kì hạn: {item.releaseYear}</Text>
              <Text>Trạng thái: </Text>
              <Text>Chờ duyệt:</Text>
          </View>
        </View>
          }
          keyExtractor={({id}, index) => id}
        />
        <Button 
        title='List Loans'
        onPress={()=>this.props.navigation.navigate('List')}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text :{
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
