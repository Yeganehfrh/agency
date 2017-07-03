import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import Button from 'react-native-flat-button';

export default class AboutScreen extends Component {
  static navigationOptions = {
    title: 'درباره',
    tabBarVisible: true
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.content}>
          از طریق کانال تلگرام
        </Text>
        <Button
            color="#841584"
            type="neutral"
            containerStyle={styles.button}
            onPress={() => this.props.navigation.navigate('Help')}>
              بازگشت
            </Button>
      </View>
    );
  }


  render_test_web() {
      return (
        <WebView
          source={{uri: 'https://cog.onto.ir'}}
          style={{marginTop: 20}}
        />
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
