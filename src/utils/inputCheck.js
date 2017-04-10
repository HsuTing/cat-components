'use strict';

import validator from 'validator';
import invariant from 'invariant';

export default (value, rules = [], e = null) => {
  const error = [];

  rules.forEach(rule => {
    if(typeof rule.validator === 'string') {
      switch(rule.validator) {
        case 'isEmail':
          if(!validator.normalizeEmail(value, rule.options))
            error.push(rule.message);
          break;

        default:
          invariant(
            validator[rule.validator],
            `${rule.validator} is not in validator. You can write a function to use.`
          );

          if(validator[rule.validator](value, rule.options))
            error.push(rule.message);
          break;
      }
    } else {
      if(rule.validator(value, e))
        error.push(rule.message);
    }
  });

  return {
    value,
    isError: error.length !== 0,
    error
  };
};
