/**
 * Created by sunshitao on 2016/11/2.
 */
import {
    SHOW_DAILY_INFO
} from '../actions/daily';

export const showDailyInfo = (state={},action)=>{
    switch (action.type){
        case SHOW_DAILY_INFO:
            return Object({},state,action.msg);
        default :
            return state;
    }
}