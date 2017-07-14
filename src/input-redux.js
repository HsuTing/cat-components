'use strict';

import Input from './Input';
import connect from './input/connect';
import check from './input/check';
import {form as formReducer} from './input/reducer';

export const inputConnect = connect;
export const inputCheck = check;
export const form = {form: formReducer};
export default Input;
