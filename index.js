/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListViewDemo from './ListViewDemo';
import BasicListItem from './component/BasicListItem';
import BrandOneItem from './component/BrandOneItem';
import FavoritePlace from './component/FavoritePlace';
import Search from './component/Search';
//import TabNavigatorBottom from './component/NavigationBottom';

import { TabNavigator,createMaterialTopTabNavigator,createStackNavigator,createAppContainer } from 'react-navigation';

import {Home,SearchScreen,Heart,User} from './data/screenName';

const RootStack = createMaterialTopTabNavigator( {
  Home: {
    screen: BasicListItem,
  },
  SearchScreen: {
    screen: Search,
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
        backgroundColor:'white'
      }
    },
  }
);

let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10
    },
  },
};

//const TabNavigatorBottom = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

const Appnavi = createAppContainer(RootStack);

AppRegistry.registerComponent(appName, () => Appnavi);
