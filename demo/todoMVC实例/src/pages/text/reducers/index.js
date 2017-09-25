import {combineReducers} from 'redux'
import practice1 from './practice1'
import practice2 from './practice2'
import practice3 from './practice3'
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
	practice1,
	practice2,
	practice3,
	routing: routerReducer
});

export default rootReducer;
