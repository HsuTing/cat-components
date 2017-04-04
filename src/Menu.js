'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';

import style from './style/menu';

@radium
export default class Menu extends React.Component {
  static propTypes ={
    children: React.PropTypes.element.isRequired,
    menu: React.PropTypes.shape({
      component: React.PropTypes.func.isRequired,
      props: React.PropTypes.object
    }).isRequired,
    showStyle: React.PropTypes.object,
    hideStyle: React.PropTypes.object,
    delay: React.PropTypes.number
  }

  static defaultProps = {
    showStyle: style.showStyle,
    hideStyle: style.hideStyle,
    delay: 1
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      addStyle: {}
    };

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  render() {
    const {children, menu, showStyle, hideStyle, ...props} = this.props;
    const {isShown, addStyle} = this.state;
    const menuRootStyle = [
      style.menu,
      (menu.props || {}).style,
      isShown ? showStyle : hideStyle,
      addStyle
    ];

    delete props.delay;

    return (
      <div {...props}
           style={[style.root, props.style]}
      >
        {React.cloneElement(children, {
          onMouseEnter: this.showMenu,
          onMouseLeave: this.hideMenu
        })}

        <StyleRoot style={menuRootStyle}
                   onMouseEnter={this.showMenu}
                   onMouseLeave={this.hideMenu}
                   onAnimationEnd={this.animationEnd}
        >
          {React.createElement(menu.component, menu.props)}
        </StyleRoot>
      </div>
    );
  }

  showMenu() {
    clearInterval(this.interval);
    this.setState({isShown: true});
  }

  hideMenu() {
    const {delay} = this.props;

    this.interval = setInterval(() => {
      this.setState({isShown: false});
    }, delay * 1000);
  }

  animationEnd(e) {
    const {isShown} = this.state;
    this.setState({
      addStyle: isShown ? {} : style.hide
    });
  }
}
