'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import goToAnimation from 'cat-components/lib/goToAnimation';

@radium
@goToAnimation('#body')
export default class Buttons extends React.Component {
  static propTypes = {
    goTo: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }

  render() {
    const {goTo, title, items} = this.props;

    return (
      <div>
        <h4>{(title[0].toUpperCase() + title.slice(1)).replace(/_/g, ' ')}</h4>
        <div>
          {items.map(({name}, itemIndex) => (
            <Button key={itemIndex}
              onClick={/* istanbul ignore next */ () => goTo(`#${name}`)}
            >{name}</Button>
          ))}
        </div>
      </div>
    );
  }
}
