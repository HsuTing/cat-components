'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import * as style from './../style/alert';

@radium
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isShown: PropTypes.bool,
    showStyle: PropTypes.object.isRequired,
    hideStyle: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      addStyle: {display: 'none'}
    };

    this.animationEnd = this.animationEnd.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.isShown)
      this.setState({addStyle: {}});
  }

  render() {
    const {children, isShown, showStyle, hideStyle} = this.props;
    const {addStyle} = this.state;
    const childrenProps = children.props;

    return (
      <StyleRoot {...childrenProps}
        onAnimationEnd={this.animationEnd}
        style={[
          style.root,
          childrenProps.style,
          isShown ? {} : addStyle,
          isShown ? showStyle : hideStyle
        ]}
      />
    );
  }

  animationEnd() {
    const {isShown} = this.props;

    if(!isShown)
      this.setState({addStyle: {display: 'none'}});
  }
}
