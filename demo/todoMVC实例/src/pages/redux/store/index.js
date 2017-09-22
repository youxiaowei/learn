'use strict';

import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// applyMiddlewares()作用是将所有中间件组成一个数组，依次执行。
const createStoreWithMdware = applyMiddleware(
            thunkMiddleware
        )(createStore);

export default createStoreWithMdware;
