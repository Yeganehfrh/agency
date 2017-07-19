import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import '../styles';

export default class ContactUsScreen extends Component {
  static navigationOptions = {
    title: 'تماس با ما',
    tabBarVisible: true
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.playerContainer}>
        <Text style={[styles.title,styles.rtl]}>تماس با ما</Text>
        <Text style={[styles.help,styles.rtl]}>از طریق کانال تلگرام CognitiveHypnosis با ما مکاتبه نمایید. قدردان نظرات، پیشنهادات و انتقادات شما خواهیم بود.</Text>
           <ActionButton
             hideShadow={true}
             buttonColor="transparent"
             position='center'
             icon={<Icon name='close' color='grey' size={40} />}
             onPress={() => this.props.navigation.navigate('Home')}>
           </ActionButton>
      </View>
    );
  }


  render_test_web() {
      return (
        <WebView
          source={{uri: 'https://cog.onto.ir/hypnosis'}}
          style={{marginTop: 20}}
        />
      );
  }
}
