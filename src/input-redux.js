'use strict';

import Input from './input';
import connect from './input/connect';
import check from './input/check';
import cat_forms from './input/reducer';

export const inputConnect = connect;
export const inputCheck = check;
export const formReducer = {cat_forms};
export default Input;
