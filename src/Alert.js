'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import radium from 'radium';
import CloseIcon from 'react-icons/lib/md/close';

import style from 'style/alert';

@radium
class AlertTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    hideAlert: PropTypes.func.isRequired
  }

  render() {
    const {children, rootStyle, iconStyle, hideAlert} = this.props;
    const childrenProps = children.props;
    const childrens = React.Children.toArray(childrenProps.children)
      .concat([
        <CloseIcon key='icon'
          style={{...style.icon, ...iconStyle}}
          onClick={hideAlert}
        />
      ]);

    return React.cloneElement(children, {
      style: {
        ...style.root,
        ...childrenProps.style,
        ...rootStyle
      }
    }, childrens);
  }
}

export const alertBuilder = Component => class AlertBuilder extends React.Component {
  static contextTypes = {
    alert: PropTypes.func.isRequired,
    hideAlert: PropTypes.func.isRequired
  }

  render() {
    return (
      <Component {...this.state}
        {...this.props}
        {...this.context}
      />
    );
  }
}

export default class Alert extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    iconStyle: PropTypes.object,
    children: PropTypes.element.isRequired
  }

  static defaultProps ={
    id: 'alert'
  }

  static childContextTypes = {
    alert: PropTypes.func.isRequired,
    hideAlert: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.isShown =  false;
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

    const {iconStyle, id} = this.props;

    this.isShown = true;
    ReactDOM.render(
      <AlertTemplate iconStyle={iconStyle}
        hideAlert={this.hideAlert}
      >{component}</AlertTemplate>,
      document.getElementById(id)
    );
  }

  hideAlert() {
    this.isShown = false;
    ReactDOM.render(
      <div />,
      document.getElementById(this.props.id)
    );
  }
}
