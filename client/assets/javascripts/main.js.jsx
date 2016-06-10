import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './components/CommentSection.react'

function reactRender() {
  let reactNode = document.getElementById('comment-list');
  
  if (reactNode) {
    ReactDOM.render(<CommentSection />, reactNode);
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(reactRender);