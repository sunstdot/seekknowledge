/**
 * Created by sunshitao on 2016/10/28.
 */
import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const configureStore = createStoreWithMiddleware(reducer);
//const configureStore = createStore(reducer);
export default configureStore;