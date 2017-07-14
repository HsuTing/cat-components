'use strict';

export default `
  # [Wrapper](./#Wrapper)
  This is a component for using server side rendering with \`radium\`. It can alos render \`react-redux\` and \`react-router-dom\`. Use this component as the root component.

  #### Props
  - \`modules\`: Add the modules here. If you install other packages, you must add packages here because this component does not require those modules in component. The reason why this component does not require the modules is that the not using modules will not be added in \`js\`.
  - \`redux\`: This is an object. You can give \`reducer(required)\`, \`preloadedState\` and \`enhancer\`. This is used like \`createStore\` in \`redux\`. You need to install \`redux\` and \`react-redux\`.
  - \`router\`: This is an object. You can give \`isServer\` to choose \`StaticRouter\` or \`BrowserRouter\`. When \`isServer\` is \`true\`. you need to give an object like \`{location: '/', context: {}}\`. You need to install \`react-router-dom\`.

  #### Example
  \`\`\`js
  // Example.js
  'use strict';

  import React from 'react';
  import Wrapper from 'cat-components/lib/Wrapper';

  class Example extends React.Component {
    render() {
      return (
        <div>example</div>
      );
    }
  }

  // just add the modules which you use in modules.
  export default (props) => (
    <Wrapper {...props}
      modules={{
        redux: require('redux'),
        reactRedux: require('react-redux'),
        reactRouterDom: require('react-router-dom')
      }}
    >
      <Example />
    </Wrapper>
  );


  // # normal
  // client
  ReactDOM.render(
    <Example />,
    document.getElementById('root')
  );
  // server
  renderToStaticMarkup(
    <Example radiumConfig={{userAgent: ctx.request.headers['user-agent']}}
    />
  );


  // # redux
  import {combineReducers} from 'redux';
  import {createLogger} from 'redux-logger';

  import Example from './Example';
  import reducer from './reducer';

  const reducer = combineReducers({form});
  const enhancer = createLogger({collapsed: true});

  // client
  ReactDOM.render(
    <Example redux={{reducer, enhancer}}/>,
    document.getElementById('root')
  );
  // server
  renderToStaticMarkup(
    <Example radiumConfig={{userAgent: ctx.request.headers['user-agent']}}
      redux={{reducer, enhancer}}
    />
  );


  // # router
  // client
  ReactDOM.render(
    <Example router={{isServer: false}} />,
    document.getElementById('root')
  );
  // server
  cosnt context = {};

  renderToStaticMarkup(
    <Example radiumConfig={{userAgent: ctx.request.headers['user-agent']}}
      router={{
        isServer: true,
        location={ctx.request.url}
        context={context}
      }}
    />
  );
  \`\`\`
`;
