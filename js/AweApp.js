/**
 * Created by sunshitao on 2016/10/31.
 */
import React from 'React';
import Splash from './Splash';
import {connect} from 'react-redux';

import {NavGoBack} from './utils';

import {
    View,
    StatusBar,
    StyleSheet,
    AppState,
    Platform,
    Navigator,
    BackAndroid,
} from 'react-native';

//export const STATUS_BAR_HEIGHT = (Platform.OS === "android" ? 80 : 25);
export const STATUS_BAR_HEIGHT = 80;

let Styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navigator:{
        flex:1,
    },
    statusbar:{
        height:STATUS_BAR_HEIGHT,
        borderColor:'red',
        borderWidth:1
    }
});
let _navigator;

function AweApp():ReactClass<{}>{
    class AweRoot extends React.Component{
        constructor(){
            super();
            this.renderScene = this.renderScene.bind(this);
            this.goBack = this.goBack.bind(this);
            BackAndroid.addEventListener('hardwareBackPress',this.goBack);
            this.state = {};
        }
        componentDidMount(){
            AppState.addEventListener('change', this.handleAppStateChange);
        }
        componentWillUnmount(){
            AppState.removeEventListener('change',this.handleAppStateChange);
        }

        goBack(){
             return NavGoBack(_navigator)
        }

        handleAppStateChange(state){
            if(state === "active"){
                //todo 激活状态下要做的事情
            }
        }
        renderScene(route,navigator){
            let Component = route.component;
            _navigator = navigator;
            return (
                <Component navigator={navigator} route={route} />
            )
        }

        render(){
            return (
                <View style={Styles.container}>
                    <StatusBar
                        translucent={true}
                        backgroundColor='rgba(187,255,255,0.2)'
                        style={Styles.statusbar}
                        />
                    <Navigator
                        ref="navigator"
                        style={Styles.navigator}
                        configureScene={(route)=>{
                            return Navigator.SceneConfigs.PushFromRight;
                        }}
                        renderScene={this.renderScene}
                        initialRoute={{
                            component:Splash,
                            name:'Splash'
                        }}
                        >
                    </Navigator>
                </View>
            )
        }
    }
    return AweRoot;
}
//function select(store){
//    return {
//        store:store
//    };
//}
//export default connect(select)(AweApp());
export default AweApp();
