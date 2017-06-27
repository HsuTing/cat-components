'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import radium, {StyleRoot} from 'radium';
import CloseIcon from 'react-icons/lib/md/close';

import style from 'style/alert';

@radium
class AlertTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    isShown: PropTypes.bool,
    hideAlert: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };

    this.hide = this.hide.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isShown !== this.state.isShown)
      this.setState({isShown: nextProps.isShown});
  }

  render() {
    const {children, rootStyle, iconStyle} = this.props;
    const {isShown} = this.state;
    const childrenProps = children.props;
    const childrens = React.Children.toArray(childrenProps.children)
      .concat([
        <CloseIcon key='icon'
          style={{...style.icon, ...iconStyle}}
          onClick={this.hide}
        />
      ]);

    return (
      <StyleRoot {...childrenProps}
        onAnimationEnd={this.animationEnd}
        style={{
          ...style.root(isShown),
          ...childrenProps.style,
          ...rootStyle
        }}
        children={childrens}
      />
    );
  }

  hide() {
    this.setState({isShown: false});
  }

  animationEnd() {
    if(!this.state.isShown)
      this.props.hideAlert();
  }
}

export const alertBuilder = Component => class extends React.Component { // eslint-disable-line react/display-name
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

    const {id, iconStyle} = this.props;

    this.isShown = true;
    this.component = component;
    ReactDOM.render(
      <AlertTemplate iconStyle={iconStyle}
        hideAlert={this.hideAlert}
        isShown={true}
      >{component}</AlertTemplate>,
      document.getElementById(id)
    );
  }

  hideAlert() {
    const {id, iconStyle} = this.props;

    this.isShown = false;
    ReactDOM.render(
      <AlertTemplate iconStyle={iconStyle}
        hideAlert={this.hideAlert}
        rootStyle={{display: 'none'}}
      >{this.component}</AlertTemplate>,
      document.getElementById(id)
    );
  }
}
