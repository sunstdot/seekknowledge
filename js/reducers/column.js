/**
 * Created by sunshitao on 2016/11/2.
 */
import {
    SHOW_COLUMN_INFO
} from '../actions/column';

export const showColumnInfo = (state= {},action) => {
    switch(action.type){
        case SHOW_COLUMN_INFO:
            return Object.assign({},state,action.msg);
        default:
            return state;
    }
}