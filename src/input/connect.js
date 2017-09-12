'use strict';

import {connect} from 'react-redux';

import {changeValue, submit} from './reducer';

export default formName => (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {},
  mergeProps,
  options
) => connect(
  (state, ownProps) => {
    const form = {};
    const originForm = state.catForms[formName] || {};
    const {isSubmited} = originForm;

    Object.keys(originForm)
      .forEach(key => {
        if(key === 'isSubmited')
          return;

        const value = originForm[key];

        form[key] = {
          ...value,
          isError: (
            value.value === '' && !isSubmited ?
              false :
              (value.isError || /* istanbul ignore next */ false)
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
