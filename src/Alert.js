'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import radium from 'radium';
import CloseIcon from 'react-icons/lib/md/close';

import style from 'style/alert';

@radium
class Alert extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    hide: PropTypes.func.isRequired
  }

  render() {
    const {children, rootStyle, iconStyle, hide} = this.props;
    const childrenProps = children.props;
    const childrens = React.Children.toArray(childrenProps.children)
      .concat([
        <CloseIcon key='icon'
                   style={Object.assign({}, style.icon, iconStyle)}
                   onClick={() => (hide())}
        />
      ]);

    return React.cloneElement(children, {
      style: Object.assign(
        {},
        style.root,
        childrenProps.style,
        rootStyle
      )
    }, childrens);
  }
}

class AlertController {
  constructor() {
    this.nodeId = 'alert';
    this.isShown = false;
    this.show_callback = () => {};
    this.hide_callback = () => {};
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  set id(id) {
    this.nodeId = id;
  }

  set showCallback(callback = () => {}) {
    this.show_callback = callback;
  }

  set hideCallback(callback = () => {}) {
    this.hide_callback = callback;
  }

  show(component = <div />, iconStyle = {}) {
    if(this.isShown)
      return;

    this.isShown = true;
    this.component = component;
    ReactDOM.render(
      <Alert iconStyle={iconStyle}
             hide={this.hide}
      >{component}</Alert>,
      document.getElementById(this.nodeId)
    );
    this.show_callback();
  }

  hide() {
    this.isShown = false;
    ReactDOM.render(
      <Alert hide={this.hide}
             rootStyle={{display: 'none'}}
      >{this.component}</Alert>,
      document.getElementById(this.nodeId)
    );
    this.hide_callback();
  }
}

export default new AlertController();
