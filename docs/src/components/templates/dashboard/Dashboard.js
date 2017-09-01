'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Switch, Route, withRouter} from 'react-router-dom';
import MenuIcon from 'react-icons/lib/md/menu';
import Wrapper from 'cat-components/lib/wrapper';
import Sidebar, {sidebarBuilder} from 'cat-components/lib/sidebar';

import Normalize from './../../share/Normalize';
import Menu from './Menu';
import * as style from './style/dashboard';
import pages from './../temp/dashboard';

@withRouter
@sidebarBuilder
@radium
class Dashboard extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    sidebar: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired
  }

  shouldComponentUpdate(nextProps) {
    return (
      JSON.stringify(this.props.location) !== JSON.stringify(nextProps.location)
    );
  }

  render() {
    const {img, email, sidebar} = this.props;

    return (
      <StyleRoot style={style.root}>
        <Menu img={img}
          email={email}
          style={style.menu}
        />

        <div>
          <Switch>
            {pages.map(({title, path}, index) => (
              <Route key={index}
                path={path}
                exact
                component={() => (
                  <div>
                    <header style={style.header}>
                      <StyleRoot style={style.menuIconRoot}>
                        <MenuIcon style={style.menuIcon}
                          onClick={() => sidebar()}
                        />
                      </StyleRoot>

                      {title}
                    </header>

                    <div style={style.content}>
                      content
                    </div>
                  </div>
                )}
              />
            ))}
          </Switch>
        </div>
      </StyleRoot>
    );
  }
}

/* eslint-disable react/display-name, react/prop-types */
export default ({radiumConfig, router, ...props}) => (
  <Wrapper radiumConfig={radiumConfig}
    router={router}
    modules={{
      reactRouterDom: require('react-router-dom')
    }}
  >
    <div>
      <Normalize />

      <Sidebar menu={({hide}) => (
        <div>
          <Menu email='hsuting0106@gmail.com'
            img='https://hsuting.github.io/public/img/icon.svg'
            hide={hide}
          />
        </div>
      )}
      >
        <Dashboard email='hsuting0106@gmail.com'
          img='https://hsuting.github.io/public/img/icon.svg'
        />
      </Sidebar>
    </div>
  </Wrapper>
);
/* eslint-enable react/display-name, react/prop-types */
