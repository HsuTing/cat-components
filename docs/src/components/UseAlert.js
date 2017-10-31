'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import Button from 'cat-components/lib/button';
import Alert, {alertBuilder} from 'cat-components/lib/alert';

@radium
@alertBuilder
class UseAlert extends React.Component {
  static propTypes = {
    alert: PropTypes.func.isRequired
  }

  render() {
    const {alert} = this.props;

    return (
      <div>
        <Button onClick={() => alert()}
        >Default Alert</Button>

        <Button
          onClick={() => alert(({hide, Icon}) => (
            <div>
              <Icon />

              Alert
            </div>
          ))}
        >Custom Alert</Button>
      </div>
    );
  }
}

export default () => ( // eslint-disable-line react/display-name
  <Alert>
    <UseAlert />
  </Alert>
);
