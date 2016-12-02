/**
 * Created by sunshitao on 2016/11/1.
 */
import React from 'React';
import {connect} from 'react-redux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

let Styles = StyleSheet.create({
    container:{
        flex:1
    }
});

let StarView = function(){
    class Root extends React.Component{
        constructor(){
            super();
        }
        render(){
            return (
                <View style={Styles.container}>
                    <Text>this is Column</Text>
                </View>
            );
        }
    }
    return Root;
};

//function select(store){
//    return {store}
//}
//
//export default connect(select)(StarView());
export default StarView();