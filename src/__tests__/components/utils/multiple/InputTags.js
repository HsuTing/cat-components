'use strict';

export default wrapper => {
  describe('## InputTags', () => {
    describe('### add tag', () => {
      it('#### whitespace', () => {
        expect(
          wrapper.find('InputTags').find('Button').length
        ).toBe(0);

        wrapper.find('InputTags').find('input').simulate('keydown', {
          key: ' '
        });
        wrapper.find('InputTags').find('input').simulate('change', {
          target: {
            value: 'hsuting0106@gmail.com '
          }
        });

        expect(
          wrapper.find('InputTags').find('Button').length
        ).toBe(1);
        expect(
          wrapper.find('InputTags').find('Button').first().text()
        ).toBe('hsuting0106@gmail.com');
      });

      describe('#### enter', () => {
        it('##### success', () => {
          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(1);

          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'a'
          });
          wrapper.find('InputTags').find('input').simulate('change', {
            target: {
              value: 'hsuting0106+1@gmail.com'
            }
          });
          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'Enter'
          });

          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(2);
          expect(
            wrapper.find('InputTags').find('Button').last().text()
          ).toBe('hsuting0106+1@gmail.com');
        });

        it('##### fail', () => {
          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(2);

          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'a'
          });
          wrapper.find('InputTags').find('input').simulate('change', {
            target: {
              value: 'hsuting0106'
            }
          });
          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'Enter'
          });

          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(2);
        });
      });
    });

    describe('### remove tag', () => {
      describe('#### backspace', () => {
        it('##### success', () => {
          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(2);

          wrapper.find('InputTags').find('input').simulate('change', {
            target: {
              value: ''
            }
          });
          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'Backspace'
          });

          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(1);
        });

        it('##### fail', () => {
          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(1);

          wrapper.find('InputTags').find('input').simulate('change', {
            target: {
              value: '123'
            }
          });
          wrapper.find('InputTags').find('input').simulate('keydown', {
            key: 'Backspace'
          });

          expect(
            wrapper.find('InputTags').find('Button').length
          ).toBe(1);
        });
      });

      it('#### click button', () => {
        expect(
          wrapper.find('InputTags').find('Button').length
        ).toBe(1);

        wrapper.find('InputTags').find('Button').first().simulate('click');

        expect(
          wrapper.find('InputTags').find('Button').length
        ).toBe(0);
      });
    });
  });
};
