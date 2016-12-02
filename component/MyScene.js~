import React,{Component,PropTypes} from 'react';
import {
    Navigator,
    Text,
    TouchableHighlight,
    View,
    Stylesheet,
} from 'react-native';

export default class SimpleNavigation extends Component {
    render(){
        return (
            <Navigator
            initialRoute={{title:'My initial Scene',index:0}}
            renderScene={(route,navigator) =>
                <MyScene
                title={route.title}
                onForward={()=>{
                    const nextIndex = route.index +1;
                    navigator.push({
                        title:'Scene '+nextIndex,
                        index:nextIndex,
                    });
                }}
                onBack={()=>{
                    if(route.index > 0){
                        navigator.pop();
                    }
                }}
                    />
            }
                />
        )
    }
}

class MyScene extends Component {
    static propTypes={
        title:PropTypes.string.isRequired,
        onForward:PropTypes.func.isRequired,
        onBack:PropTypes.func.isRequired,
    }
    render(){
        return (
            <View style={{flex:1}}>
                <Text>Current Scene:{this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Tap me to go back</Text>
                </TouchableHighlight>
                <View style={{flex:1,backgroundColor:'powderblue'}} />
                <View style={{flex:2,backgroundColor:'skyblue'}} />
                <View style={{flex:3,backgroundColor:'steelblue'}} />
            </View>
        )
    }
}
