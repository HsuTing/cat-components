'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import Template from './alert/template';
import builder from './alert/builder';
import * as style from './style/alert';

export const alertStyle = style;
export const alertBuilder = builder;

export default class Alert extends React.Component {
  static propTypes = {
    iconStyle: PropTypes.object,
    children: PropTypes.element.isRequired,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object.isRequired
    )
  }

  static defaultProps ={
    animationStyles: [style.hideStyle, style.showStyle]
  }

  static childContextTypes = {
    alert: PropTypes.func.isRequired,
    hideAlert: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      component: () => <div />,
      rootStyle: {display: 'none'}
    };

    this.showStyle = toggleStyle(true, props.animationStyles);
    this.hideStyle = toggleStyle(false, props.animationStyles);

    this.hide = this.hide.bind(this);
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
    const {children, iconStyle, ...props} = this.props;
    const {isShown, component, rootStyle} = this.state;

    delete props.animationStyles;

    return (
      <div {...props}>
        {loadAnimation([this.showStyle, this.hideStyle])}

        {children}

        <Template rootStyle={rootStyle}
          isShown={isShown}
          iconStyle={iconStyle}
          showStyle={this.showStyle}
          hideStyle={this.hideStyle}
          hideAlert={this.hideAlert}
        >{component({hide: this.hide})}</Template>
      </div>
    );
  }

  hide() {
    this.setState({
      isShown: false,
      rootStyle: {}
    });
  }

  alert(component = () => <div />) {
    if(this.state.isShown)
      return;

    this.setState({
      isShown: true,
      component,
      rootStyle: {}
    });
  }

  hideAlert() {
    this.setState({
      isShown: false,
      rootStyle: {display: 'none'}
    });
  }
}
