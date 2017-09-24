'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory} from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers/index'
import createStore from './store/index';
import routes from './routes';
import './index.scss';

const store = createStore(reducers);
//创建一个与store事件同步的history对象
const history = syncHistoryWithStore(hashHistory,store);
ReactDOM.render(
    // Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
  <Provider store={store}>
      <Router history={history}>
          {routes}
      </Router>
  </Provider>,
  document.getElementById('container'));
