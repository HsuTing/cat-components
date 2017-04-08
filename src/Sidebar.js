'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import radium, {StyleRoot} from 'radium';

import style from './style/sidebar';

@radium
class Sidebar extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    rootStyle: PropTypes.func,
    isShown: PropTypes.bool,
    hide: PropTypes.func.isRequired
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
    const {children, rootStyle} = this.props;
    const {isShown} = this.state;
    const childrenProps = children.props;

    return (
      <StyleRoot style={[style.root(isShown), rootStyle(isShown)]}
                 onAnimationEnd={this.animationEnd}
      >
        <div style={style.background}
             onClick={this.hide}
        />

        {React.cloneElement(children, {
          style: Object.assign(
            {},
            style.menu,
            childrenProps.style
          )
        })}
      </StyleRoot>
    );
  }

  hide() {
    this.setState({isShown: false});
  }

  animationEnd() {
    if(!this.state.isShown)
      this.props.hide();
  }
}

class SidebarController {
  constructor() {
    this.nodeId = 'sidebar';
    this.isShown = false;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  set id(id) {
    this.nodeId = id;
  }

  show(component = <div />, rootStyle = () => {}, callback = () => {}) {
    if(this.isShown)
      return;

    this.isShown = true;
    this.component = component;
    ReactDOM.render(
      <Sidebar rootStyle={rootStyle}
               hide={this.hide}
               isShown={true}
      >{component}</Sidebar>,
      document.getElementById(this.nodeId)
    );
    callback();
  }

  hide(callback = () => {}) {
    this.isShown = false;
    ReactDOM.render(
      <Sidebar rootStyle={() => ({display: 'none'})}
               hide={this.hide}
      >{this.component}</Sidebar>,
      document.getElementById(this.nodeId)
    );
    callback();
  }
}

export default new SidebarController();
