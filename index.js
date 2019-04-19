/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import ListViewDemo from './ListViewDemo';


import {Appnavi} from './component/NavigationBottom';



AppRegistry.registerComponent(appName, () => Appnavi);
