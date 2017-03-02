import React from 'react';
import { render } from 'react-dom';

function reactRender(id, component, props) {
  let reactNode = document.getElementById(id);

  if (reactNode) {
    const componentToRender = require(`./components/${component}.react`);
    render(React.createElement(componentToRender, props), reactNode);
  }
}

window.reactRender = reactRender;
