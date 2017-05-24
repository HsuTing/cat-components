'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import style from 'style/menu';

@radium
export default class Menu extends React.Component {
  static propTypes ={
    children: PropTypes.element.isRequired,
    menu: PropTypes.element.isRequired,
    menuStyle: PropTypes.func,
    delay: PropTypes.number,
    trigger: PropTypes.array
  }

  static defaultProps = {
    menuStyle: () => {},
    delay: 1,
    trigger: ['click', 'hover']
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      addStyle: {}
    };

    this.isEnter = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {children, menu, menuStyle, trigger, ...props} = this.props;
    const {isShown, addStyle} = this.state;
    const newMenuStyle = [
      style.menu,
      style.style(isShown),
      menuStyle(isShown),
      addStyle
    ];
    const childrenProps = {};

    if(trigger.indexOf('click') !== -1)
      childrenProps.onClick = this.toggleMenu
    if(trigger.indexOf('hover') !== -1) {
      childrenProps.onMouseEnter = this.showMenu;
      childrenProps.onMouseLeave = this.hideMenu;
    }

    delete props.delay;

    return (
      <div {...props}
           style={[style.root, props.style]}
      >
        {React.cloneElement(children, childrenProps)}

        <StyleRoot style={newMenuStyle}
                   onMouseEnter={this.showMenu}
                   onMouseLeave={this.hideMenu}
                   onAnimationEnd={this.animationEnd}
        >{menu}</StyleRoot>
      </div>
    );
  }

  toggleMenu() {
    if(!this.isEnter)
      this.setState({isShown: !this.state.isShown});
  }

  showMenu() {
    clearInterval(this.interval);
    this.isEnter = true;
    this.interval = setInterval(() => {
      this.isEnter = false;
    }, 500);
    this.setState({isShown: true});
  }

  hideMenu() {
    const {delay} = this.props;

    this.isEnter = false;
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
