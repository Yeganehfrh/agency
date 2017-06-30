import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import PieChart from 'react-native-pie-chart';

export default class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: 'خانه',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon name="pie-chart" size={26} color={ focused ? 'rgb(0,0,0)' : 'rgb(204,204,204)'}/>
    ),
  };

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
          <Text style={[styles.header,,styles.rtl]}>نمودار پیشرفت</Text>
          <PieChart
            chart_wh={250}
            series={progress}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FCFCFC'}
          />
        </View>
      </ScrollView>
    );
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
    alignItems: 'center'
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
