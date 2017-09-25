'use strict';

import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/practice2'
import './index.scss'
import {Gateway,Overlay} from 'qnui/lib/overlay';
import 'qnui/lib/overlay/index.scss';
class Practice2 extends React.Component {
	render() {
		const { visible, onShow, onClose} = this.props;
		return (
			<div className="practice-box">
				page2
			</div>
		);
	}
}

// Connected Component
export default connect(
)(Practice2)
