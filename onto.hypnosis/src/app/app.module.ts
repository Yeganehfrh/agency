import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { CogHypnosisApp } from './app.component';

import { SessionsPage } from '../pages/sessions/sessions';
import { HelpPage } from '../pages/help/help';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { File } from '@ionic-native/file';
import { NativeAudio } from '@ionic-native/native-audio';

@NgModule({
  declarations: [
    CogHypnosisApp,
    SessionsPage,
    HelpPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(CogHypnosisApp),
    //IonicAudioModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CogHypnosisApp,
    SessionsPage,
    HelpPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
