/**
 * Created by sunshitao on 2016/11/10.
 */
//回退功能
export function NavGoBack(navigator){
    if(navigator && navigator.getCurrentRoutes().length>0){
        navigator.pop();
        return true;
    }
    return false;
}


