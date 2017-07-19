'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import * as style from './../style/sidebar';

@radium
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    backgroundStyle: PropTypes.object,
    isShown: PropTypes.bool,
    hideSidebar: PropTypes.func.isRequired,
    showStyle: PropTypes.object.isRequired,
    hideStyle: PropTypes.object.isRequired
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
    const {children, rootStyle, backgroundStyle, showStyle, hideStyle} = this.props;
    const {isShown} = this.state;
    const childrenProps = children.props;

    return (
      <StyleRoot style={[style.root, rootStyle, isShown ? showStyle : hideStyle]}
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
