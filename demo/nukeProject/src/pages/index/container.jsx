'use strict';

import { createElement, Component, render } from 'rax';
import { View, Text, Modal, Link, Env, Button } from 'weex-nuke';
import Label from '$components/label/';
import G from '$util/global';
import { Http } from '$util/index';
import styles from './container.less';

const { appInfo } = Env;

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.btnPress = this.btnPress.bind(this);
  }

  btnPress() {
    Http.fetch({
      name: 'nuke.demo.interface.get',
      data: {},
    }).then((res) => {
      Modal.toast('数据请求成功');
      console.log(res);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello World 🌍
                </Text>
        <View style={styles.instructions}>
          <Label>coding in src folder & have fun 😄 !</Label>
        </View>
        <Button type="primary" onPress={this.btnPress}>Fetch</Button>
      </View>
    );
  }
}

export default Demo;

