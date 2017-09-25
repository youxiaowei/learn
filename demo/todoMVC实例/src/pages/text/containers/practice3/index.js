'use strict';

import React from 'react';
import {connect} from 'react-redux'
import * as actions from '../../actions/practice1'
import './index.scss'
class Practice3 extends React.Component {
	render() {
		return (
			<div>
				practice3 page
			</div>
		);
	}
}
export default connect()(Practice3);
