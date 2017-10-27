'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import CloseIcon from 'react-icons/lib/md/close';

import * as style from './../style/alert';

@radium
export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    isShown: PropTypes.bool,
    hideAlert: PropTypes.func.isRequired,
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
    if(this.state.isShown !== nextProps.isShown)
      this.setState({isShown: nextProps.isShown});
  }

  render() {
    const {children, rootStyle, iconStyle, showStyle, hideStyle} = this.props;
    const {isShown} = this.state;
    const childrenProps = children.props;
    const childrens = React.Children.toArray(childrenProps.children)
      .concat([
        <CloseIcon key='icon'
          style={{...style.icon, ...iconStyle}}
          onClick={this.hide}
        />
      ]);

    return (
      <StyleRoot {...childrenProps}
        onAnimationEnd={this.animationEnd}
        style={[
          style.root,
          childrenProps.style,
          rootStyle,
          isShown ? showStyle : hideStyle
        ]}
      >
        {childrens}
      </StyleRoot>
    );
  }

  hide() {
    this.setState({isShown: false});
  }

  animationEnd() {
    if(!this.state.isShown)
      this.props.hideAlert();
  }
}
