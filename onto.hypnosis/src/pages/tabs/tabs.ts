import { Component } from '@angular/core';

import { HelpPage } from '../help/help';
import { RecordingsPage } from '../recordings/recordings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RecordingsPage;
  tab3Root = HelpPage;

  constructor() {

  }
}
