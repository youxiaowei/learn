'use strict';

import { nameSpace } from 'utils/index';

let ns = nameSpace('practice1');
export const ON_INCREMENT = ns('ON_INCREMENT');
export function onIncrement() {
	return{
		type: ON_INCREMENT
	}
}
