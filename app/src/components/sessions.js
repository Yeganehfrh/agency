import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
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

export default class Sessions extends Component {


  constructor(props) {
    super(props);
    this.state = {
      playerIsOpen: false,
    }
    this.closePlayer = this.closePlayer.bind(this);
  }

  openPlayer = () => {
    this.setState({playerIsOpen: true});
  }

  closePlayer = () => {
    this.setState({playerIsOpen: false});
  }

  render() {
    var cards = [];
    var sessionsInfo = [{
      title: 'آماده‌سازی و آشنایی',
      description: 'در این جلسه شما با مفاهیم هیپنوتیزم و تلقین آشنا می‌شوید. هم‌چنین راهنمای ادامهٔ کار در این جلسه ارائه می‌شود.'
    },{
      title: 'جلسهٔ نخست',
      description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
    },{
      title: 'جلسهٔ دوم',
      description: 'حالت خلسهٔ شما در این جلسه تعمیق خواهد شد. هم‌چنین برای افزایش اعتماد به نفس راه‌کاری ارائه می‌شود.'
    },{
      title: 'جلسهٔ چهارم',
      description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
    },{
      title: 'جلسهٔ نهایی',
      description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.'
    }];
    for (var i = 0; i < sessionsInfo.length; i++) {
      cards.push(
        <Card style={styles.card} key={i}>
          <CardTitle>
            <Text style={styles.title}>{sessionsInfo[i].title}</Text>
          </CardTitle>
          <CardContent>
            <Text style={styles.contentText}>{sessionsInfo[i].description}</Text>
          </CardContent>
          <CardAction >
            <Button
              color="#841584"
              type="positive"
              containerStyle={styles.buttonContainer}
              onPress={() => this.openPlayer()}>
            <Icon name='control-play' size={30} color='rgb(255,255,255)'
            />
            </Button>
          </CardAction>
        </Card>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <PlayerModal visible={this.state.playerIsOpen}
          closePlayerCallback={this.closePlayer}></PlayerModal>
        <Text style={styles.header}>
          لیست جلسه‌ها به شرح زیر است!
        </Text>

        {cards}

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
    fontFamily: 'Samim',
    textAlign: 'center',
    margin: 10,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Samim',
    backgroundColor: 'transparent'
  },
  contentText: {
    fontFamily: "Samim",
    textAlign: "left"
  },
  button: {
    fontFamily: "Samim",
    marginRight: 10
  },
  card: {
    fontFamily: 'Samim',
    flex: 1,
    alignSelf: 'stretch'
  }
});
