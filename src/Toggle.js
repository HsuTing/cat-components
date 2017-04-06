'use strict';

import React from 'react';
import radium from 'radium';
import invariant from 'invariant';
import CheckBoxIcon from 'react-icons/lib/md/check-box';
import CheckBoxOutlineIcon from 'react-icons/lib/md/check-box-outline-blank';
import RadioButtonCheckedIcon from 'react-icons/lib/md/radio-button-checked';
import RadioButtonUnchecked from 'react-icons/lib/md/radio-button-unchecked';

import style from './style/toggle';

@radium
export default class Toggle extends React.Component {
  static propTypes = {
    checked: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    type: React.PropTypes.string,
    clicked: React.PropTypes.bool,
    icon: React.PropTypes.any,
    clickedIcon: React.PropTypes.any
  }

  static defaultProps = {
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
    const {type, clicked} = this.props;

    if(type === 'radio' && nextProps.clicked !== clicked) {
      this.setState({isClicked: nextProps.clicked});
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.isClicked !== this.state.isClicked;
  }

  render() {
    const {...props} = this.props;
    const {isClicked} = this.state;
    const {icon, clickedIcon} = this.getIcons();
    const Icon = isClicked ? clickedIcon: icon;

    delete props.type;
    delete props.clicked;
    delete props.icon;
    delete props.clickedIcon;

    return (
      <Icon {...props}
            style={Object.assign({}, style.root, props.style)}
            onClick={this.click}
      />
    );
  }

  getIcons() {
    const {type, icon, clickedIcon} = this.props;

    invariant(
      !((icon && !clickedIcon) || (!icon && clickedIcon)),
      'You should give "icon" and "clickedIcon" at the same time.'
    );

    if(icon && clickedIcon)
      return {
        icon,
        clickedIcon
      };

    if(type === 'radio')
      return {
        icon: RadioButtonUnchecked,
        clickedIcon: RadioButtonCheckedIcon
      };

    return {
      icon: CheckBoxOutlineIcon,
      clickedIcon: CheckBoxIcon
    };
  }

  click(e) {
    const {onClick} = this.props;
    const {isClicked} = this.state;

    onClick(!isClicked, e);
    this.setState({isClicked: !isClicked});
  }
}
