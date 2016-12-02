/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {
  AppRegistry,
} from 'react-native';


//import SimpleNavigationApp from './component/MyScene';
//
//class AwesomeProject extends Component {
//  render() {
//    return (
//        <SimpleNavigationApp />
//    );
//  }
//}

//let setup = require('./js/setup');
import setup from './js/setup';

AppRegistry.registerComponent('AwesomeProject', () => setup);
