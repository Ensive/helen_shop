import React, { Component, PropTypes } from 'react';
import CommentForm from './CommentForm.react';
import CommentList from './CommentList.react';

const propTypes = {
  id: PropTypes.number,
  product_id: PropTypes.number,
  author: PropTypes.string,
  body: PropTypes.string,
  stars: PropTypes.number,
  rank: PropTypes.number
};

const contextTypes = {
  actions: PropTypes.object.isRequired
};

export default class Comment extends Component {
  constructor() {
    super();
    this.state = { isReplying: false };

    this.onReplyClick = this.onReplyClick.bind(this);
    this.onCommentSubmit = this.onCommentSubmit.bind(this);
    this.onUpvote = this.onUpvote.bind(this);
  }

  onReplyClick() {
    this.setState({ isReplying: !this.state.isReplying });
  }

  onCommentSubmit() {
    this.setState({ isReplying: false });
  }

  onUpvote(event) {
    event.preventDefault();
    this.context.actions.upvoteComment(this.props);
  }

  get commentRank() {
    let len = this.props.stars;
    // todo: i18n
    if (!len) return 'No rating';
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
    let rankClass = `comment__rank${this.props.rank > 0 ? ' comment__rank--green' : (this.props.rank === 0 ? '' : ' comment__rank--red')}`;
    return (
      <li className="comment">
        <header className="comment__header">
          <div className="comment__rating">{this.commentRank}</div>
          <div className="comment__meta">
            <span className="comment__author">
              <cite>{this.props.author}, </cite>
            </span>
            <time dateTime="">{this.props.formattedDate}</time>
          </div>
        </header>
        <div className="comment__body">
          <blockquote>
            {this.props.body}
          </blockquote>
        </div>

        <button onClick={this.onReplyClick} className="comment__button hs_button -gray -small">
          {replyText}
        </button>
        <button onClick={this.onUpvote} className="comment__button comment__button--upvote hs_button -gray -tiny">+1</button>
        <span className={rankClass}>{this.props.rank} {this.props.rank === 1 ? 'vote' : 'votes'}</span>
        <CommentForm
          parentId={this.props.id}
          isReplying={this.state.isReplying}
          onCommentSubmit={this.onCommentSubmit} />
        <CommentList parentId={this.props.id} />
      </li>
    );
  }
}

Comment.propTypes = propTypes;
Comment.contextTypes = contextTypes;
