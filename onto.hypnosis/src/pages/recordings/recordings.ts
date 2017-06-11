import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-recordings',
  templateUrl: 'recordings.html'
})
export class RecordingsPage {

  audioFilePath = "";
  items = [];

  constructor(public navCtrl: NavController, private file: File, private nativeAudio: NativeAudio) {
    console.log(this.file.applicationDirectory);

    this.audioFilePath = 'assets/audio/one.mp3';

    this.items = [
      {"title":"جلسهٔ نسخت","description":"آشنایی به هیپنوتیزم در این جلسه صورت می‌گیرد. هم‌چنین حالت خلسه را برای نخستین بار گوش می‌کنید."},
      {"title":"جلسهٔ دوم","description":"در این جلسه با نوشتن خودکار با دست مخالف آشنا می‌شوید. این صوت به شما کمک می‌کند تا افکار ناخودآگاه خویش را بر کاغد بیاورید."}
    ];

    this.nativeAudio.preloadComplex('one', this.audioFilePath, 1, 1, 0).then(function(){
      console.log("Audio loaded");
    }, function(err) {
      console.log("Audio loading failed.", err);
    });
    this.nativeAudio.play('one', () => console.log('audio is done playing.'));
  }
}
