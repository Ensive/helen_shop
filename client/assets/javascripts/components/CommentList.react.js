import React, { Component, PropTypes } from 'react';
import Comment from './Comment.react'

export default class CommentList extends Component {

  _onChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    this.context.store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    this.context.store.removeChangeListener(this._onChange.bind(this));
  }

  static get contextTypes() {
    return {
      store: PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <ul className="u-clear">
        {this.context.store.getComments(this.props.parent_id).map(comment => <Comment key={comment.id} {... comment} />)}
      </ul>
    );
  }
}

CommentList.propTypes = {};