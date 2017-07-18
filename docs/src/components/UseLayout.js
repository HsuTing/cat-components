'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import * as layoutStyle from 'cat-components/lib/layout';

import style from './style/useLayout';

@radium
export default class UseLayout extends React.Component {
  render() {
    return (
      <div>
        <h5>No padding</h5>
        <div style={layoutStyle.grid()}>
          {[].constructor.apply(this, new Array(12)).map((num, numIndex) => (
            <div key={numIndex}
              style={layoutStyle.col(1)}
            >
              <div style={style.col(numIndex)}>1</div>
            </div>
          ))}
        </div>

        <h5>Grid padding</h5>
        <div style={layoutStyle.grid({left: 20, right: 20})}>
          {[].constructor.apply(this, new Array(12)).map((num, numIndex) => (
            <div key={numIndex}
              style={layoutStyle.col(1)}
            >
              <div style={style.col(numIndex)}>1</div>
            </div>
          ))}
        </div>

        <h5>Col padding</h5>
        <div style={layoutStyle.grid()}>
          {[].constructor.apply(this, new Array(12)).map((num, numIndex) => (
            <div key={numIndex}
              style={layoutStyle.col(1, {left: 10, right: 10})}
            >
              <div style={style.col(numIndex)}>1</div>
            </div>
          ))}
        </div>

        <h5>Col tablet</h5>
        <div style={layoutStyle.grid()}>
          {[].constructor.apply(this, new Array(8)).map((num, numIndex) => (
            <StyleRoot key={numIndex}
              style={[layoutStyle.col(1), layoutStyle.col_tablet(1)]}
            >
              <div style={style.col(numIndex)}>1</div>
            </StyleRoot>
          ))}
        </div>

        <h5>Col phone</h5>
        <div style={layoutStyle.grid()}>
          {[].constructor.apply(this, new Array(4)).map((num, numIndex) => (
            <StyleRoot key={numIndex}
              style={[layoutStyle.col(1), layoutStyle.col_phone(1)]}
            >
              <div style={style.col(numIndex)}>1</div>
            </StyleRoot>
          ))}
        </div>
      </div>
    );
  }
}
