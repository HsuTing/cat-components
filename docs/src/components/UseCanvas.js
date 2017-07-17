'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Canvas from 'cat-components/lib/canvas';

@radium
class UseCanvas extends React.Component {
  static propTypes = {
    ctx: PropTypes.object
  }

  componentDidMount() {
    const {ctx} = this.props;

    if(ctx) {
      ctx.fillStyle = 'rgb(200,0,0)';
      ctx.fillRect (10, 10, 55, 50);

      ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
      ctx.fillRect (30, 30, 55, 50);
    }
  }

  render() {
    return null;
  }
}

export default () => ( // eslint-disable-line react/display-name
  <Canvas>
    <UseCanvas />
  </Canvas>
);
