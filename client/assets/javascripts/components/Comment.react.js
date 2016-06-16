import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm.react';
import CommentList from './CommentList.react';

const propTypes = {
  id: PropTypes.number,
  product_id: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string,
  stars: PropTypes.number
  // rank: PropTypes.number
};

export default class Comment extends Component {
  constructor() {
    super();
    this.state = { isReplying: false };

    this.onReplyClick = this.onReplyClick.bind(this);
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
  }

  onReplyClick() {
    this.setState({ isReplying: !this.state.isReplying });
  }

  onCommentSubmit() {
    this.setState({ isReplying: false });
  }

  get commentRank() {
    let len = this.props.stars;
    // todo: i18n
    if (!len) return 'Rating was not given';
    let stars = [];

    for (let i = 0; i < len; i++) {
      stars.push(
        <i key={i} className="comment__rating-icon icon-appicons-15" />
      );
    }

    return stars;
  }

  render() {
    // todo: i18n
    const replyText = this.state.isReplying ? 'Hide' : 'Reply';
    return (
      <li className="comment">
        <header className="comment__header">
          <div className="comment__rating">{this.commentRank}</div>
          <div className="comment__meta">
            <span className="comment__author">
              <cite>{this.props.author}, </cite>
            </span>
            <time datetime="">{this.props.formattedDate}</time>
          </div>
        </header>
        <div className="comment__body">
          <blockquote>
            {this.props.body}
          </blockquote>
        </div>

        <button className="comment__button hs_button -animated -white -small" onClick={this.onReplyClick}>
          {replyText}
        </button>
        <CommentForm
          parentId={this.props.id}
          isReplying={this.state.isReplying}
          handleCommentSubmit={this.onCommentSubmit} />
        <CommentList parentId={this.props.id} />
      </li>
    );
  }
}

Comment.propTypes = propTypes;
