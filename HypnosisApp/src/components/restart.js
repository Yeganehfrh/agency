import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import '../styles';

import RNRestart from 'react-native-restart';

export default class RestartScreen extends Component {
  static navigationOptions = {
    title: 'پیکربندی',
    tabBarVisible: false
  };

  constructor(props) {
    super(props);
    global.storage.save({
      key: 'configs',
      data: {
        preventRTLWorkaroundRestart: true
      }
    });
  }

  doRestart() {
    RNRestart.Restart();
  }

  render() {
    return (
      <View style={styles.playerContainer}>
        <Text style={[{textAlign: 'center'},styles.title,styles.rtl]}>تنظیمات انجام شد.</Text>
        <Text style={[{textAlign: 'center'},styles.instructions,styles.rtl]}>برای اعمال تنظیمات باید برنامه دوباره اجرا کنید.</Text>
        <Text style={[{textAlign: 'center'},styles.instructions,styles.rtl]}>اگر بعد از فشردن دکمهٔ زیر، برنامه به صورت خودکار دوباره اجرا نشد، آن را به صورت دستی اجرا کنید.</Text>
          <Button
            style={styles.restartButton}
            textStyle={styles.buttonText}
            onPress={() => this.doRestart()}>
              راه‌اندزی مجدد
          </Button>
      </View>
    );
  }
}
