import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm.react';
import CommentList from './CommentList.react';
import CommentStore from '../stores/CommentStore';
import Actions from '../actions/CommentActions';

export default class CommentSection extends Component {
  constructor() {
    super();
    this.store = CommentStore;
    this.actions = Actions;
    this.actions.setComments();
  }

  static get childContextTypes() {
    return {
      store: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    }
  }

  getChildContext() {
    return {
      store: this.store,
      actions: this.actions
    }
  }

  render() {
    return (
      <div>
        <CommentList parent_id={null} />
        <a href="#" className="hs_link -animate">View More</a>
        <CommentForm />
      </div>
    );
  }
}
