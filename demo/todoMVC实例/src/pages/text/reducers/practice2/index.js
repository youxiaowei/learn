'use strict';

import * as actions from '../../actions/practice2';
export default function control(state = { visible: false }, action) {
  const visible = state.visible
  switch (action.type) {
    case actions.SHOW:
      return { visible: true }
	  case actions.HIDE:
        return { visible: false }
    default:
      return state
  }
}
