'use strict';

import React from 'react';
import Overlay from 'qnui/lib/overlay';
import 'qnui/lib/overlay/index.scss';
const Popup = Overlay.Popup;
const afterClose = () => {
    console.log('close');
};
const trigger = <button>Open</button>;
class Index extends React.Component {
  render() {
    return <div className="home-page">
      <div className="big-text">练习</div>
      <Popup trigger={trigger} triggerType="click" afterClose={afterClose}>
      <div className="overlay-demo">Hello World From Popup!</div>
    </Popup>
    </div>;
  }
}
export default Index;
