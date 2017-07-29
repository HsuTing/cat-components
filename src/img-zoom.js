'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import uuid from 'uuid';

import eventController from 'utils/eventController';
import imgResize from 'utils/imgResize';
import toggleStyle from 'utils/toggleStyle';
import loadAnimation from 'utils/loadAnimation';

import Img from './img';
import * as style from './style/imgZoom';
import add from './img-zoom/add';

export const addZoom = add;

@radium
export default class ImgZoom extends React.Component {
  static propTypes = {
    rootStyle: PropTypes.func,
    imgBackgroundStyle: PropTypes.object,
    imgStyle: PropTypes.object,
    children: PropTypes.element.isRequired
  }

  static defaultProps = {
    rootStyle: () => {}
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
  }

  getChildContext() {
    return {
      zoomIn: this.zoomIn,
      zoomOut: this.zoomOut
    };
  }

  componentDidUpdate() {
    if(this.state.imgAnimationEnd && this.resize)
      this.resize();
  }

  render() {
    const {children, rootStyle, imgBackgroundStyle, imgStyle, ...props} = this.props;
    const {src, addStyle, imgAnimation, imgAnimationEnd, isZoom} = this.state;

    return (
      <div {...props}
        ref={node => (this.node = node)}
      >
        {
          imgAnimation.length !== 2 ?
            null :
            loadAnimation([true, false].map(bool => toggleStyle(bool, imgAnimation)))
        }

        {
          !src ?
            null :
            <StyleRoot style={[style.root(isZoom), rootStyle(isZoom), addStyle]}
              onClick={this.zoomOut}
            >
              <div style={[style.imgBackground, imgBackgroundStyle]}>
                <Img src={src}
                  style={[
                    style.img,
                    imgStyle,
                    imgAnimation.length === 2 && !imgAnimationEnd ?
                      toggleStyle(isZoom, imgAnimation) : {}
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
    imgResize(e.target);
    const clientRect = e.target.getBoundingClientRect();
    const {imgAnimation} = this.state;
    const animation = [{
      ...this.getStyle(imgAnimation)
    }, {
      ...this.getStyle(clientRect)
    }];

    this.setState({
      addStyle: {opacity: '1'},
      imgAnimation: animation,
      imgAnimationEnd: false
    });
  }

  onImgAnimationEnd(e) {
    const target = e.target;
    const id = uuid.v4();

    this.id = id;
    this.resize = () => {
      imgResize(target);
    };
    eventController.addEvent = {
      name: 'resize',
      id,
      event: this.resize
    };
    this.setState({imgAnimationEnd: true});

    const {isZoom} = this.state;

    if(!isZoom) {
      eventController.removeEvent = {
        name: 'resize',
        id: this.id
      };
      this.setState({
        addStyle: {display: 'none'},
        src: null
      });
    }
  }
}
