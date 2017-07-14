'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import {language} from 'cat-components/lib/i18n';

@radium
@language
export default class UseI18n extends React.Component {
  static propTypes = {
    translate: PropTypes.object.isRequired,
    changeLanguage: PropTypes.func.isRequired
  }

  render() {
    const {translate, changeLanguage} = this.props;

    return (
      <div>
        {[{
          title: '中文',
          value: 'zh-tw'
        }, {
          title: 'English',
          value: 'en-us'
        }].map((item, itemIndex) => (
          <Button key={itemIndex}
            onClick={changeLanguage(item.value)}
          >{item.title}</Button>
        ))}

        <div>{translate.hello}</div>
      </div>
    );
  }
}
