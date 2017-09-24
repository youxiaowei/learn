'use strict';

import React from 'react';
import { Navigation, Icon } from 'qnui';
import classnames from 'classnames';
import Tools from 'utils/index';
import './index.scss';
const Item = Navigation.Item;
const Group = Navigation.Group;

const linkConfig = {
  //本地localhost或127.0.0.1环境下的路径设置
  local: {
    'index': '/demos/index.html',
    'redux': '/demos/redux.html',
    'router-home': '/demos/router.html#/home',
    'router-page1': '/demos/router.html#/page1',
    'router-page2': '/demos/router.html#/page2',
    'router-practice1': '/demos/text.html#/practice1',
    'router-practice2': '/demos/text.html#/practice2',
    'router-practice3': '/demos/text.html#/practice3',
  },
  onLine: {//自行根据服务端路径定义
    'index': '/demos/index.html',
    'redux': '/demos/redux.html',
    'router-home': '/demos/router.html#/home',
    'router-page1': '/demos/router.html#/page1',
    'router-page2': '/demos/router.html#/page2',
    'router-practice1': '/demos/text.html#/practice1',
    'router-practice2': '/demos/text.html#/practice2',
    'router-practice3': '/demos/text.html#/practice3',
  }
}

const links = Tools.isLocal() ? linkConfig.local : linkConfig.onLine;

class SideMenu extends React.Component {

  render() {
    let className = classnames({
      "left-menu": true
    });
    return (
      <div className={className}>
        <Navigation
          style={{ maxWidth: '240px' }}
          type="tree"
          activeDirection="right"
        >
          <li className="qn-navigation-vertical">
            <Icon type="email" />
            <span>聚星台</span>
          </li>
          <Item
            itemid="index"
            className="left-nav-item"
            icon="history"
            text="首页"
            link={links.index} />
          <Item
            itemid="redux"
            className="left-nav-item"
            icon="service"
            text="redux案例"
            link={links.redux} />
          <Item
            itemid="router-group"
            className="left-nav-item"
            icon="attachment"
            text="router案例" >
            <Navigation >
              <Item
                itemid="router-home"
                className="left-nav-item"
                text="home"
                icon="service"
                link={links['router-home']} />
              <Item
                itemid="router-page1"
                className="left-nav-item"
                text="page1"
                icon="training"
                link={links['router-page1']} />
              <Item
                itemid="router-page2"
                className="left-nav-item"
                text="page2"
                icon="electronics"
                link={links['router-page2']} />
            </Navigation>
          </Item>
          <Item
            itemid="text"
            className="left-nav-item"
            icon="history"
            text="练习">
            <Navigation >
              <Item
                itemid="router-practice1"
                className="left-nav-item"
                text="practice1"
                icon="service"
                link={links['router-practice1']} />
              <Item
                itemid="router-practice2"
                className="left-nav-item"
                text="practice2"
                icon="training"
                link={links['router-practice2']} />
              <Item
                itemid="router-practice3"
                className="left-nav-item"
                text="practice3"
                icon="electronics"
                link={links['router-practice3']} />
            </Navigation>
        </Item>
        </Navigation>
      </div>
    );
  }
}

export default SideMenu;
