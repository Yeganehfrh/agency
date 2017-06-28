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
    console.warn("[1.5]",audioFile)
    this.props.navigation.navigate('Player',{audioFile: audioFile});
  }

  close() {
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var audioFile = this.props.navigation.state.params.session.audioFile;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          این یک متن مهم دربارهٔ جلسه است.
        </Text>
        <Button
            color="#841584"
            type="neutral"
            containerStyle={styles.button}
            onPress={() => this.openPlayer(audioFile)}>
              شروع جلسه
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
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
