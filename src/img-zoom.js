'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import ImgResize from 'share/ImgResize';
import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import * as style from './style/imgZoom';
import add from './img-zoom/add';

export const addZoom = add;

@radium
export default class ImgZoom extends React.Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static childContextTypes = {
    zoomIn: PropTypes.func.isRequired,
    zoomOut: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      src: null,
      isZoom: false,
      addStyle: {},
      imgAnimation: [],
      imgAnimationEnd: true
    };

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onImgAnimationEnd = this.onImgAnimationEnd.bind(this);
    this.onAnimationEnd = this.onAnimationEnd.bind(this);
  }

  getChildContext() {
    return {
      zoomIn: this.zoomIn,
      zoomOut: this.zoomOut
    };
  }

  render() {
    const {children, ...props} = this.props;
    const {src, addStyle, imgAnimation, imgAnimationEnd, isZoom} = this.state;

    return (
      <div {...props}
        ref={node => (this.node = node)}
      >
        {loadAnimation([true, false].map(bool => toggleStyle(bool, style.rootZoom)))}
        {
          imgAnimation.length !== 2 ?
            null :
            loadAnimation([true, false].map(bool => toggleStyle(bool, imgAnimation)))
        }

        {
          !src ?
            null :
            <StyleRoot style={[style.root, addStyle]}
              onClick={this.zoomOut}
              onAnimationEnd={this.onAnimationEnd}
            >
              <div style={style.imgBackground}>
                <ImgResize id='big-img'
                  src={src}
                  style={[
                    style.img,
                    imgAnimation.length === 2 && !imgAnimationEnd ?
                      toggleStyle(isZoom, imgAnimation) :
                      {}
                  ]}
                  onLoad={this.onLoad}
                  onAnimationEnd={this.onImgAnimationEnd}
                />
              </div>
            </StyleRoot>
        }

        {children}
      </div>
    );
  }

  zoomIn(src, e) {
    const clientRect = e.target.getBoundingClientRect();

    this.setState({
      src,
      addStyle: {opacity: '0'},
      imgAnimation: clientRect,
      isZoom: true
    });
  }

  zoomOut() {
    this.setState({
      addStyle: toggleStyle(false, style.rootZoom),
      imgAnimationEnd: false,
      isZoom: false
    });
  }

  getStyle({top, left, width, height}) {
    return {
      position: 'fixed',
      top: `${top}px`,
      left: `${left}px`,
      width: `${width}px`,
      height: `${height}px`
    };
  }

  onLoad(e) {
    const clientRect = e.target.getBoundingClientRect();
    const {imgAnimation} = this.state;
    const animation = [{
      ...this.getStyle(imgAnimation)
    }, {
      ...this.getStyle(clientRect)
    }];

    this.setState({
      addStyle: toggleStyle(true, style.rootZoom),
      imgAnimation: animation,
      imgAnimationEnd: false
    });
  }

  onImgAnimationEnd() {
    this.setState({
      imgAnimationEnd: true
    });
  }

  onAnimationEnd() {
    const {isZoom} = this.state;

    if(!isZoom)
      this.setState({
        addStyle: {display: 'none'},
        src: null
      });
  }
}
