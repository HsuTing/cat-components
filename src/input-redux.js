'use strict';

import Input from './input';
import check from './input/check';
import cat_forms from './input/reducer';
import connect from './input/connect';

export default Input;
export const inputCheck = check;
export const formReducer = {cat_forms};
export const inputConnect = connect;
