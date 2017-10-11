'use strict';

const output = (
  names,
  excludeName = [],
) => names.map(name => ({
  name,
  text: require(`./../text/${name[0].toLowerCase() + name.slice(1)}`).default,
  component: (() => {
    if(excludeName.includes(name))
      return false;
    return require(`./../Use${name}`).default;
  })()
}));

export const styles = output([
  'Color',
  'Layout'
], [
  'Color'
]);

export const components = output([
  'Alert',
  'Button',
  'Bundle',
  'Calendar',
  'CalendarTable',
  'Loading',
  'I18n',
  'Icon',
  'Img',
  'ImgZoom',
  'Input',
  'Link',
  'Menu',
  'PictureSlideshow',
  'Sidebar',
  'Slider',
  'Square',
  'Table',
  'Timeline',
  'Toggle',
  'Wrapper',
  'VideoSubtitle'
], [
  'Bundle',
  'Link',
  'Wrapper'
]);

export const decorators = output([
  'CheckAPI',
  'GoToAnimation',
  'Timer'
]);
