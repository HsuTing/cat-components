'use strict';

import 'whatwg-fetch'
import path from 'path';
import React from 'react';
import PropTypes from 'prop-types';

export const language = Component => class Language extends React.Component {
  static contextTypes = {
    translate: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired
  }

  render() {
    return (
      <Component {...this.state}
        {...this.props}
        {...this.context}
      />
    );
  }
};

export default class I18n extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    defaultData: PropTypes.object.isRequired,
    dirPath: PropTypes.string,
    children: PropTypes.element.isRequired
  }

  static defaultProps = {
    dirPath: '/public/i18n'
  }

  static childContextTypes = {
    translate: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired
  };

  getChildContext() {
    const {lang, ...data} = this.state;

    return {
      translate: data[lang],
      changeLanguage: this.changeLanguage
    };
  }

  constructor(props) {
    super(props);
    const state = {
      lang: props.lang,
      dirPath: props.dirPath
    };

    state[props.lang] = props.defaultData;
    this.state = state;
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  render() {
    return React.Children.only(
      this.props.children
    );
  }

  changeLanguage(lang) {
    return () => {
      const {dirPath, ...data} = this.state;

      if(data[lang]) {
        this.setState({lang});
        return;
      }

      fetch(path.resolve(dirPath, `${lang}.json`))
        .then(response => response.json())
        .then(languageData => {
          data[lang] = languageData;
          this.setState({
            ...data,
            lang
          });
        })
        .catch(e => console.log('parsing failed', e));
    };
  }
}
