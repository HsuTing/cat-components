'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium from 'radium';
import ArrowDropDownIcon from 'react-icons/lib/md/arrow-drop-down';
import Menu from 'cat-components/lib/menu';
import * as layoutStyle from 'cat-components/lib/layout';
import {inputStyle} from 'cat-components/lib/input';

import * as style from './style/inputSelect';

const items = [
  'option 1',
  'optoin 2',
  'option 3'
];

@radium
class Options extends React.Component {
  static propTypes = {
    choose: PropTypes.func.isRequired,
    choice: PropTypes.oneOf(items.concat('')).isRequired,
    hide: PropTypes.func.isRequired
  }

  render() {
    const {choose, choice, hide} = this.props;

    return (
      <div>
        {items.map((item, itemIndex) => (
          <div key={itemIndex}
            style={style.option(itemIndex === items.length - 1, choice === item)}
            onClick={() => {
              hide();
              choose(item);
            }}
          >{item}</div>
        ))}
      </div>
    );
  }
}

@radium
export default class InputSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: ''
    };

    this.choose = this.choose.bind(this);
  }

  componentDidMount() {
    this.choose('');
  }

  render() {
    const {choice} = this.state;

    return (
      <Menu menuStyle={style.menu}
        menu={({hide}) => (
          <Options choose={this.choose}
            choice={choice}
            hide={hide}
          />
        )}
        delay={0.1}
        trigger={['click']}
        animationStyles={[style.menuHideStyle, style.menuShowStyle]}
      >
        <div style={[layoutStyle.grid(), style.root]}>
          <div style={[inputStyle.input, style.input(choice === '')]}>
            {choice === '' ? 'Choose a option' : choice}
          </div>

          <ArrowDropDownIcon style={style.icon} />
        </div>
      </Menu>
    );
  }

  choose(choice) {
    this.setState({choice});
  }
}
