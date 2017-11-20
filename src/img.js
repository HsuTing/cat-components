'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';

import * as style from './style/img';

@radium
export default class Img extends React.Component {
  static propTypes = {
    style: PropTypes.object,
    type: PropTypes.oneOf([
      'div',
      'img'
    ]),
    link: PropTypes.string,
    target: PropTypes.string,
    src: PropTypes.string.isRequired,
    onLoad: PropTypes.func
  }

  static defaultProps = {
    onLoad: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      src: null
    };

    this.load = this.load.bind(this);
  }

  componentDidMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.src !== nextProps.src)
      this.load(nextProps);
  }

  componentWillUnmount() {
    this.unmount = true;
  }

  render() {
    const {style: propsStyle, type, link, target, ...props} = this.props;
    const {src} = this.state;

    delete props.src;

    if(!src) {
      return (
        <StyleRoot {...props}
          style={propsStyle}
        />
      );
    }

    const component = (
      type === 'div' ?
        <StyleRoot {...props}
          style={[propsStyle, style.div(src)]}
        /> :
        <img {...props}
          style={propsStyle}
          src={src}
        />
    );

    if(link) {
      return (
        <a href={link}
          target={target ? target : '_self'}
        >
          {component}
        </a>
      );
    }

    return component;
  }

  load(props) {
    const {type, src, onLoad} = props;
    const img = new Image();

    img.onload = () => {
      if(type === 'div')
        onLoad();

      /* istanbul ignore next */
      if(!this.unmount)
        this.setState({src});
    };
    img.src = src;
  }
}
