/**
 * Created by sunshitao on 2016/12/6.
 */
import React from "react";
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    InteractionManager,
    ListView,
} from "react-native";

import {NavGoBack} from '../utils';

var THUMB_URLS = [
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png'),
    require('../imgs/columns/cry.png'),
    require('../imgs/columns/smile.png')
];

const styles = StyleSheet.create({
    list:{
        marginTop:5,
        justifyContent:'space-around',
        flexDirection:'row',
        flexWrap:'wrap',
        borderColor:'red',
        borderWidth:1
    },
    row:{
        justifyContent: 'center',
        padding: 5,
        margin: 3,
        width: 125,
        height: 125,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#CCC'
    },
    thumb:{
        width:90,
        height:90
    },
    confirm:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'blue',
        color:'white',
        fontSize:12
    },
    text:{
        flex:1,
        marginTop:5,
        fontWeight:'bold'
    }
});


class ColumnsDetails extends React.Component{
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3','row 4','row 5','row 6','row 7','row 8','row 9','row 10','row 11','row 12']),
        };
    }
    onSelectItem(rowData){
        console.log('heihei');
    }
    render(){
        return (
            <ListView
                initialListSize = {100}
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                renderFooter={this._renderFooter}
                />
        )
    }
    _renderRow(rowData:string,sectionID:number,rowID:number){
        var imgSource = THUMB_URLS[rowID];
        return (
            <TouchableHighlight underlayColor="red">
                <View>
                    <View style={styles.row}>
                        <Image style={styles.thumb} source={imgSource} />
                        <Text style={styles.text}>
                            {rowData}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }

    _confirm(){
        console.log('确定');
    }
    _renderFooter(){
        return (
            <View style={{flex:1}}>
                <View style={styles.confirm} >
                    <Text>确定</Text>
                </View>
            </View>
        )
    }


}
export default ColumnsDetails;