'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import timer from 'cat-components/lib/timer';
import Button from 'cat-components/lib/button';

@radium
@timer()
export default class UseTimer extends React.Component {
  static propTypes = {
    isRunning: PropTypes.bool.isRequired,
    timer: PropTypes.object.isRequired,
    timerStart: PropTypes.func.isRequired,
    timerStop: PropTypes.func.isRequired,
    timerReset: PropTypes.func.isRequired
  }

  render() {
    const {isRunning, timer, timerStart, timerStop, timerReset} = this.props;
    const {hours, minutes, seconds, milliseconds} = timer;

    return (
      <div>
        <div>
          {
            !isRunning ?
              <Button onClick={() => timerStart()}>start</Button> :
              <Button onClick={() => timerStop()}>stop</Button>
          }
          <Button onClick={() => timerReset()}>reset</Button>
        </div>

        {`${hours} hr ${minutes} min ${seconds} sec ${milliseconds} millsec`}
      </div>
    );
  }
}
