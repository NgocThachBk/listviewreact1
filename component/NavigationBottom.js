import React, { Component } from 'react';
import { TextInput,AppRegistry,ListView, Text, View, Image, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import BasicListItem from '../screen/BasicListItem';
import BrandOneItem from '../screen/BrandOneItem';
import FavoritePlace from '../screen/FavoritePlace';
//import Search from '../screen/Search';
import ImagePickerProject from '../screen/ImageInput';
import CreateNavi from '../screen/CreateNavi';
import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';

import {Home,SearchScreen,Heart,User} from '../data/screenName';
//import AppNavigator from '../screen/Search';


const RootStack = createMaterialTopTabNavigator( {
  Home: {
    screen: BasicListItem,
  },
  SearchScreen: {
    screen: CreateNavi,
  },
  Add:{
    screen:ImagePickerProject,
  },
  Heart: {
    screen: FavoritePlace,
  },
  User: {
    screen: BrandOneItem,
  },
},
{
  tabBarPosition: 'bottom',

    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      showIcon: true,
      showLabel: false,
      animationEnabled: true,
      swipeEnabled: true,

      style:{
        backgroundColor:'white',
      }
    },
  }
);

// let tabNavigatorConfig = {
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   swipeEnabled: true,
//   tabBarOptions: {
//     showIcon: true,
//     activeTintColor: 'blue',
//     labelStyle: {
//       fontSize: 13,
//     },
//     style: {
//       backgroundColor: 'lightgray',
//       padding: -10
//     },
//   },
// };


export const Appnavi = createAppContainer(RootStack);
