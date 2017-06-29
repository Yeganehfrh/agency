import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import styles from '../styles.js';

import FlatButton from 'react-native-flat-button';

import Sound from 'react-native-sound';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class PlayerScreen extends Component {

  static navigationOptions = {
    title: '',
    tabBarVisible: false
  };

  constructor(props, context) {
    super(props, context);

    Sound.setCategory('Playback');

    var audioFile = props.navigation.state.params.audioFile;

    // Play the sound with an onEnd callback
    this.audio = new Sound(audioFile, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('Failed to load the sound', error);
        return;
      }
    });
  }

  _handlePlaySound(audioFile) {

    this.audio.play((success) => {
      if (success) {
        console.warn('successfully finished playing');
      } else {
        console.warn('playback failed due to audio decoding errors');
      }
    });

  }

  _handleStopSound() {
    this.audio.pause((success) => {

    });
  }

  close() {
    this._handleStopSound();
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var audioFile = this.props.navigation.state.params.audioFile;
    return (
         <View style={[styles.modal]}>
           <Text style={styles.rtl}>لطفن از هدفون استفاده کنید.</Text>
           <FlatButton
             color="#841584"
             type="positive"
             containerStyle={styles.buttonContainer}
             onPress={() => this._handlePlaySound(audioFile)}>
             <Text style={styles.rtl}>پخش صوت</Text>
           </FlatButton>
           <FlatButton
             color="#841584"
             type="negative"
             containerStyle={styles.buttonContainer}
             onPress={() => this._handleStopSound()}>
             <Text style={styles.rtl}>توقف پخش</Text>
           </FlatButton>
           <ActionButton
             hideShadow={true}
             buttonColor="transparent"
             position='center'
             icon={<Icon name='close' color='grey' size={25} />}
             onPress={() => this.close()}>
           </ActionButton>
         </View>

    );
  }
}

