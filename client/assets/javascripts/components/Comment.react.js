import React, { Component, PropTypes} from 'react';
import CommentForm from './CommentForm.react';
import CommentList from './CommentList.react';

export default class Comment extends Component {
  constructor() {
    super();
  }

  get commentRank() {
    let len = this.props.stars;
    let stars = [];

    for (let i = 0; i < len; i++) {
      stars.push(
        <i key={i} className="comment__rating-icon icon-appicons-15" />
      );
    }

    return stars;
  }

  render() {
    return (
      <li className="comment">
        <header className="comment__header">
          <div className="comment__rating">{this.commentRank}</div>
          <div className="comment__meta">
            <span className="comment__author">{this.props.author}, </span>
            <time datetime="">{this.props.formattedDate}</time>
          </div>
        </header>
        <div className="comment__body">
          {this.props.body}
        </div>
        <CommentForm parent_id={this.props.id} />
        <CommentList parent_id={this.props.id} />
      </li>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string,
  rank: PropTypes.number
};

