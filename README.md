# Cat-components [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
Here are `react` components, decorators and a function to rendering `html` with `react`. All components are build with [radium](https://github.com/FormidableLabs/radium).

## How to use it
You can see [here](http://hsuting.github.io/cat-components) to learn how to use components and decorators.

#### List
###### Components
- Accordion
- Alert
- Button
- Calendar
- CalendarTable
- Loading
- I18n
- Icon
- Img
- Input
- Link
- Menu
- PictureSlideshow
- Sidebar
- Slider
- Square
- Table
- Toggle
- Wrapper

###### Decorators
- checkFBAPI
- checkGAPI

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
  - `Props`: Give `Props` to you component.
  - You can add any option which you need to give to your `template`.

## License
MIT © [hsuting](http://hsuting.com)

[npm-image]: https://badge.fury.io/js/cat-components.svg
[npm-url]: https://npmjs.org/package/cat-components
[travis-image]: https://travis-ci.org/HsuTing/cat-components.svg?branch=master
[travis-url]: https://travis-ci.org/HsuTing/cat-components
