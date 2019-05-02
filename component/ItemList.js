import React, { Component } from 'react';
import { AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import { TabNavigator,withNavigation,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';

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
    marginLeft: 15,
    fontFamily: "MontserratSemiBold",
    color:"black"
  },
  brandStyle:{
    marginLeft: 15,
    marginTop: 15,
    fontFamily: "MontserratSemiBold"
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

export default class FlatListItem extends Component<Props>{
  render(){
    return (
      <TouchableOpacity  onPress = {() => this.props.navigation.navigate('BrandPlace',{dataSend:this.props.item.brand,namePlace:this.props.item.name,urlImage:this.props.item.imageUrl})}>
      <View style = {styles.itemList}>

      <View style = {styles.shadowImage}>
        <Image source = {{uri:this.props.item.imageUrl}} style = {styles.imageStyle}></Image>
      </View>

      <View style = {{flex:1,flexDirection: 'column'}}>
        <Text style = {styles.nameStyle}>{this.props.item.name}</Text>
        <Text style = {styles.brandStyle}>{this.props.item.numberBrand}</Text>
      </View>
      </View>
</TouchableOpacity>
    );
    }
  }
