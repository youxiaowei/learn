'use strict';

import * as actions from '../../actions/practice1';
export default function counter(state = { count: 0 }, action) {
  const count = state.count
  switch (action.type) {
    case actions.ON_INCREMENT:
      return { count: count + 1 }
    default:
      return state
  }
}
