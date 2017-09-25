'use strict';

import { nameSpace } from 'utils/index';

let ns = nameSpace('practice2');
export const SHOW = ns('SHOW');
export function show() {
	return{
		type: SHOW
	}
}
export function hide() {
	return{
		type: HIDE
	}
}
