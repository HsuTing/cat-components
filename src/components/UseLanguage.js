'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import Language from './../Language';
import Button from './../Button';

@radium
class Show extends React.Component {
  static contextTypes = {
    chooseLanguage: PropTypes.func.isRequired
  }

  render() {
    const {chooseLanguage} = this.context;

    return (
      <h3>
        {chooseLanguage({
          chi: '中文',
          eng: 'English'
        })}
      </h3>
    );
  }
}

export default class UseLanguage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'eng'
    };

    this.choose = this.choose.bind(this);
  }

  render() {
    const {language} = this.state;

    return (
      <Language language={language}>
        <div>
          {[{
            title: '中文',
            value: 'chi'
          }, {
            title: 'English',
            value: 'eng'
          }].map((item, itemIndex) => (
            <Button key={itemIndex}
                    onClick={this.choose(item.value)}
            >{item.title}</Button>
          ))}

          <Show />
        </div>
      </Language>
    );
  }

  choose(value) {
    return () => {
      this.setState({language: value});
    };
  }
}
