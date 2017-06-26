'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';

import Button from './../Button';
import Alert, {alertBuilder} from './../Alert';

@radium
@alertBuilder
class UseAlert extends React.Component {
  static propTypes = {
    alert: PropTypes.func.isRequired
  }

  render() {
    return (
      <Button onClick={() => this.props.alert(<div>Alert</div>)}
      >Alert</Button>
    );
  }
}

export default () => ( // eslint-disable-line react/display-name
  <Alert>
    <UseAlert />
  </Alert>
);
