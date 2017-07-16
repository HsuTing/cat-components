'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import radium, {StyleRoot} from 'radium';

import style from './style/sidebar';

@radium
class SidebarTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    backgroundStyle: PropTypes.object,
    isShown: PropTypes.bool,
    hideSidebar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: true
    };

    this.hide = this.hide.bind(this);
    this.animationEnd = this.animationEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isShown !== this.state.isShown)
      this.setState({isShown: nextProps.isShown});
  }

  render() {
    const {children, rootStyle, backgroundStyle} = this.props;
    const {isShown} = this.state;
    const childrenProps = children.props;

    return (
      <StyleRoot style={[style.root(isShown), rootStyle]}
        onAnimationEnd={this.animationEnd}
      >
        <div style={[style.background, backgroundStyle]}
          onClick={this.hide}
        />

        <aside {...childrenProps}
          style={[style.menu, childrenProps.style]}
        />
      </StyleRoot>
    );
  }

  hide() {
    this.setState({isShown: false});
  }

  animationEnd() {
    if(!this.state.isShown)
      this.props.hideSidebar();
  }
}

export const sidebarBuilder = Component => class extends React.Component { // eslint-disable-line react/display-name
  static contextTypes = {
    sidebar: PropTypes.func.isRequired,
    hideSidebar: PropTypes.func.isRequired
  }

  render() {
    return (
      <Component {...this.state}
        {...this.props}
        {...this.context}
      />
    );
  }
}

export default class Sidebar extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    children: PropTypes.element.isRequired,
    menu: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    backgroundStyle: PropTypes.object
  }

  static defaultProps ={
    id: 'sidebar'
  }

  static childContextTypes = {
    sidebar: PropTypes.func.isRequired,
    hideSidebar: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.isShown =  false;
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
      <SidebarTemplate rootStyle={rootStyle}
        backgroundStyle={backgroundStyle}
        hideSidebar={this.hideSidebar}
        isShown={true}
      >{menu}</SidebarTemplate>,
      document.getElementById(id)
    );
  }

  hideSidebar() {
    const {id, menu, backgroundStyle} = this.props;

    this.isShown = false;
    ReactDOM.render(
      <SidebarTemplate rootStyle={{display: 'none'}}
        backgroundStyle={backgroundStyle}
        hideSidebar={this.hideSidebar}
      >{menu}</SidebarTemplate>,
      document.getElementById(id)
    );
  }
}
