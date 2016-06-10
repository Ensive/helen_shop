import React from 'react';
import ReactDOM from 'react-dom';
import CommentList from './components/comment-list.js'

function reactRender() {
  let reactNode = document.getElementById('comment-list');
  
  if (reactNode) {
    ReactDOM.render(<CommentList />, reactNode);
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