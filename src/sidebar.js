'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import toggleStyle from 'utils/toggleStyle';

import Template from './sidebar/template';
import builder from './sidebar/builder';
import * as style from './style/sidebar';

export const sidebarStyle = style;
export const sidebarBuilder = builder;

export default class Sidebar extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.element.isRequired,
    menu: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    backgroundStyle: PropTypes.object,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object.isRequired
    )
  }

  static defaultProps ={
    id: 'sidebar',
    animationStyles: [style.hideStyle, style.showStyle]
  }

  static childContextTypes = {
    sidebar: PropTypes.func.isRequired,
    hideSidebar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.isShown =  false;
    this.showStyle = toggleStyle(true, props.animationStyles);
    this.hideStyle = toggleStyle(false, props.animationStyles);
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
    return React.Children.only(
      this.props.children
    );
  }

  sidebar() {
    if(this.isShown)
      return;

    const {id, menu, rootStyle, backgroundStyle} = this.props;

    this.isShown = true;
    ReactDOM.render(
      <Template rootStyle={rootStyle}
        showStyle={this.showStyle}
        hideStyle={this.hideStyle}
        backgroundStyle={backgroundStyle}
        hideSidebar={this.hideSidebar}
        isShown={true}
      >{menu}</Template>,
      document.getElementById(id)
    );
  }

  hideSidebar() {
    const {id, menu, backgroundStyle} = this.props;

    this.isShown = false;
    ReactDOM.render(
      <Template rootStyle={{display: 'none'}}
        showStyle={this.showStyle}
        hideStyle={this.hideStyle}
        backgroundStyle={backgroundStyle}
        hideSidebar={this.hideSidebar}
      >{menu}</Template>,
      document.getElementById(id)
    );
  }
}
