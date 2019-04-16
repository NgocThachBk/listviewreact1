/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListViewDemo from './ListViewDemo'
import BasicListItem from './component/BasicListItem'
import BrandOneItem from './component/BrandOneItem'
import FavoritePlace from './component/FavoritePlace'

AppRegistry.registerComponent(appName, () => FavoritePlace);
