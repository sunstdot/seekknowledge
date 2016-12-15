/**
 * Created by sunshitao on 2016/11/16.
 */
import React from 'react';
import {
    Dimensions,
    InteractionManager,
    Image,
    View,
    Text,
    StyleSheet
} from 'react-native';
import AweNavigator from './AweNavigator';
let {width,height} = Dimensions.get('window');

const Styles = StyleSheet.createClass({
    container:{
        flex:1
    }
});

class Splash extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component:AweNavigator,
                    name:'AweNavigator'
                });
            });
        },1000);
    }
    componentWillUnmount(){
        this.timer&&clearTimeout(this.timer);
    }
    render(){
        return (
            <View style={Styles.container}>
                <Image
                    style={{flex:1,width:width,height:height}}
                    source={require('./imgs/ic_welcome.jpeg')}
                    />
            </View>
        )
    }
}

export default Splash;