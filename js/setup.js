/**
 * Created by sunshitao on 2016/10/28.
 */
//import React from 'React';
var React = require('React');
var { Provider } = require('react-redux');
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import configureStore from './store/configureStore';

import AweApp from './AweApp';

let Styles = StyleSheet.create({
    container:{
        flex:1
    }
});

function setup(){

    class Root extends React.Component{
        state:{
            isLoading:boolean,
            store:any
        }
        constructor(){
            super();
            this.state = {
                isLoading:false,
                store:configureStore
            }
        }
        render(){
            if(this.state.isLoading){
                return null;
            }
            return(
                <Provider store={this.state.store}>
                    <AweApp />
                </Provider>
            )
        }
    }
    return Root;
}
export default setup();