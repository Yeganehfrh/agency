import React, { Component } from 'react';
import {
  Text,
  View,
  NetInfo
} from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import defaultSessions from './sessions.default';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import {I18nManager} from 'react-native';

import DeviceInfo from 'react-native-device-info';

//import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomeScreen from './components/home';
import HelpScreen from './components/help';
import SessionsScreen from './components/sessions';
import AboutScreen from './components/about.js';
import PlayerScreen from './components/player.js';
import QuestionsScreen from './components/questions';
import SessionInfoScreen from './components/sessionInfo.js';

// Redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import logger from 'redux-logger';
import {persistStore, autoRehydrate} from 'redux-persist';

const AppTabNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Sessions: { screen: SessionsScreen },
  Help: { screen: HelpScreen }
}, {
  lazy: false,
  //tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'rgb(0,0,0)',
    inactiveTintColor: 'rgb(204,204,204)',
    showIcon: true,
    showLabel: true,
    style: {
      backgroundColor: '#FCFCFC',
      height: 80,
      borderWidth: 0,
      padding: 0
    },
    tabStyle: {
      margin: 0
    },
    labelStyle: {
      fontFamily: 'samim',
      fontSize: 14,
      paddingBottom: 5
    },
    iconStyle: {
      width: 35,
      height: 30
    }
  },
});

AppNavigator = StackNavigator({
  Tabs: { screen: AppTabNavigator },  
  About: { screen: AboutScreen },
  Player: { screen: PlayerScreen },
  SessionInfo: { screen: SessionInfoScreen },
  Questions: { screen: QuestionsScreen }
},{
  initialRouteName: 'Tabs',
  headerMode: 'none',
  mode: 'card'
});

export default class HypnosisApp extends Component {

  syncState = store => next => action => {
    next(action)
    
    //WORKAROUND: Check if store is not empty
    if (this.store.getState() == undefined
      || this.store.getState().surveys == []
      || this.store.getState().surveys == undefined
      || this.store.getState().surveys.length==0)
      return;
    //TODO submit to server
    this.persistor.purge()
    console.warn(DeviceInfo.getUniqueID(), JSON.stringify(store.getState()));
  }

  constructor(props) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    super(props);

    this.store = createStore(
      reducers,
      undefined,
      compose(
        applyMiddleware(thunk,logger, this.syncState),
        autoRehydrate()
      )
    );
    this.persistor = persistStore(this.store,{storage: AsyncStorage})

    this.handleConnectivityChange = this.handleConnectivityChange.bind(this);
    // Lookup network changes
    NetInfo.isConnected.addEventListener('change', this.handleConnectivityChange);
  }
  
  handleConnectivityChange(connected) {
    if (connected) this.store.dispatch({type:"SEND_TO_SERVER"})
    //console.warn('Mobile is ' + (connected ? 'online' : 'offline'));
  }

  render() {
    return (
      <Provider store={this.store}>
        <AppNavigator />
      </Provider>
    );
  }
}

global.storage = new Storage({
	// maximum capacity, default 1000 
	size: 1000,
	storageBackend: AsyncStorage,
  enableCache: false,
	defaultExpires: null,
	sync : {
    sessions(params){
      loadDefaultSessions(params);
    }
	}
})


loadDefaultSessions = function(params) {
  //global.storage.remove({key:'sessions'});
  global.storage.save({
    key: 'sessions',
    data: defaultSessions
  });
  params.resolve(defaultSessions);

}
