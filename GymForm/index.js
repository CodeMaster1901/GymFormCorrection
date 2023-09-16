/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
if (window.document) {
    const { AppRegistry } = require('react-native');
    const { name } = require('./app.json');
  
    AppRegistry.runApplication(name, {
      initialProps: {},
      rootTag: document.getElementById('app-root'), // Replace 'app-root' with the ID of your HTML container element
    });
  }
  
