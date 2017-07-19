'use strict';

import React from 'react';
import radium from 'radium';
import PictureSlideshow from 'cat-components/lib/picture-slideshow';
import Button from 'cat-components/lib/button';

import * as style from './style/usePictureSlideshow';

const imgs = [{
  src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/17493450_397169997321386_4423519579884486656_n.jpg'
}, {
  src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/16465237_160262967811059_8777509647905980416_n.jpg'
}, {
  src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/16906239_1371447262875968_9128363095364730880_n.jpg'
}];

@radium
export default class UsePictureSlideshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };

    this.onClick = this.onClick.bind(this);
  }

  render() {
    const {index} = this.state;

    return (
      <div>
        <h5>Type: img</h5>
        <PictureSlideshow index={index}
          imgs={imgs}
          type='img'
        />

        <h5>Type: div</h5>
        <PictureSlideshow index={index}
          imgs={imgs}
        />

        {imgs.map((img, imgIndex) => (
          <Button key={imgIndex}
            style={imgIndex === index ? style.isClicked : {}}
            onClick={this.onClick(imgIndex)}
          >{imgIndex}</Button>
        ))}
      </div>
    );
  }

  onClick(index) {
    return e => {
      this.setState({index});
    };
  }
}
