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
  Linking,
  Picker
} from 'react-native';

import ActionButton from 'react-native-action-button';
import Button from 'apsl-react-native-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Markdown from 'react-native-easy-markdown';

import '../styles';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';


class EditProfileScreen extends Component {

    static navigationOptions = {
    tabBarLabel: 'پروفایل',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="user" size={26} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };


  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      gender: "",
      phone: "",
      email: "",
      askToEditProfile: "",
      firstTime: true
    }
  }

  componentWillMount() {
    var self = this;

    global.storage.load({
      key: 'profile',
      autoSync: true
    }).then(ret => {
      self.setState({firstTime: false});
      self.setState({name: ret.name});
      self.setState({age: ret.age});
      self.setState({gender: ret.gender});
      self.setState({email: ret.email});
      self.setState({phone: ret.phone});
      if ((ret.name===undefined || ret.name.trim().length===0) && (ret.phone===undefined || ret.phone.trim().length===0)) {
        self.setState({firstTime: true});
      }
    }).catch(err => {
      self.setState({firstTime: true});
      //console.error(err);
    });
  }

  cancel() {
    global.storage.save({
      key: 'askToEditProfile',
      data: {
        askToEditProfile: false
      },
      expires: null
    });
    this.props.navigation.navigate('Home');
  }

  submitProfile() {

    var payload = {
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      firstTime: false,
      timestamp: Math.floor(Date.now())}

    global.storage.save({
      key: 'askToEditProfile',
      data: {
        askToEditProfile: false
      },
      expires: null
    });

    storage.save({
			key: 'profile',
      data: payload,
      expires: null
    });
           
    if (this.state.phone!==undefined && this.state.name!==undefined
      && this.state.phone.trim()!=="" && this.state.name.trim()!=""
      && this.state.firstTime) {
      global.saveProgress(4, "profileEdited");
    }

    this.props.submit(payload)
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Markdown markdownStyles={{block: {backgroundColor: 'white', padding:10, margin: 10},text:{fontSize: 13, color: 'black', fontFamily:'samim'},strong: {fontFamily: 'samim'},h1:{padding: 10, paddingTop: 20, fontSize: 22, color:'grey',fontFamily:'samim'}}}>
          {
          '# اطلاعات تماس' +
          '\n\n' +
          'تکمیل این اطلاعات اختیاری است و تنها برای اعلام برندگان مورد استفاده قرار می‌گیرد.' +
          ' برای اطلاع از شرایط شرکت در قرعه‌کشی به صفحهٔ «راهنما» مراجعه نمایید.' +
          '\n'+
          'جهت رعایت حریم خصوصی شما، این اطلاعات قابل اتصال به پاسخ‌های شما، امتیازهای شما و دیگر اطلاعات جلسه‌ها نیست، و بعد از اعلام نتایج از بین خواهد رفت.' +
          '\n\n'
          }
        </Markdown>

        <KeyboardAvoidingView behavior={'padding'}>
          <Text style={[styles.questionText,{paddingBottom: 0}]}>نام</Text>
          <TextInput
            onChangeText={(text) => this.setState({name: text})}
            placeholderTextColor={"lightgrey"}
            placeholder={"نام و نام‌خانوادگی"}
            multiline={false}
            value={this.state.name}
            style={[styles.rtl,{color:'black', margin:10}]}/>

          <Text style={[styles.questionText,{paddingBottom: 0}]}>پست‌الکترونیکی</Text>
          <TextInput
            onChangeText={(text) => this.setState({email: text})}
            placeholderTextColor={"lightgrey"}
            placeholder={"پست الکترونیکی"}
            multiline={false}
            keyboardType={'email-address'}
            value={this.state.email}
            style={[styles.rtl,{color:'black', margin:10}]}/>

          <Text style={[styles.questionText,{paddingBottom: 0}]}>تلفن</Text>
          <TextInput
            onChangeText={(text) => this.setState({phone: text})}
            placeholderTextColor={"lightgrey"}
            placeholder={"شمارهٔ تلفن همراه"}
            multiline={false}
            value={this.state.phone}
            style={[styles.rtl,{color:'black', margin:10}]}/>

        </KeyboardAvoidingView>
        <View style={styles.buttonsContainer}>

          <Button
            style={[styles.transparentButton, {flex:1}]}
            textStyle={[styles.buttonText, styles.rtl,{color: 'grey'}]}
            onPress={() => {this.cancel()}}>
            بازگشت
          </Button>

          <Button
            style={styles.positive}
            textStyle={styles.buttonText}
            onPress={() => {this.submitProfile()}}>
              ذخیره شود
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
      dispatch(Actions.submitProfile(payload))
    }
  }
}

export default connect(state => ({ state: state.profile }), mapDispatchToProps)(EditProfileScreen);