/**
 * Created by sunshitao on 2016/11/18.
 */
import React from 'react';
import {
    Dimensions,
    View,
    Image,
    Text,
    StyleSheet,
    InteractionManager,
    TouchableOpacity
} from 'react-native';

import {NavGoBack} from "../utils";
import LoadingView from "../component/LoadingView";


import {connect} from "react-redux";
const defaultColor = "#f5f5f5";
const selectColor = "#fff";


const {width,height} = Dimensions.get('window');

const PARALLAX_HEADER_HEIGHT = 100;
const STICKY_HEADER_HEIGHT = 45;



const Styles = StyleSheet.create({
    separator:{
        marginLeft:8
    },
    separatorGood:{
        height:1,
        backgroundColor:'#eee'
    },
    font:{
        fontSize:12.5,
        color:'#555555'
    },
    item_image:{
        width:60,
        height:60,
        margin:10,
        borderRadius:5
    }
});



class StoreDetails extends React.Component{
    constructor(props){
        super(props);
        this.buttonBackAction = this.buttonBackAction.bind(this);
        this.topItemAction = this.topItemAction.bind(this);
        this.collectionAction = this.collectionAction.bind(this);

        this.renderItemLeft = this.renderItemLeft.bind(this);
    }
    buttonBackAction(){
        const {navigator} = this.props;
        return NavGoBack(navigator);
    }
    topItemAction(){
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            navigator.push({
                component:''
            })
        })
    }
    collectionAction(){

    }
    renderTopLayout(){
        const {name} = this.props.params.name;
        return (
            <View style={{height:48,flexDirection:'row',backgroundColor:'black'}}>
                <View style={{width:48,height:48,justifyContent:'center'}}>
                    <TouchableOpacity onPress = {()=> {this.buttonBackAction()}} style={{justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../imgs/ic_center_back.png')}
                               style={{width:13,height:12}} />
                    </TouchableOpacity>
                </View>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={Styles.font}>{{name}}列表</Text>
                </View>
                <View style={{height:48,width:48,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                    <TouchableOpacity onPress = {() => {this.topItemAction()}}>
                        <Image source={require("../imgs/ic_home_top_search.png")}
                               style={{width:24,height:24,marginRight:8,alignItems:'center'}} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    renderStoreBasic(){

    }
    renderLeftLayout(){

    }
    renderBottomLayout(){

    }
    render(){
        return (
            <View style={{flex:1}}>
                <View>
                    {this.renderTopLayout()}
                    {this.renderStoreBasic()}
                </View>
                {this.renderBottomLayout()}
            </View>
        )
    }
}

export default StoreDetails;