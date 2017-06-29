import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
} from 'react-native';

import {
  Card,
  CardAction,
  CardContent,
  CardTitle
} from 'react-native-card-view';

import FlatButton from 'react-native-flat-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import Button from 'react-native-button';

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
      sessionsInfo: [],
      refreshing: false,
      cards: []
    }
    this.reloadSessions = this.reloadSessions.bind(this);
    this.openSession = this.openSession.bind(this);
    this.reloadSessions(false);
  }

  reloadSessions = (forceReload) => {

    if (forceReload) {
      global.storage.remove({key:'sessions'});
    }

    self = this;
    global.storage.load({
      key: 'sessions',
      autoSync: true
    }).then(ret => {
      this.setState({sessionInfo: ret.sessions});
      var cards = [];


      ret.sessions.map( function(item) {
        cards.push(

          <Card styles={{card: {flex: 1}}} key={item.id}>
            <CardTitle>
              <Text style={[styles.title,styles.rtl]}>{item.title}</Text>
            </CardTitle>
            <CardContent>
              <Text style={[styles.content,styles.rtl]}>{item.description}</Text>
            </CardContent>
            <CardAction>

                <FlatButton
                  color="#841584"
                  type="positive"
                  containerStyle={styles.playButton}
                  onPress={() => self.openSession(item)}>
                  <Text style={[styles.playButtonText, styles.rtl]}>شروع</Text>
                </FlatButton>

            </CardAction>
          </Card>
        );
      });
      this.setState({cards: cards});
    }).catch(err => {
      console.error(err);
    });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({cards: []});
    this.reloadSessions(true);
    this.setState({refreshing: false});

  }

  openSession = (sessionInfo) => {
    this.props.navigation.navigate('SessionInfo',{session: sessionInfo});
  }

  render() {
    var cards = [];

    return (
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }>
        <Text style={[styles.instructions, styles.rtl]}>
با گوش دادن به جلسه‌های موجود و کسب امتیاز، جلسه‌های قفل‌شده به رایگان برایتان قابل دسترس می‌شود.
        </Text>
        <View style={{flex: 1}}>
        {this.state.cards}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
    //backgroundColor: '#F5FCFF',
  },
  playButton: {
    height: 50,
    width: 90
  },
  infoButton: {
    color: 'red'
  },
  playButtonText: {
    fontSize: 18
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  content: {
    textAlign: "left",
    paddingLeft: 10,
    fontSize: 16
  },
  instructions: {
    margin: 10,
    textAlign: "left",
    fontSize: 14
  },
  button: {
    marginRight: 10
  },
  rtl: {
    fontFamily: 'Samim'
  },
  card: {
    flex: 1,
    backgroundColor: 'red',
    alignSelf: 'stretch'
  }
});
