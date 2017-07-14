import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Picker
} from 'react-native';

import {Divider} from 'react-native-elements';

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
      questions: [],
      survey: {},
      session: props.navigation.state.params.session,
      answers: [],
      q:[],
      postSession: props.navigation.state.params.postSession
    }

    this.loadQuesions = this.loadQuesions.bind(this);
    this.loadQuesions(false);

  }

  loadQuesions = (forceReload) => {
    //TODO
  }

  continue = () => {
    var payload = {data: this.state.answers}
    this.props.submit(payload)
    if (this.state.postSession)
      this.props.navigation.navigate('Sessions');      
    else
      this.props.navigation.navigate('SessionInfo',{session: this.state.session})
  }

  updateAnswers = (qIndex, qId, value) => {
    var {answers, q} = this.state;
    if (answers.length<qIndex+1)
      answers.push({question: 0, value: 0})
    answers[qIndex] = {question: qId, value: value}
    q[qIndex] = value
    this.setState({answers:answers, q: q});
  }

  componentDidMount() {
    if (this.state.postSession) {
      this.setState({
        survey: this.props.navigation.state.params.session.postSurvey,
        questions: this.props.navigation.state.params.session.postSurvey.questions});
    } else {
      this.setState({
        survey: this.props.navigation.state.params.session.preSurvey,
        questions: this.props.navigation.state.params.session.preSurvey.questions});
    }
  }

  renderOptions = (opt, index) => {
    return(
        <Picker.Item  label={opt.label} value={opt.key} key={opt.key} />
    )
  }

  renderQuestion = (question, qIndex) => {
  
    return(
        <View style={styles.container} key={question.id}>
            <Text style={styles.questionText}>{question.content}</Text>
            <Picker selectedValue={this.state.q[qIndex]} onValueChange={(value, index) => this.updateAnswers(qIndex, question.id, value)}
              itemStyle={styles.questionText}>
              {question.options.map((o,i) => this.renderOptions(o,i))}
            </Picker>
        </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    var topSection

    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.instructions, styles.rtl]}>پرسش‌ها</Text>
        {this.state.postSession && (
          <Text style={[styles.instructions, styles.rtl]}>با تشکر از شما، این جلسه به پایان رسید. با پاسخ به پرسش‌های زیر علاوه بر یاریِ ما در پژوهشی دانشگاهی در حوزهٔ علوم شناختی، ده امتیاز اضافی کسب می‌کنید. هیچ پاسخ درست یا غلطی وجود ندارد و تنها شما معیار بهترین پاسخ هستید.</Text>
          )
        }

        <Divider style={styles.questionScreenDivider} />

        {this.state.questions.map((q,i) => this.renderQuestion(q,i))}

        <View style={styles.buttonsContainer}>
          {!this.state.postSession &&
            <Button
                style={styles.neutral}
                textStyle={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Sessions')}>
                  بازگشت
            </Button>
          }
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