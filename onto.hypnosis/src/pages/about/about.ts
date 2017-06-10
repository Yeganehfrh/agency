import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  audioFilePath = "";

  constructor(public navCtrl: NavController, private file: File, private nativeAudio: NativeAudio) {
    console.log(this.file.applicationDirectory);

    this.audioFilePath = this.file.applicationDirectory + 'www/assets/audio/one.mp3';

    alert(this.file.applicationDirectory);

    this.nativeAudio.preloadSimple('one', this.audioFilePath).then(function(){
      console.log("Audio loaded");
    }, function(err) {
      console.log("Audio loading failed.", err);
    });
    this.nativeAudio.play('one', () => console.log('audio is done playing.'));
  }
}
