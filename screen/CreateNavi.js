import React, { Component } from 'react';
import { TextInput,AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import branditem from '../data/branditem';

import FlatListItem from '../component/ItemListMore';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../screen/Search';
import FilterPlace from '../screen/FilterPlace';
import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';
import BasicListItem from '../screen/BasicListItem';
import BrandOneItem from '../screen/BrandOneItem';

const RootStack = createStackNavigator({
  Home: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: FilterPlace,
    navigationOptions: {
      header: null,
    },
  },
  ShowBrand:{
    screen:BasicListItem,
    navigationOptions: {
      header: null,
    },
  },
  Item:{
    screen:FlatListItem,
    navigationOptions: {
      header: null,
    },
  },
  BrandPlace:{
    screen:BrandOneItem,
    navigationOptions: {
      header: null,
    },
  },
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(RootStack);

export default class CreateNavi extends React.Component {
  render() {
    return <AppContainer />;
  }
}

CreateNavi.navigationOptions = {
  tabBarIcon : ({focused}) => (
    <Icon
      name = "md-search"
      size = {30}
      color = {focused ? "blue" : "black"}
    />
  )
}
