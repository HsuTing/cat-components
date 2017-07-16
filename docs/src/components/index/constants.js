'use strict';

export const output = (
  names = [],
  excludeName = [],
  additionalPath = ''
) => names.map(name => ({
  name,
  text: require(`./../text/${additionalPath}${name[0].toLowerCase() + name.slice(1)}`).default,
  component: (() => {
    if(excludeName.includes(name))
      return false;
    return require(`./../${additionalPath}Use${name}`).default;
  })()
}));

export const styles = output([
  'Color',
  'Layout'
], [
  'Color'
]);

export const components = output([
  'Accordion',
  'Alert',
  'Button',
  'Calendar',
  'CalendarTable',
  'Loading',
  'I18n',
  'Icon',
  'Img',
  'Input',
  'Link',
  'Menu',
  'PictureSlideshow',
  'Sidebar',
  'Slider',
  'Square',
  'Table',
  'Toggle',
  'Wrapper'
], [
  'Link',
  'Wrapper'
]);

export const decorators = output([
  'CheckAPI',
  'GoToAnimation'
]);
