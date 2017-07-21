import React, { Component } from 'react';
import { Text, View } from 'react-native';

import ActionButton from 'react-native-action-button';
import styles from '../styles.js';

import Button from 'apsl-react-native-button';

import Sound from 'react-native-sound';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import RNFS from 'react-native-fs';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class PlayerScreen extends Component {

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

  componentDidMount() {
    this.props.submit({session: this.session.id, action: 'started', timestamp: Math.floor(Date.now())})
  }

  async _handlePlaySound() {
    var self = this;
    this.setState({ isPlaying: true},function() {
      this.props.submit({session: self.session.id, action: 'played', timestamp: Math.floor(Date.now())})
      self.audio.play((success) => {
        global.saveProgress(21, "sessionFinished");
        this.props.submit({session: self.session.id, action: 'finished', timestamp: Math.floor(Date.now())})
        if (success && this.session && this.session.postSurvey && this.session.postSurvey.questions.length>0) {
        
            this.props.navigation.navigate('Questions',{postSession: true, session: this.session});
        } else {
          this.props.navigation.navigate('Sessions');
        }
      });
    });
  }

  _handleStopSound() {
    var self = this;
    this.audio.pause((success) => {
      this.props.submit({session: self.session.id, action: 'paused', timestamp: Math.floor(Date.now())})
      self.setState({ isPlaying: false},function() {
      });
    });
  }

  close() {
    this._handleStopSound();
    
    var id = this.session.id;

    this.props.submit({session: this.session.id, action: 'closed', timestamp: Math.floor(Date.now())})

    this.props.navigation.navigate('Sessions');

/*
    if (!this.session.postSurvey || this.session.postSurvey.questions.length==0) {
      this.props.navigation.navigate('Sessions');
      return;
    }

    this.props.navigation.navigate('Questions',{postSession: true, session: this.session});
*/
  }

  render() {
    return (
         <View style={[styles.playerContainer]}>
           <Text style={[styles.rtl, styles.instructions]}>لطفاً از هدفون استفاده کنید.</Text>
           <View style={{justifyContent: 'center', alignItems:'center',flexDirection: 'row'}}>
           <Button
             isDisabled={!this.state.isPlaying}
             disabledStyle={{opacity:0.1}}
             style={[styles.pause, {backgroundColor: 'transparent'}]}
             onPress={() => this._handleStopSound()}>
             <Icon name='control-pause' color='red' size={40} />
           </Button>
           <Button
             isDisabled={this.state.isPlaying}
             disabledStyle={{opacity:0.1}}
             style={[styles.play, {backgroundColor: 'transparent'}]}
             onPress={() => this._handlePlaySound()}>
             <Icon name='control-play' color='green' size={40} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    submit: (payload) => {
      dispatch(Actions.submitTimestamp(payload))
    }
  }
}

export default connect(state => ({ state: state.timestamps }), mapDispatchToProps)(PlayerScreen);