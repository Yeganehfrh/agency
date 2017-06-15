/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  I18nManager
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Home from './components/home';
import Help from './components/help';
import Sessions from './components/sessions';


export default class HypnosisApp extends Component {
  render() {
    I18nManager.allowRTL(true);
    return (
      <ScrollableTabView tabBarPosition="bottom"
        lock="true"
        style={{marginTop: 20 }}
        tabBarActiveTextColor="black"
        tabBarUnderlineStyle={{backgroundColor: "red"}}
        >
        <Home tabLabel="Home"></Home>
        <Sessions tabLabel="Sessions"></Sessions>
        <Help tabLabel="Help"></Help>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
