'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import ImgZoom, {addZoom} from 'cat-components/lib/img-zoom';
import Img from 'cat-components/lib/img';

@addZoom
@radium
class UseImgZoom extends React.Component {
  static propTypes = {
    zoomIn: PropTypes.func.isRequired
  }

  render() {
    const {zoomIn} = this.props;

    return (
      <Img src='https://hsuting.github.io/img/icon.svg'
        onClick={e => zoomIn('https://hsuting.github.io/img/icon.svg', e)}
      />
    );
  }
}

export default () => ( // eslint-disable-line react/display-name
  <ImgZoom>
    <UseImgZoom />
  </ImgZoom>
);
