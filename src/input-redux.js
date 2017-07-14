'use strict';

import Input from './input';
import connect from './input/connect';
import check from './input/check';
import {form} from './input/reducer';

export const inputConnect = connect;
export const inputCheck = check;
export const formReducer = {form};
export default Input;
