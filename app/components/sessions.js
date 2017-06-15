import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-flat-button';

import PlayerModal from './player';

export default class Sessions extends Component {

  state = {
    playerIsOpen: false,
  }

  openPlayer() {
    this.setState({playerIsOpen: true});
  }

  render() {
    return (
      <View style={styles.container}>
        <PlayerModal visible={this.state.playerIsOpen}></PlayerModal>
        <Text style={styles.welcome}>
          Welcome to Cognitive Hypnosis!
        </Text>
        <Text style={styles.instructions}>
          Press "Open Player" to start session one.
        </Text>
        <Button
          color="#841584"
          type="positive"
          containerStyle={styles.buttonContainer}
          onPress={() => this.openPlayer()}>
          Open Player
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
