/**
 * Created by sunshitao on 2016/11/1.
 */
import React from 'React';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    InteractionManager,
    Dimensions,
} from 'react-native';
import {connect} from 'react-redux';

import {IndicatorViewPager,PagerDotIndicator} from 'rn-viewpager';
import WebViewDetails from './WebViewDetails';
//import City from './City';
//import Search from './Search';
import ShortLine from '../component/ShortLine';
import StoreDetails from './StoreDetails';
import ColumnsDetails from './ColumnsDetails';

const {height,width} = Dimensions.get('window');

const item_width = (width - 1)/2;

const STORE_DATA = {
    "api":"getStoreList",
    "v":"1.0",
    "code":"0",
    "msg":"success",
    "data":[{
        "id":1,
        "name":"四川Brunch",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },
    {
        "id":2,
        "name":"聚星楼",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":3,
        "name":"四川川二娃",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":4,
        "name":"韩国大烤肉",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":5,
        "name":"釜山料理",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    },{
        "id":6,
        "name":"釜山料理",
        "star":4,
        "comment":45,
        "tag":"中国餐馆,四川菜,重辣",
        "location":"6.6km",
        "remark":"每日有优惠"
    }]
};

const BANNER_IMGS = [
    require('../imgs/sunview/1.jpg'),
    require('../imgs/sunview/2.jpg'),
    require('../imgs/sunview/3.jpg'),
    require('../imgs/sunview/4.jpg')
];



let Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
    },
    center_item_wrap:{
        alignSelf:'center',
        alignItems:'center',
        flex:1,
        justifyContent:'flex-end',
    },
    center_item_tv:{
        fontSize:14,
        marginBottom:8,
        backgroundColor:'#00000000',
    }
});

let CENTER_IMGS = [
    require('../imgs/sunview/img_1.png'),
    require('../imgs/sunview/img_2.png'),
    require('../imgs/sunview/img_3.png'),
    require('../imgs/sunview/img_4.png'),
    require('../imgs/sunview/tech.png'),
    require('../imgs/sunview/news.png'),
    require('../imgs/sunview/columns.png'),
    require('../imgs/sunview/dating.png')
];

