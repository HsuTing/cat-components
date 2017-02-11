# Cat-components
React components

## Components
- Wrapper: wrapper for `radium`.
- router
  - Link: `Link` of `react-router` for `radium`.

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
  - router(boolean): use `react-router` or not.
  - location(string): if `router` is true, you need to give a url to render.
  - redux(boolean): use `redux` or not.
  - reducer(string): if `redux` is true, you need to give a path of reducer.
  - data(object or array): if `redux` is true, you can give a inital data or not.
  - component(react component): your main component.
  - js(string): name of main js.
  - name(string): output name of html.
  - template(string): if you need, you can choose your template in `views`(default: `./views/template.html`).

## License
MIT © [hsuting](http://hsuting.com)
