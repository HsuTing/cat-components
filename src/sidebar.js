'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import Template from './sidebar/template';
import builder from './sidebar/builder';
import * as style from './style/sidebar';

export const sidebarStyle = style;
export const sidebarBuilder = builder;

export default class Sidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    menu: PropTypes.func.isRequired,
    rootStyle: PropTypes.object,
    backgroundStyle: PropTypes.object,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object.isRequired
    )
  }

  static defaultProps ={
    animationStyles: [style.hideStyle, style.showStyle]
  }

  static childContextTypes = {
    sidebar: PropTypes.func.isRequired,
    hideSidebar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    const {animationStyles} = props;
    this.state = {
      isShown: false,
      rootStyle: {display: 'none'}
    };

    this.showStyle = toggleStyle(true, animationStyles);
    this.hideStyle = toggleStyle(false, animationStyles);

    this.hide = this.hide.bind(this);
    this.sidebar = this.sidebar.bind(this);
    this.hideSidebar = this.hideSidebar.bind(this);
  }

  getChildContext() {
    return {
      sidebar: this.sidebar,
      hideSidebar: this.hideSidebar
    };
  }

  render() {
    const {children, menu, backgroundStyle, ...props} = this.props;
    const {isShown, rootStyle} = this.state;

    delete props.animationStyles;
    delete props.rootStyle;

    return (
      <div {...props}>
        {loadAnimation([this.showStyle, this.hideStyle])}

        {children}

        <Template rootStyle={rootStyle}
          isShown={isShown}
          backgroundStyle={backgroundStyle}
          showStyle={this.showStyle}
          hideStyle={this.hideStyle}
          hideSidebar={this.hideSidebar}
        >{menu({hide: this.hide})}</Template>
      </div>
    );
  }

  hide() {
    this.setState({
      isShown: false,
      rootStyle: this.props.rootStyle
    });
  }

  sidebar() {
    if(this.state.isShown)
      return;

    this.setState({
      isShown: true,
      rootStyle: this.props.rootStyle
    });
  }

  hideSidebar() {
    this.setState({
      isShown: false,
      rootStyle: {display: 'none'}
    });
  }
}
