import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import {NativeAudio} from '@ionic-native/native-audio';
//import { MediaPlugin, MediaObject } from '@ionic-native/media';

@Component({
  selector: 'page-sessions',
  templateUrl: 'sessions.html'
})
export class SessionsPage {

  audioFilePath = "";
  audioDir = "";
  items = [];

  constructor(public navCtrl: NavController, private file: File) {


    this.audioFilePath = this.file.applicationDirectory + 'assets/audio/one.mp3';

    this.items = [
      {"title":"جلسهٔ نسخت","description":"آشنایی به هیپنوتیزم در این جلسه صورت می‌گیرد. هم‌چنین حالت خلسه را برای نخستین بار گوش می‌کنید."},
      {"title":"جلسهٔ دوم","description":"در این جلسه با نوشتن خودکار با دست مخالف آشنا می‌شوید. این صوت به شما کمک می‌کند تا افکار ناخودآگاه خویش را بر کاغد بیاورید."}
    ];

    window.plugins.NativeAudio.preloadComplex('one', this.audioFilePath, 1, 1, 0).then(function(){
      console.log("Audio loaded");
    }, function(err) {
      alert(err);
    });
    window.plugins.NativeAudio.play('one', () => console.log('audio is done playing.'));
  }
}
