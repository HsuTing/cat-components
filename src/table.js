'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import * as style from './style/table';

export const tableStyle = style;

@radium
export class Table extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const {style: propsStyle, ...props} = this.props;

    return (
      <table {...props}
        style={[style.table, propsStyle]}
      />
    );
  }
}

@radium
export class Tr extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const {style: propsStyle, ...props} = this.props;

    return (
      <tr {...props}
        style={[style.tr, propsStyle]}
      />
    );
  }
}

@radium
export class Th extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const {style: propsStyle, ...props} = this.props;

    return (
      <th {...props}
        style={[style.th, propsStyle]}
      />
    );
  }
}

@radium
export class Td extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const {style: propsStyle, ...props} = this.props;

    return (
      <td {...props}
        style={[style.td, propsStyle]}
      />
    );
  }
}

@radium
export class Thead extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    const {style: propsStyle, ...props} = this.props;

    return (
      <thead {...props}
        style={[style.thead, propsStyle]}
      />
    );
  }
}

@radium
export class Tbody extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object
  }

  render() {
    const {children, style: propsStyle, ...props} = this.props;

    return (
      <tbody {...props}
        style={[style.tbody, propsStyle]}
      >
        {React.Children.map(children, node => {
          return React.cloneElement(node, {
            style: style.trHover
          });
        })}
      </tbody>
    );
  }
}
