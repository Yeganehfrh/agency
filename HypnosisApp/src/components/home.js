import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';

import ProgressCircle from 'react-native-progress/Circle';

export default class HomeScreen extends Component {

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
    };
  }

  render() {
    //TODO improve charting
    const progress = [123, 23, 200]
    const sliceColor = ['#FCFCFC','#2196F3','#0568AA']

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={[styles.header,styles.rtl]}>
            به هیپنوتیزمِ شناختی خوش آمدید!
          </Text>
          <Text style={[styles.content,styles.rtl]}>
            شما هنوز در امتیازی کسب نکرده‌اید.{'\n'}
            برای شروع، به صفحهٔ جلسه‌ها مراجعه کنید.
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <Text style={[styles.header,,styles.rtl]}>پیشرفت شما</Text>
          <ProgressCircle 
            color="#2ecc71"
            thickness={20}
            direction='counter-clockwise'
            size={Dimensions.get('window').width/2}
            progress={this.state.progress}
            formatText={(progress) => this.getProgressText(progress)}
            indeterminate={this.state.indeterminate}
            showsText={true} />
        </View>
      </ScrollView>
    );
  }

  getProgressText() {
    return <Text style={styles.rtl}>۶۳</Text>;
  }

  updateProgress() {
    //TODO calc progress
    setTimeout(() => {
      this.setState({ progress: 0.63});
    }, 500);
  }

  componentDidMount() {
    this.updateProgress();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    paddingTop: 30
  },
  chartContainer: {
    justifyContent: 'center',
    backgroundColor: '#FCFCFC',
    alignItems: 'center',
    flex: 1,
    paddingTop: 20
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
  rtl: {
    fontFamily: 'samim'
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
