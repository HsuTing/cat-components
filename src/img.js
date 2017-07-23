'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import * as style from './style/img';

@radium
export default class Img extends React.Component {
  static propTypes = {
    type: PropTypes.oneOf([
      'div',
      'img'
    ]),
    link: PropTypes.string,
    target: PropTypes.string,
    src: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
  }

  componentDidMount() {
    const {src} = this.props;
    const img = new Image();

    img.onload = () => {
      this.setState({src});
    };
    img.src = src;
  }

  render() {
    const {type, link, target, ...props} = this.props;
    const {src} = this.state;
    delete props.src;
    const component = type === 'div' && src !== '' ?
      <StyleRoot {...props}
        style={[props.style, style.div(src)]}
      /> :
      <img {...props}
        src={src}
      />

    if(link)
      return (
        <a href={link}
          target={target ? target : '_self'}
        >
          {component}
        </a>
      );

    return component;
  }
}
