import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  itemList:{
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderBottomColor: '#D6D5D5',
    borderBottomWidth: 3,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  nameStyle:{
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15
  },
  brandStyle:{
    marginLeft: 15,
    marginTop: 15
  },
  shadowImage:{
    width: 100,
    height: 100,
    borderRadius: 10,
    marginLeft: 10,
    marginBottom: 10,
    elevation: 5
  }
});

export default class FlatListItem extends Component{
  render(){
    return (
      <View style = {styles.itemList}>
      <View style = {styles.shadowImage}>
        <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
      </View>
      <View style = {{flex:1,flexDirection: 'column'}}>
        <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
        <Text style = {styles.brandStyle}>{this.props.item.numberBrand}</Text>
      </View>
      </View>
    );
    }
  }
