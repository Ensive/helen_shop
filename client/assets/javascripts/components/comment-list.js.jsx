import React from 'react';
import CommentStore from '../stores/CommentStore';
import Comment from './comment.js'

export default class CommentList extends React.Component{

  _onChange() {
    this.forceUpdate();
  }

  componentDidMount() {
    CommentStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    CommentStore.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        {CommentStore.comments().map(function (comment) {
          // return <Comment key={comment.id} author={comment.author} body={comment.body} rank={comment.rank} />;
          return <Comment key={comment.id} {... comment} />
        })}
      </div>
    );
  }
}

CommentList.propTypes = {};