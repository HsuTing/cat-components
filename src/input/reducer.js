'use strict';

export const changeValue = options => ({
  ...options,
  type: 'CAT_INPUT_CHANGE_VALUE'
});

export const submit = options => ({
  ...options,
  type: 'CAT_FORM_SUBMIT'
});

export const reset = options => ({
  ...options,
  type: 'CAT_FORM_RESET'
});

export default (state = {}, {type, formName, ...action}) => {
  const formRoot = {...state};
  const form = formRoot[formName] ? {...formRoot[formName]} : {isSubmited: false};

  switch(type) {
    case 'CAT_INPUT_CHANGE_VALUE': {
      const {inputName, value} = action;

      form[inputName] = {
        ...form[inputName],
        ...value
      };
      break;
    }

    case 'CAT_FORM_SUBMIT': {
      const {callback} = action;
      const output = {...form};
      form.isSubmited = true;

      delete output.isSubmited;

      callback(output);
      break;
    }

    case 'CAT_FORM_RESET': {
      const {callback} = action;

      callback(form);
      form.isSubmited = false;

      break;
    }
  }

  if(formName)
    formRoot[formName] = form;

  return formRoot;
};
