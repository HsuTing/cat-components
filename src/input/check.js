'use strict';

import validator from 'validator';

export default (value, rules = [], e = null) => {
  const error = [];

  rules.forEach(rule => {
    if(typeof rule.validator === 'string') {
      if(rule.not && !validator[rule.validator](value, rule.options))
        error.push(rule.message);
      else if(!rule.not && validator[rule.validator](value, rule.options))
        error.push(rule.message);
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
