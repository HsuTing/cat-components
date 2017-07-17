'use strict';

import React from 'react';
import radium from 'radium';
import Canvas, {
  CanvasRect,
  CanvasDraw
} from 'cat-components/lib/canvas';

@radium
export default class UseCanvas extends React.Component {
  render() {
    return (
      <CanvasDraw>
        <Canvas>
          <CanvasRect x='10'
            y='10'
            width='55'
            height='50'
            style={{
              fill: 'rgb(200,0,0)'
            }}
          />
        </Canvas>
      </CanvasDraw>
    );
  }
}
