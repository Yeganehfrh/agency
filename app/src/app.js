import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  I18nManager,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';


import ScrollableTabView from 'react-native-scrollable-tab-view';

import Home from './components/home';
import Help from './components/help';
import Sessions from './components/sessions';

import IconTabBar from './components/icontabbar';

import AboutScreen from './components/about.js';

export default class HypnosisApp extends Component {
  navigator = StackNavigator({
    About: { screen: AboutScreen }
  });

  render() {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  tab: {
    fontFamily: 'Samim'
  }
});

AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
