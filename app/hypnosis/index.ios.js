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
import Sound from 'react-native-sound';
import Button from 'react-native-flat-button';

export default class Hypnosis extends Component {

  constructor(props, context) {
    super(props, context);
    Sound.setCategory('Playback');
    this.sessionOne = new Sound('one.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    })
  }

  _handlePlaySound() {
    // Play the sound with an onEnd callback
    this.sessionOne.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    console.log('Playing one!');
  }

  _handleStopSound() {
    this.sessionOne.stop((success) => {

    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Cognitive Hypnosis!
        </Text>
        <Text style={styles.instructions}>
          Press "Play Sound" to start session one.
        </Text>
        <Button
          color="#841584"
          type="positive"
          containerStyle={styles.buttonContainer}
          onPress={() => this._handlePlaySound()}>
          Play Sound
        </Button>
        <Button
          color="#841584"
          type="negative"
          containerStyle={styles.buttonContainer}
          onPress={() => this._handleStopSound()}>
          Stop Sound
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
    backgroundColor: '#F5FCFF',
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

AppRegistry.registerComponent('hypnosis', () => Hypnosis);
