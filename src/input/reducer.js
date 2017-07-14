'use strict';

export const changeValue = options => ({
  ...options,
  type: 'CAT_INPUT_CHANGE_VALUE'
});

export const form = (state = {}, {type, formName, inputName, value}) => {
  switch(type) {
    case 'CAT_INPUT_CHANGE_VALUE': {
      const form = {};
      const input = state[formName] ? {...state[formName]} : {};

      input[inputName] = {
        ...input[inputName],
        ...value
      };
      form[formName] = input;
      return {
        ...state,
        ...form
      };
    }

    default:
      return state;
  }
};
