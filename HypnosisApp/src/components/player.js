import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import styles from '../styles.js';

import Button from 'apsl-react-native-button';

import Sound from 'react-native-sound';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import RNFS from 'react-native-fs';

export default class PlayerScreen extends Component {

  static navigationOptions = {
    title: '',
    tabBarVisible: false
  };

  
  constructor(props, context) {
    super(props, context);

    Sound.setCategory('Playback');

    this.state = {
      isPlaying: false,
      isFinished: false
    };

    this.audioFile = RNFS.DocumentDirectoryPath + '/' + this.props.navigation.state.params.session.audioFile;

    this.session = this.props.navigation.state.params.session;

    // Play the sound with an onEnd callback
    this.audio = new Sound(this.audioFile, Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('Failed to load the sound', error);
        return;
      }
    });
  }

  async _handlePlaySound() {
    var self = this;
    this.setState({ isPlaying: true},function() {
      self.audio.play((success) => {
        if (success) {
          console.warn('successfully finished playing');
        } else {
          console.warn('playback failed due to audio decoding errors');
        }
      });
    });
  }

  _handleStopSound() {
    var self = this;
    this.audio.pause((success) => {
      self.setState({ isPlaying: false},function() {
      });
    });
  }

  close() {
    this._handleStopSound();
    
    var id = this.session.id;

    if (!this.session.postSurvey || this.session.postSurvey.questions.length==0) {
      this.props.navigation.navigate('Sessions');
      return;
    }

    this.props.navigation.navigate('Questions',{postSession: true, session: this.session});
  }

  render() {
    return (
         <View style={[styles.playerContainer]}>
           <Text style={[styles.rtl, styles.instructions]}>لطفاً از هدفون استفاده کنید.</Text>
           <View style={{justifyContent: 'center', alignItems:'center',flexDirection: 'row'}}>
           <Button
            isDisabled={!this.state.isPlaying}
             style={styles.pause}
             onPress={() => this._handleStopSound()}>
             <Icon name='control-pause' color='white' size={40} />
           </Button>
           <Button
             type="positive"
             isDisabled={this.state.isPlaying}
             style={styles.play}
             onPress={() => this._handlePlaySound()}>
             <Icon name='control-play' color='white' size={40} />
           </Button>
           </View>
           <ActionButton
             hideShadow={true}
             buttonColor="transparent"
             position='center'
             icon={<Icon name='close' color='grey' size={40} />}
             onPress={() => this.close()}>
           </ActionButton>
         </View>

    );
  }
}

