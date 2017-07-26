# Cat-components [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
Here are `react` components, decorators and a function to rendering `html` with `react`. All components are build with [radium](https://github.com/FormidableLabs/radium).

## How to use it
You can see [here](https://hsuting.github.io/cat-components) to learn how to use components and decorators.

#### List
###### Styles
- color
- layout

###### Components
- accordion
- alert
- button
- calendar
- calendar-table
- canvas
- loading
- i18n
- icon
- img
- input
- input-redux
- link
- loading
- menu
- picture-slideshow
- sidebar
- slider
- square
- table
- timeline
- toggle
- wrapper

###### Decorators
- checkFBAPI
- goToAnimation

## Templates
You can use `yarn copy` to copy the `tempalates`.

- [login](https://hsuting.github.io/cat-components/login/)
- [dashboard](https://hsuting.github.io/cat-components/dashboard/)

## Bin
Use to render `HTML` with `react` and `nunjucks`.
```
static [config name]
```

#### Config
You can use any name, but need to give this name as argument.

- Example:

  ```js
  module.exports = [{
    component: './lib/components/Index',
    js: 'index',
    name: 'index'
  }];
  ```
- options
  - `component(required)`: This is your main component.
  - `name(required)`: The name of `html` is rendered.
  - `root(default: './views')`: This is the root folder of `views` which is  your `template` folder.
  - `template(default: './views/template.html')`: If you need, you can choose your template in `views`.
  - `props`: Give `props` to your component.
  - You can add any option to your `template`.

## License
MIT © [hsuting](http://hsuting.com)

[npm-image]: https://badge.fury.io/js/cat-components.svg
[npm-url]: https://www.npmjs.com/package/cat-components
[travis-image]: https://travis-ci.org/HsuTing/cat-components.svg?branch=master
[travis-url]: https://travis-ci.org/HsuTing/cat-components
