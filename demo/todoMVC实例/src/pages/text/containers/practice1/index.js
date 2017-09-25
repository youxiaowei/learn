'use strict';

import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/practice1';
import { Button } from 'qnui';
import './index.scss';
class Practice1 extends React.Component {
  render() {
	  console.log(this.props);
    const { value, onIncreaseClick } = this.props;
    return (
      <div className="count-box">
        <span>the counts</span>
        {' '}
        <span >{value}</span>
        <button className="btn" onClick={onIncreaseClick}>increase</button>
      </div>
    )
  }
}
function mapStateToProps(state) {
    console.log(state);
  return {
    value: state.practice1.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(actions.onIncrement())
  }
}

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Practice1)
