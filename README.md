# Cat-components [![NPM version][npm-image]][npm-url]
Here are `react` components and a function to rendering `html` with `react`. All components are build with [radium](https://github.com/FormidableLabs/radium).

## Components
You can see [here](http://hsuting.github.io/cat-components) to learn how to use components.

#### List
- Link
- Wrapper
- GoogleDrive
- Input
- Button
- Img
- GoTo
- PictureSlideshow
- Square
- Menu
- Accordion
- Calendar
- Table
- Toggle
- Slider
- Loading
- Alert
- Sidebar
- Icon

## Bin
Use to render `HTML` with `react` and `nunjucks`.
```
static [config name]
```

#### Config
You can use any name, but need to give this name as argument.

- Example:

  ```javascript
  module.exports = [
    {
      component: './lib/components/Index',
      js: 'index',
      name: 'index'
    }
  ]
  ```
- options
  - `component`: This is your main component.
  - `js`: This the name of the main js which will be include in `template`.
  - `name`: The name of `html` is rendered.
  - `root`: This is the root folder of `views` which is  your `template` folder.
  - `template(default: ./views/template.html)`: If you need, you can choose your template in `views`.
  - You can add any option which you need to give to your `template`.

## License
MIT © [hsuting](http://hsuting.com)

[npm-image]: https://badge.fury.io/js/cat-components.svg
[npm-url]: https://npmjs.org/package/cat-components
