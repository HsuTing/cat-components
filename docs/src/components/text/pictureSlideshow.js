'use strict';

export default `
  # [PictureSlideshow](./#PictureSlideshow)
  Use to make a picture slideshow.

  #### Other packages
  - [uuid](https://www.npmjs.com/package/uuid)
  - [cat-utils](https://github.com/HsuTing/cat-utils)

  #### Props
  - \`index(required)\`: This is the index of slideshow. Use this to control which \`image\` should be shown.
  - \`imgs(required)\`: This is an array of \`image\`. It should have \`src\` to give a link of the \`image\` and other attributes will be given to \`image\` as \`props\`.
  - \`type(default: 'div')\`: Choose the type of \`image\`. If \`type\` is \`img\`, this component will use \`img\` tag as \`image\`. If it is not, this component will use \`div\` tag as \`image\`.
  - \`showStyle\`: This is the animation of showing \`image\`.
  - \`hideStyle\`: This is the animation of hiding \`image\`.

  \`hideStyle\` and \`showStyle\` are needed to have \`left\` and \`right\` to make an animation.

  #### Example
  \`\`\`js
  'use strict';

  import React from 'react';
  import PictureSlideshow from 'cat-components/lib/PictureSlideshow';

  const imgs = [{
    src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/17493450_397169997321386_4423519579884486656_n.jpg'
  }, {
    src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/16465237_160262967811059_8777509647905980416_n.jpg'
  }, {
    src: 'https://scontent-tpe1-1.cdninstagram.com/t51.2885-15/e35/16906239_1371447262875968_9128363095364730880_n.jpg'
  }];

  export default class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: 0
      };

      this.onClick = this.onClick.bind(this);
    }

    render() {
      const {index} = this.state;

      return (
        <div>
          <PictureSlideshow index={index}
            imgs={imgs}
          />

          {imgs.map((img, imgIndex) => {
            return (
              <button key={imgIndex}
                onClick={this.onClick(imgIndex)}
              >{imgIndex}</button>
            );
          })}
        </div>
      );
    }

    onClick(index) {
      return e => {
        this.setState({index});
      };
    }
  }
  \`\`\`
`;