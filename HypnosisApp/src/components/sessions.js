import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ToastAndroid
} from 'react-native';

import {
  Card,
  CardAction,
  CardContent,
  CardTitle
} from 'react-native-card-view';

import Button from 'apsl-react-native-button';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import styles from '../styles';

export default class SessionsScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'جلسه‌ها',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="earphones" size={32} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      sessions: [],
      refreshing: false,
      progress: 0
    }
    this.reloadSessions = this.reloadSessions.bind(this);
    this.openSession = this.openSession.bind(this);

    global.storage.getAllDataForKey('progress').then(items => {
      var progress = 0;
      items.forEach(item => {
        progress += item.progress
      });
      this.setState({progress: progress});
    }).catch(err => {
      console.error(err);
      this.setState({progress: progress});
    })

    this.reloadSessions(false);
  }

  renderCard = (session) => {
    return(
      <Card key={session.id}>
        <CardTitle>
          <Text style={[styles.sessionsCardTitle,styles.rtl]}>{session.title}</Text>
        </CardTitle>
        <CardContent>
          <Text style={[styles.sessionsCardContent,styles.rtl]}>{session.description}</Text>
        </CardContent>
        
          <Button
            style={styles.positive}
            textStyle={styles.buttonText}
            onPress={() => this.openSession(session)}>
              شروع
          </Button>
      </Card>
    );
  }

  reloadSessions = (forceReload) => {

    if (forceReload) {
      global.storage.remove({key:'sessions'});
    }

    var self = this;
    global.storage.load({
      key: 'sessions',
      autoSync: true
    }).then(ret => {
      self.setState({sessions: ret.sessions});
      this.setState({refreshing: false});
    }).catch(err => {
      ToastAndroid.showWithGravity('امکان ارتباط با سرور مهیا نیست. لطفاً تنظیمات شبکهٔ خود را بررسی کنید.', ToastAndroid.LONG, ToastAndroid.CENTER);
      this.setState({refreshing: false});
    });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({sessions: []});
    this.reloadSessions(true);

  }

  openSession = (session) => {
    var id = session.id;

    if (!session.preSurvey || session.preSurvey.questions.length==0) {
      this.props.navigation.navigate('SessionInfo',{session: session});
      return;
    }

    this.props.navigation.navigate('Questions',{postSession: false, session: session});
  }

  render() {

    return (
      <ScrollView style={[styles.container,styles.sessionsScrollView]}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <Text style={[styles.rtl, styles.instructions]}>
          با تکمیل اطلاعات تماس و گوش دادن به جلسه‌های موجود، جلسه‌های جدید برای شما قابل دسترس می‌شود.
        </Text>
        <View style={{flex: 1}}>
          {this.state.sessions.filter(s => s.minProgress<=this.state.progress).map(this.renderCard)}
        </View>
        {!this.state.refreshing &&
          <Button
            style={[{marginTop: 0},styles.transparentButton]}
            onPress={() => this._onRefresh()}>
            <View style={{flex:1, flexDirection:'row', alignItems: 'center',justifyContent: 'center'}}>
            <Icon name='refresh' color='grey' size={30} style={{padding: 10}}/>
            <Text style={[styles.buttonText, styles.rtl, {color: 'grey'}]}>به‌روزرسانی جلسه‌ها</Text>
            </View>
          </Button>
        }
      </ScrollView>
    );
  }
}