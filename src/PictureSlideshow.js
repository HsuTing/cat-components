'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import invariant from 'invariant';
import uuid from 'uuid';
import eventController from 'cat-utils/lib/event-controller';
import imgResize from 'cat-utils/lib/imgResize';

import style from './style/pictureSlideshow';

@radium
export default class PictureSlideshowAnimation extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    imgs: React.PropTypes.array.isRequired,
    type: React.PropTypes.string,
    hideAnimation: React.PropTypes.object,
    showAnimation: React.PropTypes.object
  }

  static defaultProps = {
    hideAnimation: style.hideAnimation,
    showAnimation: style.showAnimation
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
    const {index, imgs, hideAnimation, showAnimation} = this.props;

    return (
      nextProps.index !== index ||
      nextProps.imgs !== imgs ||
      nextProps.hideAnimation !== hideAnimation ||
      nextProps.showAnimation !== showAnimation
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
    eventController.runEvent();
  }

  render() {
    const {imgs, type, hideAnimation, showAnimation, ...props} = this.props;
    const {direction, index, preIndex} = this.state;

    delete props.index;

    invariant(
      hideAnimation.right || hideAnimation.left,
      'Props "hideAnimation" should have "right" and "left" to make an animation.'
    );

    invariant(
      showAnimation.right || showAnimation.left,
      'Props "showAnimation" should have "right" and "left" to make an animation.'
    );

    return (
      <div {...props}
           style={[style.root, props.style]}
           ref={node => (this.node = node)}
      >
        {imgs.map((img, imgIndex) => {
          let animation = style.hide;

          if(imgIndex === index)
            animation = showAnimation[direction];
          else if(imgIndex === preIndex)
            animation = hideAnimation[direction];

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
    eventController.runEvent();
    this.eventId.push(id);
  }

  resizeAll() {
    const {type} = this.props;

    if(type === 'img')
      this.node.querySelectorAll('img')
        .forEach(imgResize);
  }
}
