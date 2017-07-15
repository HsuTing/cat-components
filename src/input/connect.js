'use strict';

import {connect} from 'react-redux';

import {changeValue, submit} from './reducer';

export default (formName = '') => (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {},
  mergeProps,
  options
) => connect(
  (state, ownProps) => {
    const form = {};
    const origin_form = state.cat_forms[formName] || {};
    const {isSubmited} = origin_form

    Object.keys(origin_form)
      .forEach(key => {
        if(key === 'isSubmited')
          return;

        const value = origin_form[key];

        form[key] = {
          ...value,
          isError: (
            value.value === '' && !isSubmited ?
              false :
              (value.isError || false)
          )
        };
      });

    return {
      ...mapStateToProps(state, ownProps),
      form
    };
  },
  (dispatch, ownProps) => ({
    ...mapDispatchToProps(dispatch, ownProps),
    inputDispatch: (inputName, value) => {
      dispatch(changeValue({
        formName,
        inputName,
        value
      }));
    },
    submitDispatch: callback => {
      dispatch(submit({
        formName,
        callback
      }));
    }
  }),
  mergeProps,
  options
);
