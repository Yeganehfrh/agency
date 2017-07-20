import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  WebView,
  KeyboardAvoidingView,
  Linking
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Markdown from 'react-native-easy-markdown';

import '../styles';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';


class ContactUsScreen extends Component {
  static navigationOptions = {
    title: 'تماس با ما',
    tabBarVisible: true
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    }
  }

  openUrl(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  submitFeedback() {
    var payload = {name: this.state.name, content: this.state.content, timestamp: Math.floor(Date.now())}
    this.props.submit(payload)
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Markdown markdownStyles={{block: {padding: 10},text:{fontSize: 16, color: 'black', fontFamily:'samim'},strong: {fontFamily: 'samim'},h1:{padding: 10, paddingTop: 20, fontSize: 22, color:'grey',fontFamily:'samim'}}}>
          {
          '# تماس با ما' +
          '\n\n' +
          'علاوه بر فرم زیر، شما می‌توانید از طریق کانال تلگرام **CognitiveHypnosis** با ما در ارتباط باشید.' +
          ' ' + 'قدردان نظرها، پیشنهاها و انتقادات شما خواهیم بود.' +
          '\n\n'
          }
        </Markdown>
        <KeyboardAvoidingView behavior={'padding'}>
          <Text style={[styles.questionText,{paddingBottom: 0}]}>نام شما</Text>
          <TextInput
            onChangeText={(text) => this.setState({name: text})}
            placeholderTextColor={"lightgrey"}
            placeholder={"نام شما (اختیاری)"}
            multiline={false}
            style={[styles.rtl,{color:'black', margin:10}]}/>

          <Text style={[styles.questionText,{paddingBottom: 0}]}>پیام شما</Text>
          <TextInput
            maxLength={1000}
            onChangeText={(text) => this.setState({content: text})}
            numberOfLines={4}
            placeholderTextColor={"lightgrey"}
            placeholder={" پیام خود را در حداکثر ۱۰۰۰ کاراکتر اینجا بنویسید. اگر مایل به دریافت پاسخ هستید، پست‌الکترونیکی یا شمارهٔ تلفن خود را نیز ذکر کنید."}
            multiline={true}
            style={[styles.rtl,{color:'black', margin:10}]}/>
        </KeyboardAvoidingView>
        <View style={styles.buttonsContainer}>
          <Button
              style={[styles.transparentButton, {flex:1}]}
              textStyle={[styles.buttonText, styles.rtl,{color: 'grey'}]}
              onPress={() => this.props.navigation.navigate('Home')}>
                بازگشت
          </Button>
          <Button
            style={styles.positive}
            textStyle={styles.buttonText}
            onPress={() => {this.submitFeedback()}}>
              ارسال
          </Button>
        </View>

      </ScrollView>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    submit: (payload) => {
      dispatch(Actions.submitFeedback(payload))
    }
  }
}

export default connect(state => ({ state: state.feedbacks }), mapDispatchToProps)(ContactUsScreen);