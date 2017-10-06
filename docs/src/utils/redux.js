'use strict';

import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import {formReducer} from 'cat-components/lib/input-redux';

export default process.env.NODE_ENV === 'test' ? {
  reducer: combineReducers(formReducer)
} : /* istanbul ignore next */ {
  reducer: combineReducers(formReducer),
  enhancer: createLogger({collapsed: true})
};
