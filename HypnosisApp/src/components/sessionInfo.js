import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import Button from 'apsl-react-native-button';
import styles from '../styles';

import RNFS from 'react-native-fs';

export default class SessionInfoScreen extends Component {
  static navigationOptions = {
    title: 'درباره',
    tabBarVisible: false
  };

  constructor(props) {
    super(props);

    this.state = {
      downloadOutput: "",
      audioIsAvailable: false,
      progress: 0,
      downloadJobId: -1
    }

    this.downloadSessionFile = this.downloadSessionFile.bind(this);
    this.downloadSessionFile(this.props.navigation.state.params.session);

  }

  componentDidMount() {
  }

  componentWillUnmount() {
    if (this.state.downloadJobId>-1)
      RNFS.stopDownload(this.state.downloadJobId)
  }

  toPersianDigits(num) {
    var res = '';
    var pos;
    var sNum = num.toString()
    persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    for (var i=0; i < sNum.length; i++)
      if ((pos = persianNumbers[sNum.charAt(i)] ))
        res += pos;
      else
        res += sNum.charAt(i);
    return res;
  }
  
  downloadSessionFile(session) {
    const downloadDest = RNFS.DocumentDirectoryPath + '/' + session.audioFile;
    //TODO check if file exists
    
    self = this;
    const downloadProgress = data => {
      const percentage = ((100 * data.bytesWritten) / data.contentLength) | 0;
      self.setState({ progress: percentage });
    };

    const downloadBegin = res => {
      this.setState({ output: 'در حال دریافت صوت...' });
    };

    const progressDivider = 1;
    const background = false;
    
    RNFS.exists(downloadDest).then(existsRet => {

      if (!existsRet) {
        self.setState({audioIsAvailable: false});
        var dlFile = RNFS.downloadFile({
          //fromUrl: 'http://ipv4.download.thinkbroadband.com/5MB.zip',
          fromUrl: 'https://cut.social/public/hypnosis/' + session.audioFile,
          toFile: downloadDest + '_tmp',
          begin: downloadBegin,
          progress: downloadProgress, 
          background:false,
          progressDivider: 1
        })
        this.setState({downloadJobId: dlFile.jobId});
        dlFile.promise.then(res => {
          RNFS.moveFile(downloadDest + '_tmp', downloadDest).then(res => {
            self.setState({audioIsAvailable: true});
          }).catch(err => { // Moving failed
            console.error("Cannot move downloaded file");
            self.setState({audioIsAvailable: false});
          })
        }).catch(err => { // Downloading failed
          self.setState({audioIsAvailable: false});
          //console.error(err);
        });
      } else { // Session audio file is available
        self.setState({audioIsAvailable: true});
      }
    }).catch(err => {
      console.error(err);
    });
  }

  openPlayer(session) {
    this.props.navigation.navigate('Player',{session: session});
  }

  close() {
    this.props.navigation.navigate('Sessions');
  }

  render() {
    var session = this.props.navigation.state.params.session;
    var instructions = this.props.navigation.state.params.session.instructions;

    return (
      <ScrollView>
        <View style={styles.sessionInfoContainer}>
          <Text style={[styles.sessionInstructions,styles.rtl]}>
            {instructions}{'\n'}
          </Text>
          <Button
            isDisabled = {!this.state.audioIsAvailable}
            style={styles.positive}
            textStyle={styles.buttonText}
            onPress={() => this.openPlayer(session)}>
            ادامه
          </Button>
        </View>
        {!this.state.audioIsAvailable &&
          <Text style={[styles.instructions,styles.rtl, {color:'grey'}]}>در حال دانلود صوت... {this.toPersianDigits(this.state.progress)} درصد</Text>
        }
      </ScrollView>
    );
  }
}
