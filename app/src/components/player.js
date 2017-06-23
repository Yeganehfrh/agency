import React, { Component } from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';

import Button from 'react-native-flat-button';

import Sound from 'react-native-sound';

export default class PlayerScreen extends Component {

  static navigationOptions = {
    title: '',
    tabBarVisible: false
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: props.visible
    };
    Sound.setCategory('Playback');
    // Play the sound with an onEnd callback
    this.audio = new Sound('one.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.warn('Failed to load the sound', error);
        return;
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible})
  }

  _handlePlaySound(audioFile) {

    this.audio.play((success) => {
      if (success) {
        console.warn('successfully finished playing');
      } else {
        console.warn('playback failed due to audio decoding errors');
      }
    });
    console.warn('Playing one!');
  }

  _handleStopSound() {
    this.audio.stop((success) => {

    });
  }

  close() {
    this._handleStopSound();
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var audioFile = this.props.navigation.state.params.audioFile;
    return (
         <View style={styles.modal}>
           <Text style={styles.rtl}>لطفن از هدفون استفاده کنید.</Text>
           <Button
             color="#841584"
             type="positive"
             containerStyle={styles.buttonContainer}
             onPress={() => this._handlePlaySound(audioFile)}>
             <Text style={styles.rtl}>پخش صوت</Text>
           </Button>
           <Button
             color="#841584"
             type="negative"
             containerStyle={styles.buttonContainer}
             onPress={() => this._handleStopSound()}>
             <Text style={styles.rtl}>توقف پخش</Text>
           </Button>
           <Button
            type="positive"
            onPress={() => this.close()}
            containerStyle={styles.buttonContainer}>
             <Text style={styles.rtl}>بازگشت</Text>
          </Button>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    paddingTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  rtl: {
    fontFamily: 'Samim'
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
