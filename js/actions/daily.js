/**
 * Created by sunshitao on 2016/11/2.
 */
export const SHOW_DAILY_INFO = 'SHOW_DAILY_INFO';

export const showDailyInfo = (msg)=>{
    return {
        type:SHOW_DAILY_INFO,
        msg
    }
}