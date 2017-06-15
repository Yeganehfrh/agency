import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Button from 'react-native-flat-button';

import PlayerModal from './player';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';

export default class Sessions extends Component {


  constructor(props) {
    super(props);
    this.state = {
      playerIsOpen: false,
    }
    this.closePlayer = this.closePlayer.bind(this);
  }

  openPlayer() {
    this.setState({playerIsOpen: true});
  }

  closePlayer() {
    this.setState({playerIsOpen: false});
  }

  render() {
    var cards = [];
    for (var i = 0; i < 5; i++) {
      cards.push(
        <Card style={styles.card} key={i}>
          <CardTitle>
            <Text style={styles.title}>Session {i+1}</Text>
          </CardTitle>
          <CardContent>
            <Text>در اولین جلسه، شما ده دقیقه به هیپنوتیزم اصلی گوش می‌دهید.</Text>
          </CardContent>
          <CardAction >
            <Button
              color="#841584"
              type="positive"
              containerStyle={styles.buttonContainer}
              onPress={() => this.openPlayer()}>
              پخش
            </Button>
          </CardAction>
        </Card>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <PlayerModal visible={this.state.playerIsOpen}
          closePlayerCallback={this.closePlayer}></PlayerModal>
        <Text style={styles.welcome}>
          Welcome to Cognitive Hypnosis!
        </Text>

        {cards}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    //backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    width: 200,
    height: 50,
    marginVertical: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  card: {
    flex: 1,
    alignSelf: 'stretch'
  }
});
