'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import chooseLanguage from 'utils/chooseLanguage';

export default class Language extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    chooseLanguage: PropTypes.func.isRequired
  };

  static defaultProps = {
    language: 'eng'
  }

  getChildContext() {
    const {language} = this.props;

    return {
      chooseLanguage: chooseLanguage(language)
    };
  }

  render() {
    return React.Children.only(
      this.props.children
    );
  }
}
