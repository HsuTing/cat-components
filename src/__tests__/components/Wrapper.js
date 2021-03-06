'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import * as redux from 'redux';
import * as reactRedux from 'react-redux';
import * as reactRouterDom from 'react-router-dom';
import {combineReducers} from 'redux';
import {createLogger} from 'redux-logger';

import Wrapper from 'cat-components/lib/wrapper';

describe('Wrapper', () => {
  describe('# redux', () => {
    const reducer = (state = 'origin', {type}) => state;

    it('## just reducer', () => {
      const wrapper = shallow(
        <Wrapper
          redux={{
            reducer: combineReducers({data: reducer})
          }}
          modules={{
            redux,
            reactRedux
          }}
        >
          <div />
        </Wrapper>
      );

      expect(wrapper.find('div').exists()).toBe(true);
    });

    describe('## use preloadedState', () => {
      it('### no enhancer', () => {
        const wrapper = shallow(
          <Wrapper
            redux={{
              reducer: combineReducers({data: reducer}),
              preloadedState: {data: 'test'}
            }}
            modules={{
              redux,
              reactRedux
            }}
          >
            <div />
          </Wrapper>
        );

        expect(wrapper.find('div').exists()).toBe(true);
      });

      describe('### use enhancer', () => {
        it('### single', () => {
          const wrapper = shallow(
            <Wrapper
              redux={{
                reducer: combineReducers({data: reducer}),
                preloadedState: {data: 'test'},
                enhancer: createLogger({collapsed: true})
              }}
              modules={{
                redux,
                reactRedux
              }}
            >
              <div />
            </Wrapper>
          );

          expect(wrapper.find('div').exists()).toBe(true);
        });

        it('### multiple', () => {
          const wrapper = shallow(
            <Wrapper
              redux={{
                reducer: combineReducers({data: reducer}),
                preloadedState: {data: 'test'},
                enhancer: [createLogger({collapsed: true})]
              }}
              modules={{
                redux,
                reactRedux
              }}
            >
              <div />
            </Wrapper>
          );

          expect(wrapper.find('div').exists()).toBe(true);
        });
      });
    });

    describe('## use enhancer', () => {
      it('### single', () => {
        const wrapper = shallow(
          <Wrapper
            redux={{
              reducer: combineReducers({data: reducer}),
              enhancer: createLogger({collapsed: true})
            }}
            modules={{
              redux,
              reactRedux
            }}
          >
            <div />
          </Wrapper>
        );

        expect(wrapper.find('div').exists()).toBe(true);
      });

      it('### multiple', () => {
        const wrapper = shallow(
          <Wrapper
            redux={{
              reducer: combineReducers({data: reducer}),
              enhancer: [createLogger({collapsed: true})]
            }}
            modules={{
              redux,
              reactRedux
            }}
          >
            <div />
          </Wrapper>
        );

        expect(wrapper.find('div').exists()).toBe(true);
      });
    });
  });

  it('# router', () => {
    const wrapper = shallow(
      <Wrapper router={{isServer: false}}
        modules={{reactRouterDom}}
      >
        <div />
      </Wrapper>
    );

    expect(wrapper.find('div').exists()).toBe(true);
  });
});
