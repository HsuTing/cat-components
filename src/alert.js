'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from 'react-icons/lib/md/close';

import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import Template from './alert/template';
import builder from './alert/builder';
import * as style from './style/alert';

export const alertStyle = style;
export const alertBuilder = builder;

export default class Alert extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    animationStyles: PropTypes.arrayOf(
      PropTypes.object.isRequired
    )
  }

  static defaultProps ={
    animationStyles: [style.hideStyle, style.showStyle]
  }

  static childContextTypes = {
    alert: PropTypes.func.isRequired,
    hideAlert: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      component: () => <div />
    };

    this.showStyle = toggleStyle(true, props.animationStyles);
    this.hideStyle = toggleStyle(false, props.animationStyles);

    this.hide = this.hide.bind(this);
    this.alert = this.alert.bind(this);
  }

  getChildContext() {
    return {
      alert: this.alert,
      hideAlert: this.hide
    };
  }

  render() {
    const {children, ...props} = this.props;
    const {isShown, component} = this.state;

    delete props.animationStyles;

    return (
      <div {...props}>
        {loadAnimation([this.showStyle, this.hideStyle])}

        {children}

        <Template isShown={isShown}
          showStyle={this.showStyle}
          hideStyle={this.hideStyle}
        >
          {component({
            hide: this.hide,
            Icon: props => (
              <CloseIcon onClick={this.hide}
                {...props}
                style={{...style.icon, ...props.style}}
              />
            )
          })}
        </Template>
      </div>
    );
  }

  hide() {
    const {isShown} = this.state;

    if(!isShown)
      return;

    this.setState({
      isShown: false
    });
  }

  alert(component = ({Icon}) => <div><Icon /></div>) {
    const {isShown} = this.state;

    if(isShown)
      return;

    this.setState({
      isShown: true,
      component
    });
  }
}
