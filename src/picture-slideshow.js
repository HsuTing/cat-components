'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import uuid from 'uuid';

import eventController from 'utils/eventController';
import imgResize from 'utils/imgResize';
import loadAnimation from 'utils/loadAnimation';

import * as style from './style/pictureSlideshow';

export const pictureSlideshowStyle = style;

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
    this.eventId = [];

    this.showStyle = style.showStyle(props.position);
    this.hideStyle = style.hideStyle(props.position);
    this.resize = this.resize.bind(this);
    this.resizeAll = this.resizeAll.bind(this);
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

  componentDidUpdate() {
    this.resizeAll();
  }

  componentWillUnmount() {
    this.eventId.forEach(id => {
      eventController.removeEvent = {
        name: 'resize',
        id
      };
    });
  }

  render() {
    const {imgs, type, ...props} = this.props;
    const {direction, index, preIndex} = this.state;

    delete props.index;
    delete props.position;

    return (
      <div {...props}
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
                <img {...img}
                  style={style.img}
                  onLoad={this.resize}
                />
              </StyleRoot>
            );

          const {src, ...imgProps} = img;
          const picture = {
            background: `url(${src}) center / cover`
          };

          return (
            <StyleRoot key={imgIndex}
              {...imgProps}
              style={[style.item, picture, img.style, animation]}
            />
          );
        })}
      </div>
    );
  }

  resize(e) {
    const id = uuid.v4();
    const target = e.target;
    const resize = () => {
      imgResize(target);
    };

    resize();
    eventController.addEvent = {
      name: 'resize',
      id,
      event: resize
    };
    this.eventId.push(id);
  }

  resizeAll() {
    const {type} = this.props;

    if(type === 'img')
      this.node.querySelectorAll('img')
        .forEach(imgResize);
  }
}
