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
      <div className="u-clear">
        {this.context.store.comments().map(function (comment, index) {
          // return <Comment key={comment.id} author={comment.author} body={comment.body} rank={comment.rank} />;
          return <Comment key={index} {... comment} />
        })}
        <a href="#" className="hs_link -animate">View More</a>
      </div>
    );
  }
}

CommentList.propTypes = {};