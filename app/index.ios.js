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
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import Home from './components/home';
import Sessions from './components/sessions';


export default class HypnosisApp extends Component {
  render() {
    return (
      <ScrollableTabView tabBarPosition="bottom"
        style={{marginTop: 20 }}
        tabBarActiveTextColor="black"
        tabBarUnderlineStyle={{backgroundColor: "red"}}
        >
        <Sessions tabLabel="Home"></Sessions>
        <Sessions tabLabel="About"></Sessions>
        <Sessions tabLabel="Sessions"></Sessions>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
