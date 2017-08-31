import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  ScrollView,
  Picker,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

import {Divider} from 'react-native-elements';

import styles from '../styles';

import Button from 'apsl-react-native-button';

import { FormLabel, FormInput } from 'react-native-elements'

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
    this.props.submit(this.state.answers)
    if (this.state.postSession) {
      global.saveProgress(10, "postSurveyDone");
      this.props.navigation.navigate('Sessions');      
    } else {
      this.props.navigation.navigate('SessionInfo',{session: this.state.session})
    }
  }

  updateAnswers = (qIndex, qId, value) => {
    var {answers, q} = this.state;
    console.warn("updating ", qIndex, qId, value, "from ", q[qIndex]);    
    answers[qIndex] = {question: qId, value: value}
    q[qIndex] = value
    this.setState({answers:answers, q: q});
  }

  componentDidMount() {
    var answers = [{question: 99, value: ''}];
    if (this.state.postSession) {
      var qs = this.props.navigation.state.params.session.postSurvey.questions;
      qs.map((o, i) => answers.push({question: o.id, value: 0}))
      this.setState({
        answers: answers,
        survey: this.props.navigation.state.params.session.postSurvey,
        questions: qs});
    } else {
      var qs = this.props.navigation.state.params.session.preSurvey.questions;
      qs.map((o, i) => answers.push({question: o.id, value: 0}))
      this.setState({
        answers: answers,
        survey: this.props.navigation.state.params.session.preSurvey,
        questions: this.props.navigation.state.params.session.preSurvey.questions});
    }
  }

  renderOptions = (opt, index) => {
    return(
        <Picker.Item label={opt.label} value={opt.key} key={opt.key} />
    )
  }

  renderQuestion = (question, qIndex) => {
  
    //this.updateAnswers(qIndex, question.id, "0");

    return(
        <View style={styles.container} key={question.id}>
            <Text style={styles.questionText}>{question.content}</Text>
            {question.options!==undefined && question.options.length>0 && (
            <Picker selectedValue={(this.state.q[qIndex]==0)?1:this.state.q[qIndex]} // This is crazy, but sets default value to zero!
              onValueChange={(value, index) => this.updateAnswers(qIndex, question.id, value)}
              itemStyle={styles.questionText}>
              {question.options.map((o,i) => this.renderOptions(o,i))}
            </Picker>
            )}
        </View>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    var topSection

    return (
      <ScrollView style={styles.container}>
        <Text style={[styles.title, styles.rtl, {textAlign: 'center'}]}>پرسش‌ها</Text>
        
        {this.state.postSession && (
          <Text style={[styles.instructions, styles.rtl, {textAlign: 'left'}]}>با تشکر از شما، این جلسه به پایان رسید. با پاسخ به پرسش‌های زیر علاوه بر یاریِ ما در پژوهشی دانشگاهی در حوزهٔ علوم شناختی، ده امتیاز اضافی کسب می‌کنید. هیچ پاسخ درست یا غلطی وجود ندارد و تنها شما معیار بهترین پاسخ هستید.</Text>
          )
        }

        {this.state.postSession && (this.state.session.id!==101) && (
          <KeyboardAvoidingView>
            <Text style={[styles.questionText,{paddingBottom: 0}]}>در حداکثر سه دقیقه، به طور خلاصه در چند خط بگویید چه اتفاقی از زمان شروع نگاه کردن به نشانه افتاد.</Text>
            <TextInput
              onChangeText={(text) => this.updateAnswers(0, 99, text)} // question.id=99
              numberOfLines={4}
              placeholderTextColor={"lightgrey"}
              placeholder={"تجربهٔ شخصی شما"}
              multiline={true}
              style={[styles.rtl,{color:'black',margin:10}]}/>
          </KeyboardAvoidingView>
        )}

        {this.state.questions.map((q,i) => this.renderQuestion(q,i+1))}

        <View style={styles.buttonsContainer}>
          {!this.state.postSession &&
            <Button
                style={[styles.transparentButton, {flex:1}]}
                textStyle={[styles.buttonText, styles.rtl,{color: 'grey'}]}
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