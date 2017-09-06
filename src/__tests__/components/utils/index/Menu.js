'use strict';

import {JSDOM} from 'jsdom';

import timer from './../timer';

export default wrapper => {
  describe('## Menu', () => {
    [0, 1, 2].forEach(index => {
      describe(`### item ${index}`, () => {
        const getOpacity = () => {
          return (new JSDOM(wrapper.find('UseMenu').find('Menu').at(index).children().last().html()))
            .window.document.querySelector('div').style.opacity;
        };
        const click = () => {
          wrapper.find('UseMenu').find('Menu').at(index).find('svg').simulate('click');
          wrapper.find('UseMenu').find('Menu').at(index).children().last().simulate('animationEnd');
        };

        expect(getOpacity()).toBe('0');

        it('#### show with click', () => {
          click();
          expect(getOpacity()).toBe(
            [0, 1].includes(index) ? '1' : '0'
          );
        });

        it('#### hide with click', () => {
          click();
          expect(getOpacity()).toBe('0');
        });

        it('#### mouseEnter and mouseLeave', async () => {
          wrapper.find('UseMenu').find('Menu').at(index).children().last().simulate('mouseEnter');
          wrapper.find('UseMenu').find('Menu').at(index).children().last().simulate('mouseLeave');
          expect(getOpacity()).toBe(
            [0, 2].includes(index) ? '1' : '0'
          );

          await timer(1000);

          expect(getOpacity()).toBe('0');
        });

        if(index === 0) {
          it('#### mouseEnter and hide with click', async () => {
            wrapper.find('UseMenu').find('Menu').at(index).children().last().simulate('mouseEnter');
            click();
            expect(getOpacity()).toBe('1');

            await timer(500);

            click();
            expect(getOpacity()).toBe('0');
          });
        }
      });
    });
  });
};
