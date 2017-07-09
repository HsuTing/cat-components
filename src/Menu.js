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
    trigger: PropTypes.arrayOf(
      PropTypes.oneOf(['click', 'hover'])
    )
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

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.children !== this.props.children ||
      this.state.isShown !== nextState.isShown ||
      JSON.stringify(this.state.addStyle) !== JSON.stringify(nextState.addStyle)
    );
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
    const events = {};

    trigger.forEach(event => {
      switch(event) {
        case 'hover':
          events.onMouseEnter = this.showMenu;
          events.onMouseLeave = this.hideMenu;
          break;
      }
    });

    delete props.delay;

    return (
      <div {...props}
        style={[style.root, props.style]}
      >
        {React.cloneElement(children, {
          ...(trigger.indexOf('click') !== -1 ? {onClick: this.toggleMenu} : {}),
          ...events
        })}

        <StyleRoot style={newMenuStyle}
          onAnimationEnd={this.animationEnd}
          {...events}
        >{menu}</StyleRoot>
      </div>
    );
  }

  toggleMenu() {
    const {trigger} = this.props;

    if(trigger.indexOf('hover') !== -1) {
      if(!this.isEnter)
        this.setState({isShown: !this.state.isShown});
    } else
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
