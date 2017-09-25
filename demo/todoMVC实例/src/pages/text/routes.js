import React from 'react'
import {Route,IndexRoute} from 'react-router'
import Layout from 'components/layout/index'
import Practice1 from './containers/practice1/index'
import Practice2 from './containers/practice2/index'
import Practice3 from './containers/practice3/index'

let pageTitle = document.title;

/**
 * menu 选中态map,其中value为side-menu组件中的itemid
 */
const menuMap = {
  '/practice1': 'router-practice1',
  '/practice2': 'router-practice2',
  '/practice3': 'router-practice3'
}


const onRouteEnter = (nextState, replace, callback) => {
  callback();
  //根据路由设置菜单选中
  let routePath = nextState.location.pathname;
  window.selectedMenuKey = menuMap[routePath];
};
const onRouteChange = (prevState, nextState, replace, callback) => {
  callback();
  document.title = nextState.routes[1].title || pageTitle;

    //根据路由设置菜单选中
  let routePath = nextState.location.pathname;
  window.selectedMenuKey = menuMap[routePath];
};

export default (
	<Route path="/" component={Layout}
	onEnter={onRouteEnter} onChange={onRouteChange}>
		<Route path="practice1" component={Practice1}></Route>
		<Route path="practice2" component={Practice2}></Route>
		<Route path="practice3" component={Practice3}></Route>
		<IndexRoute component={Practice1}/>
		<Route path="*" component={Practice1} />
	</Route>
);
