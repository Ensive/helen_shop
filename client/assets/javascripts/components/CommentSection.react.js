import React, { Component, PropTypes } from 'react';
import CommentList from './CommentList.react';
import CommentStore from '../stores/CommentStore';

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
      <CommentList />
    );
  }
}
