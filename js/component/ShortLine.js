/**
 * Created by sunshitao on 2016/11/18.
 */
import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const ShortLine = ()=>(
    <View style={{backgroundColor:'white'}}>
        <Image source={require('../imgs/ic_short_bar.png')}
            style={styles.short_line}/>
    </View>
);

const styles = StyleSheet.create({
    short_line:{
        marginLeft:10,
    },
});

export default ShortLine;