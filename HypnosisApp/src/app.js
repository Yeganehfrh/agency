import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import codePush from 'react-native-code-push';

import defaultSessions from './sessions.default';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

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
import { offline } from 'redux-offline';
import offlineConfig from 'redux-offline/lib/defaults';
import effect from 'redux-offline/lib/defaults/effect';
import retry from 'redux-offline/lib/defaults/retry';
import discard from 'redux-offline/lib/defaults/discard';

/*
const offlineConfig = {
  retry,
  discard,
  effect: (effect, action) => {
    console.warn("Effecting...")
    console.warn(effect, action)
    return Promise.resolve()
  }
};
*/
const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunk),
    offline(offlineConfig)
  )
);

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


class HypnosisApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default CodePushApp = codePush(HypnosisApp);

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
