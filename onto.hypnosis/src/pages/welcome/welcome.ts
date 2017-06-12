//import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'welcome.html'
})
export class WelcomePage {

    static get parameters() {
        return [[NavController], [NavParams]];
    }

    constructor(nav, navParams) {
    }

}
