'use strict';

const resize = DOM => {
  const check = (
    (DOM.offsetWidth / DOM.offsetHeight) >=
    (DOM.parentNode.offsetWidth / DOM.parentNode.offsetHeight)
  );
  const width = check ? '100%' : 'initial';
  const height = check ? 'initial' : '100%';

  DOM.style.width = width;
  DOM.style.height = height;

  return {
    width,
    height
  };
};

export default DOMs => {
  if(DOMs instanceof Array)
    return DOMs.forEach(resize);
  else
    return resize(DOMs);
};
