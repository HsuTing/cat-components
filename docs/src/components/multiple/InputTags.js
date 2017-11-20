'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import areEqual from 'fbjs/lib/areEqual';
import radium from 'radium';
import HighlightRemoveIcon from 'react-icons/lib/md/highlight-remove';
import Button from 'cat-components/lib/button';
import Input, {inputCheck, inputStyle} from 'cat-components/lib/input';

import * as style from './style/inputTags';

@radium
class InputTags extends React.Component {
  static propTypes = {
    tags: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    rules: PropTypes.array.isRequired,
    tagsRules: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    const {tags} = props;
    this.state = {
      tags,
      value: '',
      isError: false,
      error: []
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    const {tags} = this.state;
    const {tagsRules} = this.props;

    this.props.onChange(
      inputCheck(tags, tagsRules)
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !areEqual(this.state.tags, nextState.tags) ||
      !areEqual(this.state._radiumStyleState, nextState._radiumStyleState) ||
      this.state.value !== nextState.value
    );
  }

  componentDidUpdate() {
    const {value, tags, isError, error} = this.state;
    const {tagsRules, onChange} = this.props;
    const tagsCheck = inputCheck(tags, tagsRules);

    if(value !== '') {
      onChange({
        value: tags,
        isError: isError || tagsCheck.isError,
        error: [
          ...error,
          ...(tagsCheck.isError ? tagsCheck.error : [])
        ]
      });
    } else
      onChange(tagsCheck);
  }

  render() {
    const {rules} = this.props;
    const {tags, value} = this.state;

    return (
      <div style={[inputStyle.input, style.root]}>
        {tags.map((tag, tagIndex) => (
          <Button key={tagIndex}
            onClick={this.removeTag(tagIndex)}
          >
            {tag}

            <HighlightRemoveIcon style={style.removeIcon} />
          </Button>
        ))}

        <Input style={style.input}
          value={value}
          rules={rules}
          placeholder='Use whitespace or enter to add tag'
          onKeyDown={this.onKeyDown}
          onChange={this.onChange}
        />
      </div>
    );
  }

  onKeyDown(e) {
    const {rules} = this.props;

    switch(e.key) {
      case ' ':
        this.key = 'add';
        break;

      case 'Enter': {
        const {value, isError} = this.state;

        this.key = 'add';

        if(!isError) {
          const tags = [...this.state.tags];

          tags.push(value);
          this.setState({
            ...(inputCheck('', rules)),
            tags
          });
        }
        break;
      }

      case 'Backspace': {
        const {value} = this.state;
        const tags = [...this.state.tags];

        this.key = 'delete';

        if(value === '') {
          this.setState({
            tags: tags.slice(0, tags.length - 1)
          });
        }
        break;
      }

      default:
        this.key = e.key;
        break;
    }
  }

  onChange(data) {
    const {rules} = this.props;
    const tags = [...this.state.tags];
    let output = {...data};

    if(this.key === 'add') {
      const value = data.value.slice(0, data.value.length - 1);
      const {isError} = inputCheck(value, rules);

      if(!isError) {
        output = inputCheck('', rules);
        tags.push(value);
      }
    }

    this.setState({
      ...output,
      tags
    });
  }

  removeTag(index) {
    return () => {
      const tags = [...this.state.tags];

      this.setState({
        tags: tags.filter((tag, tagIndex) => tagIndex !== index)
      });
    };
  }
}


// TODO: remove
export default class Temp extends React.Component { // eslint-disable-line react/display-name
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      isError: false,
      error: []
    };

    this.onChange = data => this.setState(data);
  }

  render() {
    const {value, isError, error} = this.state;

    return [
      <InputTags key='input'
        tags={value}
        onChange={this.onChange}
        rules={[{
          validator: 'isEmail',
          not: true,
          message: 'This is not an email.'
        }]}
        tagsRules={[{
          validator: value => !(value.length > 1),
          message: 'This must have two tags at least.'
        }]}
      />, (
        !isError ?
          null :
          <span key='message'
            style={style.errorMessages}
          >{error.join(' ,')}</span>
      )
    ];
  }
}
