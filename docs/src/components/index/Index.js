'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import {Switch, Route} from 'react-router-dom';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';
import Wrapper from 'cat-components/lib/wrapper';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import I18n from 'cat-components/lib/i18n';
import Img from 'cat-components/lib/img';
import goToAnimation from 'cat-components/lib/goToAnimation';

import Normalize from './../share/Normalize';
import * as style from './style/index';

import Simple from './Simple';
import Multiple from './Multiple';

@radium
@goToAnimation('body')
class Index extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    goTo: PropTypes.func.isRequired
  }

  render() {
    const {data, goTo} = this.props;

    return (
      <div style={style.root}>
        <Normalize />

        <div style={style.titleRoot}>
          <a href='https://github.com/HsuTing/cat-components'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Img src='https://hsuting.github.io/public/img/icon.svg'
              style={style.icon}
            />
            <h1 style={style.title}>
              Cat components

              <Route path='/multiple/'
                render={() => <font> [Multiple]</font>}
                exact
              />
            </h1>
          </a>
        </div>

        <Img link='https://npmjs.org/package/cat-components'
          target='_blank'
          src='https://badge.fury.io/js/cat-components.svg'
          style={style.statusImage}
        />

        <Route path='/multiple/'
          render={() => (
            <div>
              <Link to='/'>
                <Button>Go back</Button>
              </Link>
            </div>
          )}
          exact
        />

        <Switch>
          <Route path='/'
            render={() => <Simple data={data} />}
            exact
          />

          <Route path='/multiple/'
            render={() => <Multiple data={data} />}
            exact
          />
        </Switch>

        <ArrowUpward style={style.arrowUpward}
          onClick={() => goTo()}
        />
      </div>
    );
  }
}

/* eslint-disable */
export default ({redux, router, defaultData, dirPath, ...props}) => (
  <Wrapper redux={redux}
    router={router}
    modules={{
      redux: require('redux'),
      reactRedux: require('react-redux'),
      reactRouterDom: require('react-router-dom')
    }}
  >
    <I18n lang='en-us'
      defaultData={defaultData}
      dirPath={dirPath}
    >
      <Index {...props} />
    </I18n>
  </Wrapper>
);
/* eslint-enable */
