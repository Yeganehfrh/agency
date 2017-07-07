import {I18nManager, AppRegistry} from 'react-native';

import HypnosisApp from './src/app';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);
AppRegistry.registerComponent('HypnosisApp', () => HypnosisApp);
