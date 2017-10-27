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
    rules: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      tags: props.tags,
      value: '',
      isError: false,
      error: []
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  componentDidMount() {
    const {tags, isError, error} = this.state;

    this.props.onChange({
      value: tags,
      isError,
      error
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      !areEqual(this.state.tags, nextState.tags) ||
      this.state.value !== nextState.value
    );
  }

  componentDidUpdate() {
    const {tags, value, isError, error} = this.state;

    if(value !== '') {
      this.props.onChange({
        value: tags,
        isError,
        error
      });
    } else {
      this.props.onChange({
        value: tags,
        isError: false,
        error: []
      });
    }
  }

  render() {
    const {rules} = this.props;
    const {tags, value, isError, error} = this.state;

    return (
      <div>
        <div style={[inputStyle.input, style.root]}>
          {tags.map((tag, tagIndex) => (
            <Button key={tagIndex}
              style={style.tag}
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

        {
          !isError ?
            null :
            <span style={style.errorMessages}>
              {error.join(' ,')}
            </span>
        }
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
export default () => ( // eslint-disable-line react/display-name
  <InputTags tags={[]}
    onChange={data => console.log(data)}
    rules={[{
      validator: 'isEmail',
      not: true,
      message: 'This is not an email.'
    }]}
  />
);
