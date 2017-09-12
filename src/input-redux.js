'use strict';

import Input from './input';
import catForms from './input/reducer';

export default Input;
export const formReducer = {catForms};

/* eslint-disable object-curly-spacing */
export inputCheck from './input/check';
export inputConnect from './input/connect';
export * as inputStyle from './style/input';
/* eslint-enable object-curly-spacing */
