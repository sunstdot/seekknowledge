/**
 * 加载网页信息
 * Created by sunshitao on 2016/11/18.
 */
import React from 'react';
import {NavGoBack} from '../utils';
import LoadingView from '../component/LoadingView';
import {
    View,
    WebView,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';

let canGoBack = false;
const uriObj = {
    'vue':'https://cn.vuejs.org/v2/guide/',
    'reactnative':'http://facebook.github.io/react-native/docs/getting-started.html',
    'coolshell':'http://coolshell.cn/',
    'redux':'http://cn.redux.js.org/'
};
const HTML = `
    <!DOCTYPE html>\n
    <html>
      <head>
        <title>HTML字符串</title>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <meta name="viewport" content="width=320, user-scalable=no">
        <style type="text/css">
          body {
            margin: 0;
            padding: 0;
            font: 62.5% arial, sans-serif;
            background: #ccc;
          }
          h1 {
            padding: 45px;
            margin: 0;
            text-align: center;
            color: #33f;
          }
        </style>
      </head>
      <body>
        <h1>加载静态的HTML文本信息</h1>
      </body>
    </html>
`;
let WebViewDetails = function(){
    class WebRoot extends React.Component{
        constructor(props){
            super(props);
            this.buttonBackAction = this.buttonBackAction.bind(this);
        }

        //返回
        buttonBackAction(){
            if(canGoBack){
                this.webview.goBack();
                return true;
            }
            return NavGoBack(this.props.navigator);
        }
        onNavigatorStateChange(navState){
            canGoBack = navState.canGoBack;
        }
        renderTopLayout(){
            return (
                <View style={{height:48,backgroundColor:'black',flexDirection:'row'}}>
                    <View style={{width:48,height:48,justifyContent:'center'}}>
                        <TouchableOpacity onPress={()=>{this.buttonBackAction()}}>
                            <Image
                                source={require('../imgs/ic_center_back.png')}
                                style={{width:13,height:20}}
                                />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:18,color:'white'}}>网页页面</Text>
                    </View>
                    <View style={{width:48,height:48}}></View>
                </View>
            )
        }
        renderLoadingView(){
            return <LoadingView />;
        }
        render(){
            const {type} = this.props.route.params;
            let webView = type?
                    <WebView
                        ref = {(ref) => {this.webview = ref;}}
                        source = {{uri: uriObj[type]}}
                        automaticallyAdjustContentInsets = {true}
                        style = {{flex:1}}
                        javascriptEnabled
                        domStorageEnabled
                        startInLoadingState = {true}
                        decelerationRate='normal'
                        onShouldStartLoadWithRequest={()=>{
                            const shouldStartLoad = true;
                            return shouldStartLoad;
                        }}
                        onNavigatorStateChange={this.onNavigatorStateChange}
                        renderLoading = {this.renderLoadingView}
                        />
                    :
                    <WebView
                        style={{flex:1}}
                        html={HTML}
                        startInLoadingState = {true}
                        domStorageEnabled = {true}
                        javascriptEnabled = {true}
                        />;
            return (
                <View style={{flex:1,backgroundColor:'white'}}>
                    {this.renderTopLayout()}
                    {webView}
                </View>
            );
        }
    }
    return WebRoot;
};

export default WebViewDetails();
