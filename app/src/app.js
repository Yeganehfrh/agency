import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  I18nManager,
} from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';


//import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomeScreen from './components/home';
import HelpScreen from './components/help';
import SessionsScreen from './components/sessions';
import AboutScreen from './components/about.js';

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  tab: {
    fontFamily: 'Samim'
  }
});

const HypnosisApp = StackNavigator({
  Tabs: { screen: AppTabNavigator },  
  About: { screen: AboutScreen },

},{
  initialRouteName: 'Tabs',
  headerMode: 'none'
});

AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
