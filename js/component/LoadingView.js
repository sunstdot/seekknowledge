/**
 * 数据加载界面
 * Created by sunshitao on 2016/11/23.
 */
import React from 'react';
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Text
} from 'react-native';

const LoadingView = ()=>(
    <View style={styles.loading}>
        <ActivityIndicator
            size="large"
            color="#3e9ce9"
            />
        <Text style={styles.loadingText}>数据加载中...</Text>
    </View>
);

const styles = StyleSheet.create({
    loading:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    loadingText:{
        marginTop:10,
        textAlign:'center'
    }
});
export default LoadingView;