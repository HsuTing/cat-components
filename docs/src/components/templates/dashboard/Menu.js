'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Route} from 'react-router-dom';
import Img from 'cat-components/lib/img';
import Link from 'cat-components/lib/link';

import * as style from './style/menu';
import pages from './../temp/dashboard';

@radium
export default class Menu extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    style: PropTypes.object,
    hide: PropTypes.func
  }

  static defaultProps = {
    hide: () => {}
  }

  render() {
    const {img, email, hide, ...props} = this.props;

    return (
      <StyleRoot style={[style.root, props.style]}>
        <div style={style.header}>
          <div />

          <div style={style.imgBackground}>
            <Img style={[style.imgBackground, style.img]}
              src={img}
              type='div'
            />
          </div>

          <p style={style.email}
          >{email}</p>
        </div>

        <div style={style.linkRoot}>
          {pages.map(({title, path}, index) => (
            <Route key={index}
              path={path}
              exact
            >
              {({match}) => (
                <Link style={style.link(match)}
                  to={path}
                  onClick={() => hide()}
                >{title}</Link>
              )}
            </Route>
          ))}
        </div>
      </StyleRoot>
    );
  }
}
