'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import uuid from 'uuid';
import eventController from 'cat-utils/lib/event-controller';
import imgResize from 'cat-utils/lib/imgResize';

import style from './style/pictureSlideshow';

@radium
export default class PictureSlideshowStyle extends React.Component {
  static propTypes = {
    index: React.PropTypes.number.isRequired,
    imgs: React.PropTypes.array.isRequired,
    type: React.PropTypes.string,
    hideStyle: React.PropTypes.shape({
      left: React.PropTypes.object.isRequired,
      right: React.PropTypes.object.isRequired
    }),
    showStyle: React.PropTypes.shape({
      left: React.PropTypes.object.isRequired,
      right: React.PropTypes.object.isRequired
    })
  }

  static defaultProps = {
    hideStyle: style.hideStyle,
    showStyle: style.showStyle
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
    const {index, imgs, hideStyle, showStyle} = this.props;

    return (
      nextProps.index !== index ||
      nextProps.imgs !== imgs ||
      nextProps.hideStyle !== hideStyle ||
      nextProps.showStyle !== showStyle
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
    const {imgs, type, hideStyle, showStyle, ...props} = this.props;
    const {direction, index, preIndex} = this.state;

    delete props.index;

    return (
      <div {...props}
           style={[style.root, props.style]}
           ref={node => (this.node = node)}
      >
        {imgs.map((img, imgIndex) => {
          let animation = style.hide;

          if(imgIndex === index)
            animation = showStyle[direction];
          else if(imgIndex === preIndex)
            animation = hideStyle[direction];

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
