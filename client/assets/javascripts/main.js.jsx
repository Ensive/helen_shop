import React from 'react';
import ReactDOM from 'react-dom';
// import CommentSection from './components/CommentSection.react'

function reactRender(id, component, props) {
  let reactNode = document.getElementById(id);

  if (reactNode) {
    // ReactDOM.render(<CommentSection />, reactNode);
    var componentToRender = require(`./components/${component}.react`);
    ReactDOM.render(React.createElement(componentToRender, props), reactNode);
  }
}

window.reactRender = reactRender;

// function ready(fn) {
//   if (document.readyState != 'loading') {
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }

// ready(reactRender);