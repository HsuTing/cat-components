'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import style from './style/table';

@radium
export class Table extends React.Component {
  static propTypes = {
    style: PropTypes.object
  }

  render() {
    return (
      <table {...this.props}
        style={[style.table, this.props.style]}
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
    return (
      <tr {...this.props}
        style={[style.tr, this.props.style]}
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
    return (
      <th {...this.props}
        style={[style.th, this.props.style]}
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
    return (
      <td {...this.props}
        style={[style.td, this.props.style]}
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
    return (
      <thead {...this.props}
        style={[style.thead, this.props.style]}
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
    return (
      <tbody {...this.props}
        style={[style.tbody, this.props.style]}
      >
        {React.Children.map(this.props.children, node => {
          const component = React.cloneElement(node);
          if(component.type === Tr)
            return React.cloneElement(node, {
              style: style.trHover
            });

          return component;
        })}
      </tbody>
    );
  }
}
