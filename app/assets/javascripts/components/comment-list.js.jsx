var CommentList = React.createClass({

  _onChange: function () {
    this.forceUpdate();
  },

  componentDidMount: function () {
    Store.addChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    Store.removeChangeListener(this._onChange);
  },

  render: function () {
    return (
      <div>
        {Store.comments().map(function (comment) {
          // return <Comment key={comment.id} author={comment.author} body={comment.body} rank={comment.rank} />;
          return <Comment key={comment.id} {... comment} />
        })}
      </div>
    );
  }
});

CommentList.propTypes = {};