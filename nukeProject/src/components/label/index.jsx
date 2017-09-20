'use strict';
import { createElement, Component, render } from 'rax';
import { View, Text } from 'weex-nuke';
import styles from './index.less';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Text style={styles.label}>
        {this.props.children}
      </Text>
    );
  }
}

export default Label;
