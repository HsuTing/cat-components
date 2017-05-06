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
    menuStyles: PropTypes.func,
    delay: PropTypes.number
  }

  static defaultProps = {
    menuStyles: () => {},
    delay: 1
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
    const {children, menu, menuStyles, ...props} = this.props;
    const {isShown, addStyle} = this.state;
    const menuStyle = [
      style.menu,
      style.styles(isShown),
      menuStyles(isShown),
      addStyle
    ];

    delete props.delay;

    return (
      <div {...props}
           style={[style.root, props.style]}
      >
        {React.cloneElement(children, {
          onMouseEnter: this.showMenu,
          onMouseLeave: this.hideMenu,
          onClick: this.toggleMenu
        })}

        <StyleRoot style={menuStyle}
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
