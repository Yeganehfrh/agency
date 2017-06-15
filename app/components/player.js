import React, { Component } from 'react';
import { Modal, Text, StyleSheet, View } from 'react-native';

import Button from 'react-native-flat-button';

import Sound from 'react-native-sound';

export default class PlayerModal extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      visible: props.visible
    };
    Sound.setCategory('Playback');
    this.sessionOne = new Sound('one.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('Failed to load the sound', error);
        return;
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({visible: nextProps.visible})
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

  close() {
    this._handleStopSound();
    this.setState({visible: false});
  }

  render() {
    return (
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.visible}
          >
         <View style={{marginTop: 22}}
          style={styles.modal}>
           <Text>Hello</Text>
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
           <Button
            type="positive"
            onPress={() => this.close()}
            containerStyle={styles.buttonContainer}>
            Close
          </Button>
         </View>
        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
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
