import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-flat-button';

export default class SessionInfoScreen extends Component {
  static navigationOptions = {
    title: 'درباره',
    tabBarVisible: false
  };
  
  openPlayer(audioFile) {
    this.props.navigation.navigate('Player',{audioFile: audioFile});
  }

  close() {
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var audioFile = this.props.navigation.state.params.session.audioFile;
    var instructions = this.props.navigation.state.params.session.instructions;

    return (
      <View style={styles.container}>
        <Text style={[styles.content,styles.rtl]}>
          {instructions}
        </Text>
        <Button
          type="positive"
          containerStyle={styles.button}
          onPress={() => this.openPlayer(audioFile)}>
          <Text style={styles.rtl}>شروع</Text>
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
    backgroundColor: '#FCFCFC',
  },
  content: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  rtl: {
    fontFamily: 'Samim'
  },
  button: {
    width: 100,
    height: 50
  },
});
