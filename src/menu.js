'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import areEqual from 'fbjs/lib/areEqual';

import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import * as style from './style/menu';

export const menuStyle = style;

@radium
export default class Menu extends React.Component {
  static propTypes ={
    children: PropTypes.element.isRequired,
    style: PropTypes.object,
    menu: PropTypes.func.isRequired,
    menuStyle: PropTypes.object,
    delay: PropTypes.number,
    trigger: PropTypes.arrayOf(
      PropTypes.oneOf(['click', 'hover'])
    ),
    animationStyles: PropTypes.arrayOf(
      PropTypes.object
    )
  }

  static defaultProps = {
    delay: 1,
    trigger: ['click', 'hover'],
    animationStyles: [style.hideStyle, style.showStyle]
  }

  constructor(props) {
    super(props);
    const {animationStyles} = props;
    this.state = {
      isShown: false,
      addStyle: {}
    };

    this.init = true;
    this.isEnter = false;
    this.showStyle = toggleStyle(true, animationStyles);
    this.hideStyle = toggleStyle(false, animationStyles);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
    this.hide = this.hide.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.children !== nextProps.children ||
      this.state.isShown !== nextState.isShown ||
      !areEqual(this.state.addStyle, nextState.addStyle)
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {children, style: propsStyle, menu, menuStyle, trigger, ...props} = this.props;
    const {isShown, addStyle} = this.state;
    const newMenuStyle = [
      style.menu,
      menuStyle,
      isShown ? this.showStyle : this.hideStyle,
      addStyle
    ];

    if(this.init)
      newMenuStyle.push(style.init);

    delete props.delay;
    delete props.animationStyles;

    return (
      <div {...props}
        style={[style.root, propsStyle]}
      >
        {React.cloneElement(children, {
          ...(trigger.includes('click') ? {onClick: this.toggleMenu} : {}),
          onMouseEnter: this.showMenu,
          onMouseLeave: this.hideMenu
        })}

        {loadAnimation([this.showStyle, this.hideStyle])}

        <StyleRoot style={newMenuStyle}
          onAnimationEnd={this.animationEnd}
          onMouseEnter={this.showMenu}
          onMouseLeave={this.hideMenu}
        >
          {menu({
            hide: this.hide
          })}
        </StyleRoot>
      </div>
    );
  }

  hide() {
    this.isEnter = false;
    this.setState({isShown: false});
  }

  toggleMenu() {
    const {trigger} = this.props;

    this.init = false;
    if(trigger.includes('hover')) {
      if(!this.isEnter)
        this.setState({isShown: !this.state.isShown});
    } else
      this.setState({isShown: !this.state.isShown});
  }

  showMenu() {
    const {trigger} = this.props;

    clearInterval(this.interval);

    this.init = false;
    this.isEnter = true;
    this.interval = setInterval(() => {
      this.isEnter = false;
    }, 500);

    if(trigger.includes('hover'))
      this.setState({isShown: true});
  }

  hideMenu() {
    const {trigger, delay} = this.props;

    this.isEnter = false;

    if(trigger.includes('hover')) {
      this.interval = setInterval(() => {
        this.setState({isShown: false});
      }, delay * 1000);
    }
  }

  animationEnd(e) {
    const {isShown} = this.state;
    this.setState({
      addStyle: isShown ? {} : style.hide
    });
  }
}
