'use strict';

import {connect} from 'react-redux';
import {changeValue} from 'utils/inputRedux';

export default formName => (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {},
  mergeProps,
  options
) => connect(
  (state, ownProps) => ({
    ...mapStateToProps(state, ownProps),
    form: state.form[formName] || {}
  }),
  (dispatch, ownProps) => ({
    ...mapDispatchToProps(dispatch, ownProps),
    inputDispatch: (inputName, value) => {
      dispatch(changeValue({
        formName,
        inputName,
        value
      }));
    }
  }), mergeProps, options
);
