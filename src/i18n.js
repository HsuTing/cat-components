'use strict';

import 'fetch-everywhere';
import React from 'react';
import PropTypes from 'prop-types';

export const language = Component => class extends React.Component { // eslint-disable-line react/display-name
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
    basename: PropTypes.string,
    children: PropTypes.element.isRequired
  }

  static defaultProps = {
    basename: '/public/i18n/'
  }

  static childContextTypes = {
    translate: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    const state = {
      lang: props.lang,
      basename: props.basename
    };

    state[props.lang] = props.defaultData;
    this.state = state;
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  getChildContext() {
    const {lang, ...data} = this.state;

    return {
      translate: data[lang],
      changeLanguage: this.changeLanguage
    };
  }

  render() {
    return React.Children.only(
      this.props.children
    );
  }

  changeLanguage(lang) {
    return () => {
      const {basename, ...data} = this.state;

      if(data[lang]) {
        this.setState({lang});
        return;
      }

      fetch(`${basename.slice(-1) === '/' ? basename : `${basename}/`}${lang}.json`)
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
