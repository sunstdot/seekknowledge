/**
 * Created by sunshitao on 2016/10/31.
 */
import React from 'React';
import {connect} from 'react-redux';
import SunView from './pages/SunView';
import StarView from './pages/StarView';
import MoonView from './pages/MoonView';
import TabNavigator from 'react-native-tab-navigator';
var BackAndroid = require('BackAndroid');

import {
    View,
    Text,
    Image,
    Navigator,
    StyleSheet,
    Platform
} from 'react-native';

let Styles = StyleSheet.create({
    container:{
        flex:1
    },
    flexContainer:{
        flexDirection:'row'
    },
    cell:{
        flex:1,
        height:50,
        backgroundColor:'#C9CABB'
    },
    title:{
        fontSize:16,
        textAlign:'center',
        margin:10
    },
    selectedTextStyle:{
        color:'#000000'
    },
    textStyle:{
        color:'#34352c',
    },
    tabStyle:{
        width:30,
        height:30,
        marginLeft:8,
        borderColor:'black',
        borderWidth:1
    }
});

let AweNavigator = function(){
    class AweRoot extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                selectedTab:"SunView"
            }
        }
        componentDidMount(){
            BackAndroid.addEventListener('hardwareBackPress',this.handleBackButton)
        }
        componentWillUnmount(){
            BackAndroid.removeEventListener('hardwareBackPress',this.handleBackButton)
        }
        handleBackButton(){
            const {navigator} = this.props;
            if(navigator && navigator.getCurrentRoutes().length > 1){
                navigator.pop();
                return true;
            }
        }
        onColumnPress(){
            console.log('---------column pressed');

        }
        onDailyPress(){
            console.log('---------daily pressed');
        }
        render(){
            return (
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'SunView'}
                        title="日"
                        renderIcon={()=><Image source={require('./imgs/sun.png')} style={Styles.tabStyle} />}
                        renderSelectedIcon={()=><Image source={require('./imgs/sunSelected.png')} style={Styles.tabStyle} />}
                        badgeText="1"
                        titleStyle={Styles.textStyle}
                        selectedTitleStyle={Styles.selectedTextStyle}
                        onPress = {() => this.setState({selectedTab:'SunView'})}>
                        <SunView {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'StarView'}
                        title="星"
                        renderIcon={()=><Image source={require('./imgs/star.png')} style={Styles.tabStyle} />}
                        renderSelectedIcon={()=><Image source={require('./imgs/starSelected.png')} style={Styles.tabStyle} />}
                        badgeText="1"
                        titleStyle={Styles.textStyle}
                        selectedTitleStyle={Styles.selectedTextStyle}
                        onPress = {() => this.setState({selectedTab:'StarView'})}>
                        <StarView {...this.props} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'MoonView'}
                        title="月"
                        renderIcon={()=><Image source={require('./imgs/moon.png')} style={Styles.tabStyle} />}
                        renderSelectedIcon={()=><Image source={require('./imgs/moonSelected.png')} style={Styles.tabStyle} />}
                        badgeText="1"
                        titleStyle={Styles.textStyle}
                        selectedTitleStyle={Styles.selectedTextStyle}
                        onPress = {() => this.setState({selectedTab:'MoonView'})}>
                        <MoonView {...this.props} />
                    </TabNavigator.Item>
                </TabNavigator>
            )
        }
    }
    return AweRoot;
};
//
//function select(store){
//    return {store}
//}

//export default connect(select)(AweNavigator());
export default AweNavigator();