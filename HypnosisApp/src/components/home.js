import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  I18nManager,
  TouchableHighlight,
  Image,
  Linking
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ProgressCircle from 'react-native-progress/Circle';

import Button from 'apsl-react-native-button';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

import styles from '../styles';

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'خانه',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="pie-chart" size={26} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: false,
      preventRTLWorkaroundRestart: false,
      askToEditProfile: true
    };

  }

  async loadProgress() {

  }

  toPersianDigits(num) {
    var res = '';
    var pos;
    var sNum = num.toString()
    persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    for (var i=0; i < sNum.length; i++)
      if ((pos = persianNumbers[sNum.charAt(i)] ))
        res += pos;
      else
        res += sNum.charAt(i);
    return res;
  }

  async signup(email, pass) {
      try {
        //await firebase.auth().createUserWithEmailAndPassword(email, pass);
        //console.warn("Account created");
      } catch (error) {
          console.log(error.toString())
      }
  }

  openUrl(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  }

  showProfileEdit() {
    
    var self = this;

    global.storage.load({
      key: 'askToEditProfile'
    }).then(ret => {      
      if (ret.askToEditProfile)
        this.props.navigation.navigate("EditProfile");
    }).catch(err => {
      if (this.state.preventRTLWorkaroundRestart && this.state.askToEditProfile)
        this.props.navigation.navigate("EditProfile");
    });
  }

  componentWillMount() {

    var self = this;

    global.storage.load({
      key: 'configs',
      autoSync: true
    }).then(ret => {      
      self.setState({preventRTLWorkaroundRestart: ret.preventRTLWorkaroundRestart});
  
      if (!ret.preventRTLWorkaroundRestart && !I18nManager.isRTL) {
        this.props.navigation.navigate('Restart');
        return;
      }
      
      global.storage.load({
        key: 'askToEditProfile'
      }).then(ret => {
        self.setState({askToEditProfile: res.askToEditProfile})
      }).catch(err => {});

    }).catch(err => {
      global.storage.save({
        key: 'configs',
        data: {
          preventRTLWorkaroundRestart: true
        }
      });
      if (!I18nManager.isRTL) {
        this.props.navigation.navigate('Restart');
      }
    });
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <View style={{flex:1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../images/logo.png')}/>
            <Text style={[styles.title,{textAlign: 'center', paddingBottom:0, marginBottom:0,paddingLeft: 5, paddingRight: 5, marginLeft:0, marginRight: 0},styles.rtl]}>
              هیپنوتیزم شناختی
            </Text>
            <Text style={[styles.rtl, {fontSize:10, color: 'grey'}]}>نسخهٔ ۱.۲.۲</Text>
          </View>

          <Text style={[styles.instructions,styles.rtl,{margin: 10, backgroundColor: 'white', paddingRight: 30, paddingLeft: 30, textAlign:'left'}]}>
            خوش آمدید! بعد از خواندن راهنما، از بخش «جلسه‌ها» شروع کنید و به صوت‌های هیپنوتیزم گوش دهید.
            امتیازِ پیشرفت شما بعد از اجرای کامل یک جلسه و پاسخ به پرسش‌های آن افزایش می‌یابد.
          </Text>
        </View>

        <View style={{flex:1, flexDirection: 'row'}}>
          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => this.props.navigation.navigate('EditProfile')}>
            <Icon name="user" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            اصلاح اطلاعات تماس
            </Text>
          </Button>
        </View>


        <View style={styles.chartContainer}>
          <Text style={[styles.title,styles.rtl]}>پیشرفت شما</Text>
          <ProgressCircle 
            color="#2ecc71"
            thickness={20}
            direction='counter-clockwise'
            size={Dimensions.get('window').width/2}
            progress={(this.state.progress>100)?100:this.state.progress}
            formatText={(progress) => this.getProgressText(progress)}
            indeterminate={this.state.indeterminate}
            showsText={true} />
        </View>
        
        <View style={{flex:1, flexDirection: 'row'}}>
          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => this.props.navigation.navigate('ContactUs')}>
            <Icon name="speech" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            تماس با ما
            </Text>
          </Button>

          <Button
            style={[{flex:1, marginTop: 20, marginBottom: 30},styles.transparentButton]}
            onPress={() => this.openUrl('http://t.me/CognitiveHypnosis')}>
            <Icon name="paper-plane" size={26} color={'grey'}/>
            <Text style={[styles.buttonText, styles.rtl, {padding: 10, color: 'grey'}]}>
            کانال تلگرام
            </Text>
          </Button>
        </View>

      </ScrollView>
    );
  }

  getProgressText() {
    return <Text style={styles.rtl}>{this.toPersianDigits(Math.round(this.state.progress*100))}</Text>
  }

  updateProgress(progress) {
    this.setState({ progress: progress/100});
  }

  componentDidMount() {
    this.showProfileEdit();
    
    global.storage.getAllDataForKey('progress').then(items => {
      var progress = 0;
      items.forEach(item => {
        progress += item.progress
      });
      this.updateProgress(progress);
    }).catch(err => {
      console.error(err);
      this.updateProgress(0);
    })
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    loadProgress: () => {
      dispatch(Actions.loadProgress())
    }
  }
}

export default connect(state => ({ state: state.progress }), mapDispatchToProps)(HomeScreen);