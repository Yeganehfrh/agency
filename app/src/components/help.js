import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-flat-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

export default class HelpScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'راهنما',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="question" size={26} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.content,styles.rtl]}>
          <Text style={[styles.title,styles.rtl]}>راهنمای استفاده</Text>{'\n'}
          این یک متن معمولی است.
        </Text>
        <View style={styles.aboutButtonContainer}>
          <Button
            color="#841584"
            type="neutral"
            containerStyle={styles.aboutButton}
            onPress={() => this.props.navigation.navigate('About')}>
              <Text style={styles.rtl}>دربارهٔ ما</Text>
            </Button>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  aboutButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  aboutButton: {
    width: 100,
    height: 50
  },
  rtl: {
    fontFamily: 'Samim'
  },
  content: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    marginTop: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  }

});
