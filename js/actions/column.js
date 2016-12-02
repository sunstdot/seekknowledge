/**
 * Created by sunshitao on 2016/11/2.
 */
export const SHOW_COLUMN_INFO = 'COLUMN_INFO_SHOW';

//do fetch data op
export const showColumnInfo = (msg) => {
    return {
        type:SHOW_COLUMN_INFO,
        msg
    }
}