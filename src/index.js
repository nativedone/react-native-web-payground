// TODO: check if we need to have index.web.js & index.ios.js & index.android.js
// to be able to deploy to multiple platform 

import { AppRegistry } from 'react-native';

import App from './App';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('root')
});
