import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('one', 'assets/audio/one.mp3').then(function(){
      console.log("Audio loaded");
    }, function(err) {
      console.log("Audio loading failed.", err);
    });
    this.nativeAudio.play('one', () => console.log('audio is done playing.'));
  }

}
