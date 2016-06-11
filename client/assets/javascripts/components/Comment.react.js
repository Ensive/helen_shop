import React from 'react';

export default class Comment extends React.Component {
  constructor() {
    super();
  }

  get commentRank() {
    let len = this.props.rank;
    let rank = [];

    for (let i = 0; i < len; i++) {
      rank.push(
        <i key={i} className="comment__rating-icon icon-appicons-15" />
      );
    }

    return rank;
  }

  render() {
    return (
      <div className="comment">
        <header className="comment__header">
          <div className="comment__rating">{this.commentRank}</div>
          <div className="comment__meta">
            <span className="comment__author">{this.props.author}, </span>
            <time datetime="">{this.props.created_at}</time>
          </div>
        </header>
        <div className="comment__body">
          {this.props.body}
        </div>
      </div>
    );
  }
}

Comment.propTypes = {
  author: React.PropTypes.string,
  body: React.PropTypes.string,
  rank: React.PropTypes.number
};

