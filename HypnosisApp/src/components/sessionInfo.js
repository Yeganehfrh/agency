import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Button from 'react-native-flat-button';
import styles from '../styles';

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
      <ScrollView>
        <View style={styles.sessionInfoContainer}>
          <Text style={[styles.sessionInstructions,styles.rtl]}>
            {instructions}{'\n'}
          </Text>
          <Button
            type="positive"
            containerStyle={styles.button}
            onPress={() => this.openPlayer(session)}>
            <Text style={styles.rtl}>ادامه</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}
