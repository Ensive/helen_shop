import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm.react';
import CommentList from './CommentList.react';
import CommentStore from '../stores/CommentStore';
// import Actions from '../actions/CommentActions';

export default class CommentSection extends Component {
  constructor() {
    super();
    this.store = CommentStore;
  }

  static get childContextTypes() {
    return {
      store: PropTypes.object.isRequired
    }
  }

  getChildContext() {
    return {
      store: this.store
    }
  }

  render() {
    return (
      <div>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
}

// window.Actions = Actions;