import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  I18nManager,
} from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

//import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomeScreen from './components/home';
import HelpScreen from './components/help';
import SessionsScreen from './components/sessions';
import AboutScreen from './components/about.js';
import PlayerScreen from './components/player.js';

//import IconTabBar from './components/icontabbar';


const AppTabNavigator = TabNavigator({
  Home: { screen: HomeScreen },
  Sessions: { screen: SessionsScreen },
  Help: { screen: HelpScreen }
}, {
  lazy: false,
  tabBarPosition: 'bottom',
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
      fontFamily: 'Samim',
      fontSize: 14,
      paddingBottom: 5
    },
    iconStyle: {
    }
  },
});

const HypnosisApp = StackNavigator({
  Tabs: { screen: AppTabNavigator },  
  About: { screen: AboutScreen },
  Player: { screen: PlayerScreen }

},{
  initialRouteName: 'Tabs',
  headerMode: 'none',
  mode: 'modal'
});

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

/*
export default class HypnosisApp extends Component {

  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom"
        lock="true"
        style={styles.container}
        tabBarTextStyle={styles.tab}
        tabBarActiveTextColor="black"
        initialPage={0}
        renderTabBar={() => <IconTabBar />}
        >
        <Help tabLabel="question"></Help>
        <Sessions tabLabel="earphones"></Sessions>
        <Home tabLabel="pie-chart"></Home>
      </ScrollableTabView>
    );
  }
}
*/


global.storage = new Storage({
	// maximum capacity, default 1000 
	size: 1000,
	storageBackend: AsyncStorage,
	defaultExpires: null,
	sync : {
    sessions(params){
      loadDefaultSessions();
    }
	}
})

loadDefaultSessions = function() {
  global.storage.remove({key:'sessions'});
  global.storage.save({
    key: 'sessions',
    data: { 
      timestamp: '234342323',
      sessions: [{
        audioFile: 'one.mp3',
        id: 100,
        title: 'آماده‌سازی و آشنایی',
        description: 'در این جلسه شما با مفاهیم هیپنوتیزم و تلقین آشنا می‌شوید. هم‌چنین راهنمای ادامهٔ کار در این جلسه ارائه می‌شود.'
      },{
        audioFile: 'one.mp3',
        id: 101,
        title: 'جلسهٔ نخست',
        description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
      },{
        audioFile: 'one.mp3',
        id: 102,
        title: 'جلسهٔ دوم',
        description: 'حالت خلسهٔ شما در این جلسه تعمیق خواهد شد. هم‌چنین برای افزایش اعتماد به نفس راه‌کاری ارائه می‌شود.'
      },{
        audioFile: 'one.mp3',
        id: 103,
        title: 'جلسهٔ چهارم',
        description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
      },{
        audioFile: 'one.mp3',
        id: 104,
        title: 'جلسهٔ نهایی',
        description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
      }]
    },
  });
}

AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
