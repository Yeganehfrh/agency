/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import PieChart from 'react-native-pie-chart';

export default class Home extends Component {
  render() {
    //TODO improve charting
    const progress = [123, 321, 123, 789, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']

    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.header}>
            به هیپنوتیزمِ شناختی خوش آمدید!
          </Text>
          <Text style={styles.content}>
            برای شروع، به صفحهٔ جلسات مراجعه کنید.
          </Text>
        </View>
        <View style={styles.chartContainer}>
          <Text style={styles.header}>نمودار پیشرفت</Text>
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
    fontFamily: 'samim',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },
  content: {
    fontSize: 16,
    fontFamily: 'Samim',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
