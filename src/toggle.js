'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import radium, {StyleRoot} from 'radium';
import invariant from 'invariant';
import CheckBoxIcon from 'react-icons/lib/md/check-box';
import CheckBoxOutlineIcon from 'react-icons/lib/md/check-box-outline-blank';
import RadioButtonCheckedIcon from 'react-icons/lib/md/radio-button-checked';
import RadioButtonUnchecked from 'react-icons/lib/md/radio-button-unchecked';

import * as style from './style/toggle';

export const toggleStyle = style;

@radium
class Switch extends React.Component {
  static propTypes = {
    isClicked: PropTypes.bool,
    buttonStyle: PropTypes.func
  }

  static defaultProps = {
    isClicked: false,
    buttonStyle: () => {}
  }

  render() {
    const {buttonStyle, isClicked, ...props} = this.props;
    const newStyle = [
      style.switchStyle(isClicked).button,
      buttonStyle(isClicked)
    ];

    return (
      <div {...props}>
        <StyleRoot style={newStyle} />
      </div>
    );
  }
}

@radium
export default class Toggle extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    rootStyle: PropTypes.func,
    type: PropTypes.string,
    clicked: PropTypes.bool,
    icons: PropTypes.shape({
      default: PropTypes.any.isRequired,
      clicked: PropTypes.any.isRequired
    })
  }

  static defaultProps = {
    rootStyle: () => {},
    type: 'checkbox',
    checked: false,
    onClick: () => {}
  }

  constructor(props) {
    super(props);
    this.state = {
      isClicked: (
        props.type === 'checkbox' ?
          props.checked :
          props.checked || props.clicked
      )
    };

    if(props.type === 'radio')
      invariant(
        !(props.clicked === undefined),
        'If you use "radio", you should use "clicked" to make sure that the value of "radio" will be only one value.'
      );

    this.getIcons = this.getIcons.bind(this);
    this.click = this.click.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.clicked !== this.props.clicked)
      this.setState({isClicked: nextProps.clicked});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isClicked !== this.state.isClicked;
  }

  render() {
    const {type, ...props} = this.props;
    const {isClicked} = this.state;
    const Icon = this.getIcons(isClicked);
    const iconStyle = {
      ...style.root,
      ...(type === 'switch' ? style.switchStyle(isClicked).bar : {}),
      ...props.rootStyle(isClicked)
    };

    delete props.rootStyle;
    delete props.clicked;
    delete props.icons;

    if(type === 'switch')
      props.isClicked = isClicked;

    return (
      <Icon {...props}
        style={iconStyle}
        onClick={this.click}
      />
    );
  }

  getIcons(isClicked) {
    const {type, icons} = this.props;

    if(icons)
      return isClicked ? icons.clicked : icons.default;

    switch(type) {
      case 'radio':
        return isClicked ? RadioButtonCheckedIcon : RadioButtonUnchecked;

      case 'switch':
        return Switch;

      default:
        return isClicked ? CheckBoxIcon : CheckBoxOutlineIcon;
    }
  }

  click(e) {
    const {onClick} = this.props;
    const {isClicked} = this.state;

    onClick(!isClicked, e);
    this.setState({isClicked: !isClicked});
  }
}
