import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const styles = StyleSheet.create({
  itemList:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#D6D5D5',
    borderBottomWidth: 3,
  },
  shadowImage:{
    width: 100,
    height: 110,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
    elevation: 5
  },
  imageStyle: {
    width: 100,
    height: 110,
    borderRadius: 10,
  },
  nameStyle:{
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 15,
    fontSize: 15,
    fontFamily: "MontserratSemiBold"
  },
  brandStyle:{
    marginLeft: 15,
    marginTop: 5,
    fontSize: 12,
    fontFamily: "MontserratLight"
  },
  detailStyle:{
    marginTop: 5,
    marginLeft: 15,
    fontSize: 15,
    fontFamily: "MontserratMedium"
  },
});



export default class FlatListItem extends Component{
  render(){
    var detail = this.props.item.detail;

    if(detail.length > 50) {
      detail = detail.substr(0,50);
      detail = detail + "...";
    }

    var address = this.props.item.address;

    if(address.length > 30) {
      address = address.substr(0,30);
      address = address + "...";
    }

    return (
      <View style = {styles.itemList}>
      <View style = {styles.shadowImage}>
        <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
      </View>
      <View style = {{flex:1,flexDirection: 'column'}}>
        <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
        <Text style = {styles.brandStyle}>{address}</Text>
        <Text style = {styles.detailStyle}>{detail}</Text>
      </View>
      </View>
    );
    }
  }
