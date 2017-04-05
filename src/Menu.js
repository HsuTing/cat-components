'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';

import style from './style/menu';

@radium
export default class Menu extends React.Component {
  static propTypes ={
    children: React.PropTypes.element.isRequired,
    menu: React.PropTypes.element.isRequired,
    menuStyle: React.PropTypes.object,
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

    this.isEnter = false;
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  render() {
    const {children, menu, menuStyle, showStyle, hideStyle, ...props} = this.props;
    const {isShown, addStyle} = this.state;

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

        <StyleRoot style={[style.menu, menuStyle, (isShown ? showStyle : hideStyle), addStyle]}
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