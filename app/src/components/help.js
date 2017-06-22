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

import Button from 'react-native-flat-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class Help extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          <Text style={styles.title}>درباره</Text>{'\n'}
          
          این یک متن معمولی است.
        </Text>
        <View style={styles.aboutButtonContainer}>
          <Button
            color="#841584"
            type="neutral"
            containerStyle={styles.aboutButton}
            onPress={() => (alert('Not implemented'))}>
              دربارهٔ ما
            </Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  aboutButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  aboutButton: {
    width: 100,
    height: 50
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    marginTop: 30,
    fontFamily: 'Samim'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontFamily: 'Samim'
  },
});
