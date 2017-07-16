'use strict';

const output = (
  names = []
) => names.map(name => ({
  name,
  text: require(`./../text/multiple/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: require(`./../../../../lib/multiple/Use${name}`).default
}));

export const input = output([
  'InputDate'
]);
