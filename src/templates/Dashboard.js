'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import {Switch, Route} from 'react-router-dom';
import MenuIcon from 'react-icons/lib/md/menu';
import Img from 'cat-components/lib/img';
import Link from 'cat-components/lib/link';
import Sidebar, {sidebarBuilder} from 'cat-components/lib/sidebar';

import * as style from './style/dashboard';

const buttons = (
  path,
  title,
  hide
) => ({match}) => ( // eslint-disable-line react/display-name, react/prop-types
  <Link style={style.menu.link(match)}
    to={path}
    onClick={() => hide()}
  >{title}</Link>
);

@radium
class DashboardMenu extends React.Component {
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
      <StyleRoot style={[style.menu.root, props.style]}>
        <div style={style.menu.header}>
          <div />

          <div style={style.menu.imgBackground}>
            <Img style={[style.menu.imgBackground, style.menu.img]}
              src={img}
              type='div'
            />
          </div>

          <p style={style.menu.email}
          >{email}</p>
        </div>

        <div style={style.menu.linkRoot}>
          {pages.map(({title, path}, index) => (
            <Route key={index}
              path={path}
              exact
            >
              {buttons(path, title, hide)}
            </Route>
          ))}
        </div>
      </StyleRoot>
    );
  }
}

@sidebarBuilder
@radium
class Dashboard extends React.Component {
  static propTypes = {
    img: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    sidebar: PropTypes.func.isRequired
  }

  render() {
    const {img, email, sidebar} = this.props;

    return (
      <StyleRoot style={style.root}>
        <DashboardMenu img={img}
          email={email}
          style={style.menu.tabletRoot}
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


// TODO: revmoe
const pages = [{
  title: 'Home',
  path: '/'
}, {
  title: 'Page 1',
  path: '/page1/'
}, {
  title: 'Page 2',
  path: '/page2/'
}];

export default () => ( // eslint-disable-line react/display-name
  <Sidebar menu={({hide}) => (
    <div>
      <DashboardMenu email='hsuting0106@gmail.com'
        img='https://hsuting.github.io/img/icon.svg'
        hide={hide}
      />
    </div>
  )}
  >
    <Dashboard email='hsuting0106@gmail.com'
      img='https://hsuting.github.io/img/icon.svg'
    />
  </Sidebar>
);
