'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import radium from 'radium';
import CloseIcon from 'react-icons/lib/md/close';

import style from './style/alert';

@radium
class Alert extends React.Component {
  static propTypes = {
    children: React.PropTypes.element.isRequired,
    rootStyle: React.PropTypes.object,
    iconStyle: React.PropTypes.object,
    hide: React.PropTypes.func.isRequired
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
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  set id(id) {
    this.nodeId = id;
  }

  show(component = <div />, iconStyle = {}, callback = () => {}) {
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
    callback();
  }

  hide(callback = () => {}) {
    this.isShown = false;
    ReactDOM.render(
      <Alert hide={this.hide}
             rootStyle={{display: 'none'}}
      >{this.component}</Alert>,
      document.getElementById(this.nodeId)
    );
    callback();
  }
}

export default new AlertController();
