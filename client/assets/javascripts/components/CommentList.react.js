import React, { Component, PropTypes } from 'react';
import Comment from './Comment.react';

export default class CommentList extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.context.store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    this.context.store.removeChangeListener(this._onChange);
  }

  static get contextTypes() {
    return {
      store: PropTypes.object.isRequired
    };
  }

  render() {
    return (
      <ul className="comment-list u-clear">
        {this.context.store
          .getComments(this.props.parentId)
          .map(comment => <Comment key={comment.id} {... comment} />)}
      </ul>
    );
  }
}

CommentList.propTypes = {};
