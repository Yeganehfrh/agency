import { Component } from '@angular/core';

import { HelpPage } from '../help/help';
import { SessionsPage } from '../sessions/sessions';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SessionsPage;
  tab3Root = HelpPage;

  constructor() {

  }
}
