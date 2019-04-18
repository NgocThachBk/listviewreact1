import { TabNavigator } from 'react-navigation';
import BasicListItem from './BasicListItem';
import BrandOneItem from './BrandOneItem';
import FavoritePlace from './FavoritePlace';
import Search from './Search';

import {Home,SearchScreen,Heart,User} from '../data/screenName';

let routeConfigs = {
  Home: {
    screen: BrandOneItem,
  },
  SearchScreen: {
    screen: Search,
  },
  Heart: {
    screen: FavoritePlace,
  },
  User: {
    screen: BasicListItem,
  },
};

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

export const TabNavigatorBottom = TabNavigator(routeConfigs, tabNavigatorConfig);
