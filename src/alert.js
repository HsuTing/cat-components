'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import toggleStyle from 'utils/toggleStyle';

import Template from './alert/template';
import builder from './alert/builder';
import * as style from './style/alert';

export const alertStyle = style;
export const alertBuilder = builder;

export default class Alert extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    iconStyle: PropTypes.object,
    children: PropTypes.element.isRequired,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object.isRequired
    )
  }

  static defaultProps ={
    id: 'alert',
    animationStyles: [style.hideStyle, style.showStyle]
  }

  static childContextTypes = {
    alert: PropTypes.func.isRequired,
    hideAlert: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.isShown =  false;
    this.showStyle = toggleStyle(true, props.animationStyles);
    this.hideStyle = toggleStyle(false, props.animationStyles);
    this.alert = this.alert.bind(this);
    this.hideAlert = this.hideAlert.bind(this);
  }

  getChildContext() {
    return {
      alert: this.alert,
      hideAlert: this.hideAlert
    };
  }

  render() {
    return React.Children.only(
      this.props.children
    );
  }

  alert(component = <div />) {
    if(this.isShown)
      return;

    const {id, iconStyle} = this.props;

    this.isShown = true;
    this.component = component;
    ReactDOM.render(
      <Template iconStyle={iconStyle}
        showStyle={this.showStyle}
        hideStyle={this.hideStyle}
        hideAlert={this.hideAlert}
        isShown={true}
      >{component}</Template>,
      document.getElementById(id)
    );
  }

  hideAlert() {
    const {id, iconStyle} = this.props;

    this.isShown = false;
    ReactDOM.render(
      <Template iconStyle={iconStyle}
        showStyle={this.showStyle}
        hideStyle={this.hideStyle}
        hideAlert={this.hideAlert}
        rootStyle={{display: 'none'}}
      >{this.component}</Template>,
      document.getElementById(id)
    );
  }
}
