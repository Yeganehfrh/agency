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

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import {I18nManager} from 'react-native';

import DeviceInfo from 'react-native-device-info';

import * as Actions from './actions';

//import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomeScreen from './components/home';
import HelpScreen from './components/help';
import SessionsScreen from './components/sessions';
import ContactUsScreen from './components/contact';
import PlayerScreen from './components/player';
import QuestionsScreen from './components/questions';
import SessionInfoScreen from './components/sessionInfo';
import RestartScreen from './components/restart';
import EditProfileScreen from './components/editprofile';

// Redux imports
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger';
import {persistStore, purgeStoredState, autoRehydrate} from 'redux-persist';

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
  ContactUs: { screen: ContactUsScreen },
  Restart: { screen: RestartScreen },
  Player: { screen: PlayerScreen },
  SessionInfo: { screen: SessionInfoScreen },
  Questions: { screen: QuestionsScreen },
  EditProfile: { screen: EditProfileScreen}
},{
  initialRouteName: 'Tabs',
  headerMode: 'none',
  mode: 'card'
});

export default class HypnosisApp extends Component {

  syncState = store => next => action => {
    next(action)
    
    //WORKAROUND: Check if store is not empty
    if (( this.store.getState() == undefined || this.store.getState().surveys == undefined    || this.store.getState().surveys.length==0)
      && (this.store.getState() == undefined || this.store.getState().timestamps == undefined || this.store.getState().timestamps.length==0)
      && (this.store.getState() == undefined || this.store.getState().feedbacks == undefined  || this.store.getState().feedbacks.length==0))
        return;

    var userId = DeviceInfo.getUniqueID();
    if (store.getState()!=undefined) {
      try {
        fetch("https://cut.social/2017/hypnosisapp1/save/" + userId, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(store.getState())
        }).then(function(res) {
          if (res.ok) {
            //this.persistor.purge()
            purgeStoredState({storage: AsyncStorage})
            store.dispatch({type: Actions.RESET_STORE});
          }
        });
      } catch (e) {
        console.warn("While submitting",e);
      }
    }

    //console.warn(DeviceInfo.getUniqueID(), JSON.stringify(store.getState()));
  }

  constructor(props) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    super(props);


    this.store = createStore(
      rootReducer,
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
      loadSessions(params);
    }
	}
})

global.saveProgress = function(progress, reason) {
  global.storage.save({
    key: 'progress',
    id: Math.floor(Date.now()),
    expires: null,
    data: {
      progress: progress,
      reason: reason,
      userId: '-',
      timestamp: Math.floor(Date.now())
    }
  });
}

loadSessions = function(params) {
  //global.storage.remove({key:'sessions'});
  let { id, resolve, reject } = params;
  fetch('https://cut.social/public/hypnosis/sessions.json', {
		method: 'GET'
	}).then(response => {
		return response.json();
	}).then(json => {
			// console.log(json);
		if(json){
			storage.save({
				key: 'sessions',
				data: json
			});
			resolve && resolve(json);
		} else {
			reject && reject(new Error('data parse error'));
		}
	}).catch(err => {
		console.warn(err);
		reject && reject(err);
	});

}
