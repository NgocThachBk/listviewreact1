import React, { Component } from 'react';
import {createMaterialTopTabNavigator} from 'react-navigation';
import BasicListItem from './BasicListItem';
import BrandOneItem from './BrandOneItem';
import FavoritePlace from './FavoritePlace';
import Search from './Search';
import screenName from '../data/screenName';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: Search,
    SearchScreen: BrandOneItem,
    Heart:FavoritePlace,
    User: BasicListItem
  },
  {
    tabBarOptions:{
      showIcon: true,
      showLabel: true
    }
  }
)
