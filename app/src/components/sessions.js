import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl
} from 'react-native';

import Button from 'react-native-flat-button';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import PlayerModal from './player';

import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

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
    this.openPlayer = this.openPlayer.bind(this);
    this.reloadSessions();
  }

  reloadSessions = (forceReload) => {
    if (forceReload) {
      global.storage.remove({key:'sessions'});
    }

    self = this;
    global.storage.load({
      key: 'sessions'
    }).then(ret => {
      this.setState({sessionInfo: ret.sessions});
      var cards = [];

      ret.sessions.map( function(item) {
        cards.push(
          <Card style={[styles.card,styles.rtl]} key={item.id}>
            <CardTitle>
              <Text style={[styles.title,styles.rtl]}>{item.title}</Text>
            </CardTitle>
            <CardContent>
              <Text style={[styles.content,styles.rtl]}>{item.description}</Text>
            </CardContent>
            <CardAction >
              <Button
                color="#841584"
                type="positive"
                containerStyle={styles.buttonContainer}
                onPress={() => self.openPlayer(item)}>
              <Icon name='control-play' size={30} color='rgb(255,255,255)'
              />
              </Button>
            </CardAction>
          </Card>
        );
      });
      this.setState({cards: cards});

    }).catch(err => {
      console.warn(err.message);
    });
  }

  _onRefresh = () => {
    this.setState({refreshing: true});
    this.setState({cards: []});
    this.reloadSessions(false);
    this.setState({refreshing: false});

  }

  openPlayer = (sessionInfo) => {
    this.props.navigation.navigate('Player',{audioFile:sessionInfo.audioFile});
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
        <Text style={[styles.header,,styles.rtl]}>
          لیست جلسه‌ها به شرح زیر است!
        </Text>

        {this.state.cards}

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
  buttonContainer: {
    width: 80,
    height: 50
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
    textAlign: "left"
  },
  button: {
    marginRight: 10
  },
  rtl: {
    fontFamily: 'Samim'
  },
  card: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
