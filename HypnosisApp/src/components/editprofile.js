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
      email: ""
    }
  }

  componentWillMount() {
    var self = this;
    global.storage.load({
      key: 'profile',
      autoSync: true
    }).then(ret => {
      self.setState({name: ret.name});
      self.setState({age: ret.age});
      self.setState({gender: ret.gender});
      self.setState({email: ret.email});
      self.setState({phone: ret.phone});
    }).catch(err => {
      console.error(err);
    });
  }

  submitProfile() {
    
    var payload = {
      name: this.state.name,
      gender: this.state.gender,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      timestamp: Math.floor(Date.now())}

    storage.save({
			key: 'profile',
			data: payload
    });
      
    this.props.submit(payload)
    this.props.navigation.navigate('Home');
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <Markdown markdownStyles={{block: {padding: 10},text:{fontSize: 14, color: 'black', fontFamily:'samim'},strong: {fontFamily: 'samim'},h1:{padding: 10, paddingTop: 20, fontSize: 22, color:'grey',fontFamily:'samim'}}}>
          {
          '# اطلاعات تماس' +
          '\n\n' +
          'تکمیل این اطلاعات اختیاری است و تنها برای شرکت در قرعه‌کشی مورد استفاده قرار می‌گیرد.' +
          'برای اطلاع از شرایط دریافت جایزه به صفحهٔ «راهنما» مراجعه نمایید.' +
          ' برای رعایت حریم خصوصی شما، این اطلاعات قابل اتصال به پاسخ‌های شما به پرسش‌نامه‌های جلسه‌ها و امتیازهای شما نیست.' +
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

          <View style={{flex:1, flexDirection: 'row'}}>
            <View style={{flex:1, flexDirection: 'column'}}>
            <Text style={[styles.questionText,{paddingBottom: 0}]}>جنسیت</Text>
            <Picker selectedValue={this.state.gender}
              onValueChange={(value, index) => this.setState({gender: value})}
              itemStyle={styles.questionText}>
              <Picker.Item label="زن" value="female" key="1" />
              <Picker.Item label="مرد" value="male" key="2" />
              <Picker.Item label="تمایلی به اعلام ندارم" value="none" key="3" />
            </Picker>
            </View>
            <View style={{flex:1, flexDirection: 'column'}}>
            <Text style={[styles.questionText,{paddingBottom: 0}]}>سن</Text>
            <Picker selectedValue={this.state.age}
              onValueChange={(value, index) => this.setState({age: value})}
              itemStyle={styles.questionText}>
              <Picker.Item label="زیر ۱۸ سال" value="-18" key="1" />
              <Picker.Item label="۱۸-۲۵" value="18-25" key="2" />
              <Picker.Item label="۲۶-۳۲" value="26-32" key="3" />
              <Picker.Item label="۳۳-۴۰" value="33-40" key="4" />
              <Picker.Item label="۴۱-۵۰" value="41-50" key="5" />
              <Picker.Item label="۵۱-۶۵" value="51-65" key="6" />
              <Picker.Item label="بالاتر از ۶۶ سال" value="+66" key="7" />
            </Picker>
            </View>
          </View>

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
            onPress={() => this.props.navigation.navigate('Home')}>
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