let SunView = function(){
    class SunRoot extends React.Component{
        constructor(props){
            super(props);
            this.centerItemAction = this.centerItemAction.bind(this);
            this.topItemAction = this.topItemAction.bind(this);
            this.recomdStoreAction = this.recomdStoreAction.bind(this);
            this._renderDotIndicator = this._renderDotIndicator.bind(this);
        }
        centerItemAction(position,type){
            const {navigator} = this.props;
            InteractionManager.runAfterInteractions(()=>{
                navigator.push({
                    component:WebViewDetails,
                    name:'WebViewDetails',
                    params:{
                        position,
                        type
                    },
                });
            })
        }
        topItemAction(position){
            const {navigator} = this.props;
            if(position === 0){
                InteractionManager.runAfterInteractions(()=> {
                    navigator.push({
                        component:City,
                        name:'City'
                    })
                })
            }else if(position === 1){
                InteractionManager.runAfterInteractions(()=>{
                    navigator.push({
                        component:Search,
                        name:'Search'
                    })
                })
            }
        }
        recomdStoreAction(position){
            const {navigator} = this.props;
            InteractionManager.runAfterInteractions(()=>{
                navigator.push({
                    component:StoreDetails,
                    name:'StoreDetails',
                    data:eval(STORE_DATA.data[position])
                });
            });
        }

        recomdColumnsAction(position){
            const {navigator} = this.props;
            InteractionManager.runAfterInteractions(()=>{
                navigator.push({
                    component:ColumnsDetails,
                    name:'ColumnsDetails',
                    data:eval(STORE_DATA.data[position])
                })
            })
        }

        _renderDotIndicator(){
            return <PagerDotIndicator pageCount={4} />
        }
        render(){
            return (
                <View style={Styles.container} >
                    <View style={{backgroundColor:'black',height:48,flexDirection:'row'}}>
                        <View style={{flex:1,justifyContent:'center'}}>
                            <TouchableOpacity onPress = {()=>{this.topItemAction(0)}}>
                                <View style={{justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
                                    <Image source={require('../imgs/sunview/ic_home_top_location.png')}
                                        style={{width:20,height:26,marginLeft:8}}/>
                                    <Text style={{fontSize:13,marginLeft:3,color:'white'}}>定位中</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('../imgs/ic_seek_knowledge.png')}
                                style={{width:45,height:25}}/>
                        </View>
                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{this.topItemAction(1)}}>
                                <Image source={require('../imgs/sunview/ic_home_top_search.png')}
                                    style={{width:24,height:24,alignItems:'center',marginRight:8}}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <IndicatorViewPager style={{height:140}} indicator={this._renderDotIndicator()} >
                            <View><Image source={BANNER_IMGS[0]}/></View>
                            <View><Image source={BANNER_IMGS[1]}/></View>
                            <View><Image source={BANNER_IMGS[2]}/></View>
                            <View><Image source={BANNER_IMGS[3]}/></View>
                        </IndicatorViewPager>
                        <View style={{marginTop:8}}>
                            <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
                                <View style={{flex:1,marginLeft:8}}>
                                    <TouchableOpacity onPress={()=>{this.centerItemAction(0,'vue')}}>
                                        <Image source={CENTER_IMGS[0]} style={{width:80,height:100}}>
                                            <View style={Styles.center_item_wrap}>
                                                <Text style={Styles.center_item_tv}>Vue</Text>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1}}>
                                    <TouchableOpacity onPress={()=>{this.centerItemAction(1,'reactnative')}}>
                                        <Image source={CENTER_IMGS[1]} style={{width:80,height:100}}>
                                            <View style={Styles.center_item_wrap}>
                                                <Text style={Styles.center_item_tv}>React-native</Text>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1}}>
                                    <TouchableOpacity onPress={()=>{this.centerItemAction(2,'coolshell')}}>
                                        <Image source={CENTER_IMGS[2]} style={{width:80,height:100}}>
                                            <View style={Styles.center_item_wrap}>
                                                <Text style={Styles.center_item_tv}>CoolShell</Text>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1}}>
                                    <TouchableOpacity onPress={()=>{this.centerItemAction(3,'redux')}}>
                                        <Image source={CENTER_IMGS[3]} style={{width:80,height:100}}>
                                            <View style={Styles.center_item_wrap}>
                                                <Text style={Styles.center_item_tv}>Redux</Text>
                                            </View>
                                        </Image>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{marginTop:8,backgroundColor:'white'}}>
                            <View style={{height:40,justifyContent:'center',alignItems:'center'}}><Text>订阅推荐</Text></View>
                            <View style={{flexDirection:'row',height:70}}>
                                <TouchableOpacity onPress={()=>{this.recomdColumnsAction(0)}}>
                                    <View style={{flexDirection:'row',width:item_width,marginTop:5}}>
                                        <Image source={CENTER_IMGS[4]} style={{marginLeft:20,width:66,height:47}} />
                                        <View style={{marginLeft:10}}>
                                            <Text>技术订阅</Text>
                                            <Text style={{fontSize:13,color:'#999',marginTop:5}}>始终跑在最前沿</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <Image resource={require('../imgs/sunview/ic_home_shu.png')} style={{height:60,marginTop:10}} />
                                <TouchableOpacity onPress={()=>{this.recomdColumnsAction(1)}}>
                                    <View style={{flexDirection:'row',width:item_width,marginTop:8}}>
                                        <Image source={CENTER_IMGS[5]} style={{marginLeft:20,width:66,height:47}} />
                                        <View style={{marginLeft:10}}>
                                            <Text>新闻订阅</Text>
                                            <Text style={{fontSize:13,color:'#999',marginTop:5}}>身在陋室心怀天下</Text>
                                    </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <ShortLine />
                            <View style={{flexDirection:'row',height:70}}>
                                <TouchableOpacity onPress={()=>{this.recomdColumnsAction(3)}}>
                                    <View style={{flexDirection:'row',width:item_width,marginTop:3}}>
                                        <Image source={CENTER_IMGS[6]} style={{width:66,height:47,marginLeft:20}} />
                                        <View style={{marginLeft:10,marginTop:8}}>
                                            <Text>专栏订阅</Text>
                                            <Text style={{fontSize:13,color:'#999',marginTop:5}}>心与灵魂的碰撞</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <Image resource={require('../imgs/sunview/ic_home_shu.png')} style={{height:60}} />
                                <TouchableOpacity onPress={()=>{this.recomdColumnsAction(4)}}>
                                    <View style={{flexDirection:'row',width:item_width,marginTop:8}}>
                                        <Image source={CENTER_IMGS[7]} style={{width:66,height:47,marginLeft:20,marginTop:5}} />
                                        <View style={{marginLeft:10}}>
                                            <Text>相亲订阅</Text>
                                            <Text style={{fontSize:13,color:'#999',marginTop:5}}>拒绝形单影只</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{marginTop:8,backgroundColor:'white'}}>
                            <View style={{height:40,justifyContent:'center',alignItems:'center'}}><Text>推荐大牛</Text></View>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(0)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(1)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(2)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",marginTop:10,paddingBottom:10}}>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(3)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(4)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                    <TouchableOpacity onPress={()=>{this.recomdStoreAction(5)}}>
                                        <Image source={require('../imgs/sunview/headIcon.png')} style={{width:105,height:105}}/>
                                        <View style={{marginTop:8,justifyContent:'center',alignItems:'center'}}>
                                            <Text>匿名人士</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            );
        }
    }
    return SunRoot;
};

//function select(store){
//    return {store}
//}
//
//export default connect(select)(SunView());
export default SunView();