'use strict';

import React from 'react';
import radium from 'radium';
import Canvas, {
  CanvasRect,
  CanvasText,
  CanvasDraw
} from 'cat-components/lib/canvas';

@radium
class UseCanvas extends React.Component {
  render() {
    return (
      <CanvasDraw>
        <Canvas {...this.props}>
          <CanvasRect x='10'
            y='10'
            width='55'
            height='50'
            style={{
              fill: 'rgb(200,0,0)'
            }}
          />

          <CanvasText x='0'
            y='15'
            style={{
              fill: 'red'
            }}
          >Text</CanvasText>
        </Canvas>
      </CanvasDraw>
    );
  }
}

export default () => ( // eslint-disable-line react/display-name
  <div>
    <UseCanvas />
    <UseCanvas type='svg' />
  </div>
);
