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
        <div className="comment__rating">{this.commentRank}</div>
        <div>Author: {this.props.author}</div>
        <div>Body: {this.props.body}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  author: React.PropTypes.string,
  body: React.PropTypes.string,
  rank: React.PropTypes.number
};

