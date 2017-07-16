'use strict';

import React from 'react';
import radium from 'radium';
import HighlightRemoveIcon from 'react-icons/lib/md/highlight-remove';
import Button from 'cat-components/lib/button';
import Input, {inputCheck} from 'cat-components/lib/input';
import inputStyle from 'cat-components/lib/style/input';

import style from './style/inputTags';

const rules = [{
  validator: 'isEmail',
  not: true,
  message: 'This is not an email.'
}];

@radium
export default class InputTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      value: '',
      isError: false,
      error: []
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.onChange = this.onChange.bind(this);
    this.removeTag = this.removeTag.bind(this);
  }

  render() {
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
