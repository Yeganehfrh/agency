import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Picker
} from 'react-native';

import styles from '../styles';

import Button from 'apsl-react-native-button';

import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../actions';

class QuestionsScreen extends Component {
  static navigationOptions = {
    title: 'درباره',
    tabBarVisible: true
  };

  constructor(props) {
    super(props);

    this.state = {
      questions: props.navigation.state.params.session.preSurvey.questions,
      survey: props.navigation.state.params.session.preSurvey,
      session: props.navigation.state.params.session
    }

    this.loadQuesions = this.loadQuesions.bind(this);
    this.loadQuesions(false);

  }

  loadQuesions = (forceReload) => {
    //TODO
  }

  continue = () => {
    var payload = {"id":14,"answers":[5,6]}
    this.props.submit(payload)
    this.props.navigation.navigate('SessionInfo',{session: this.state.session})
  }

  renderOptions = (opt) => {
    return(
        <Picker.Item label={opt.label} value={opt.value} key={opt.value} />
    )
  }

  renderQuestion = (question) => {
    return(
        <View style={styles.container} key={question.id}>
            <Text style={styles.questionText}>{question.content}</Text>
            <Picker selectedValue={2}
              itemStyle={styles.rtl}>
              {question.options.map(this.renderOptions)}
            </Picker>
        </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.instructions, styles.rtl]}>
          پرسش‌ها
        </Text>

        {this.state.questions.map(this.renderQuestion)}

        <View style={styles.buttonsContainer}>
          <Button
              style={styles.neutral}
              textStyle={styles.buttonText}
              onPress={() => this.props.navigation.navigate('Sessions')}>
                بازگشت
          </Button>
          <Button
            style={styles.positive}
            textStyle={styles.buttonText}
            onPress={() => this.continue()}>
              ادامه
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
      dispatch(Actions.submitSurvey(payload))
    }
  }
}

export default connect(state => ({ state: state.surveys }), mapDispatchToProps)(QuestionsScreen);