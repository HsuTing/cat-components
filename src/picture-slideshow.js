'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import uuid from 'uuid';

import eventController from 'utils/eventController';
import imgResize from 'utils/imgResize';
import loadAnimation from 'utils/loadAnimation';

import Img from './img';
import * as style from './style/pictureSlideshow';

export const pictureSlideshowStyle = style;

@radium
class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.id = null;
    this.onload = this.onload.bind(this);
  }

  componentDidUpdate() {
    this.resize();
  }

  componentWillUnmount() {
    eventController.removeEvent = {
      name: 'resize',
      id: this.id
    };
  }

  render() {
    return (
      <Img {...this.props}
        onLoad={this.onload}
      />
    );
  }

  onload(e) {
    const id = uuid.v4();
    const target = e.target;
    this.resize = () => {
      imgResize(target);
    };

    eventController.addEvent = {
      name: 'resize',
      id,
      event: this.resize
    };
    this.resize();
    this.id = id;
  }
}

@radium
export default class PictureSlideshow extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    imgs: PropTypes.array.isRequired,
    type: PropTypes.oneOf([
      'img',
      'div'
    ]),
    position: PropTypes.shape({
      left: PropTypes.object.isRequired,
      center: PropTypes.object.isRequired,
      right: PropTypes.object.isRequired
    })
  }

  static defaultProps = {
    type: 'div',
    position: style.position
  }

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      preIndex: 0,
      direction: 'right',
      isAnimation: true
    };

    this.showStyle = style.showStyle(props.position);
    this.hideStyle = style.hideStyle(props.position);
  }

  componentDidMount() {
    const {index} = this.props;

    this.setState({
      index,
      preIndex: -1
    });
  }

  componentWillReceiveProps(nextProps) {
    const {index} = this.props;

    if(nextProps.index !== index) {
      this.setState({
        index: nextProps.index,
        preIndex: index,
        direction: nextProps.index > index ? 'left' : 'right'
      })
    }
  }

  shouldComponentUpdate(nextProps) {
    const {index, imgs} = this.props;

    return (
      nextProps.index !== index ||
      nextProps.imgs !== imgs
    );
  }

  render() {
    const {imgs, type, ...props} = this.props;
    const {direction, index, preIndex} = this.state;

    delete props.index;
    delete props.position;

    return (
      <StyleRoot {...props}
        style={[style.root, props.style]}
        ref={node => (this.node = node)}
      >
        {loadAnimation([
          this.hideStyle.left,
          this.hideStyle.right,
          this.showStyle.left,
          this.showStyle.right
        ])}

        {imgs.map((img, imgIndex) => {
          let animation = style.hide;

          if(imgIndex === index)
            animation = this.showStyle[direction];
          else if(imgIndex === preIndex)
            animation = this.hideStyle[direction];

          if(type === 'img')
            return (
              <StyleRoot key={imgIndex}
                style={[style.item, img.style, animation]}
              >
                <Picture {...img}
                  style={style.img}
                  type={type}
                />
              </StyleRoot>
            );

          return (
            <Img key={imgIndex}
              {...img}
              type={type}
              style={[style.item, img.style, animation]}
            />
          );
        })}
      </StyleRoot>
    );
  }
}
