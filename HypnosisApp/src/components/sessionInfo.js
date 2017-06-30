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
  
  openPlayer(session) {
    this.props.navigation.navigate('Player',{session: session});
  }

  close() {
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var session = this.props.navigation.state.params.session;
    var instructions = this.props.navigation.state.params.session.instructions;

    return (
      <View style={styles.container}>
        <Text style={[styles.content,styles.rtl]}>
          {instructions}
        </Text>
        <Button
          type="positive"
          containerStyle={styles.button}
          onPress={() => this.openPlayer(session)}>
          <Text style={styles.rtl}>ادامه</Text>
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
    fontFamily: 'samim'
  },
  button: {
    width: 100,
    height: 50
  },
});
