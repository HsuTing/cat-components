'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import * as redux from 'redux';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import ArrowUpward from 'react-icons/lib/md/arrow-upward';
import Wrapper from 'cat-components/lib/wrapper';
import Button from 'cat-components/lib/button';
import Link from 'cat-components/lib/link';
import I18n from 'cat-components/lib/i18n';
import Img from 'cat-components/lib/img';
import Bundle, {load} from 'cat-components/lib/bundle';
import goToAnimation from 'cat-components/lib/goToAnimation';

import Normalize from './../share/Normalize';
import * as style from './style/index';

@radium
@goToAnimation('#body')
class Index extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    goTo: PropTypes.func.isRequired
  }

  render() {
    const {data, goTo} = this.props;

    return (
      <div id='body'
        style={style.root}
      >
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
                render={() => <font>[Multiple]</font>}
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
            render={() => (
              <Bundle load={
                /* istanbul ignore next */
                process.env.NODE_ENV === 'production' && process.env.TYPE === 'client' ?
                  require('bundle-loader?lazy&name=simple!./Simple') :
                  load(require('./Simple'))
              }
              >
                {Simple => <Simple data={data} />}
              </Bundle>
            )}
            exact
          />

          <Route path='/multiple/'
            render={() => (
              <Bundle load={
                /* istanbul ignore next */
                process.env.NODE_ENV === 'production' && process.env.TYPE === 'client' ?
                  require('bundle-loader?lazy&name=multiple!./Multiple') :
                  load(require('./Multiple'))
              }
              >
                {Multiple => <Multiple data={data} />}
              </Bundle>
            )}
            exact
          />
        </Switch>

        <ArrowUpward style={style.arrowUpward}
          onClick={/* istanbul ignore next */ () => goTo()}
        />
      </div>
    );
  }
}

/* eslint-disable */
export default ({redux: propsRedux, router, defaultData, basename, ...props}) => (
  <Wrapper redux={propsRedux}
    router={router}
    modules={{
      redux,
      reactRedux,
      reactRouterDom
    }}
  >
    <I18n lang='en-us'
      defaultData={defaultData}
      basename={basename}
    >
      <Index {...props} />
    </I18n>
  </Wrapper>
);
/* eslint-enable */
