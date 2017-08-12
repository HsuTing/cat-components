'use strict';

import React from 'react';
import radium, {StyleRoot} from 'radium';
import * as layoutStyle from 'cat-components/lib/layout';

import * as style from './style/useLayout';

@radium
export default class UseLayout extends React.Component {
  render() {
    return (
      <StyleRoot style={[style.root, layoutStyle.tablet(style.tablet), layoutStyle.phone(style.phone)]} />
    );
  }
}
