var CommentList = React.createClass({
  propTypes: {

  },
  render: function () {
    return (
      <div>
        {JSON.parse(this.props.comments).map(function (comment) {
          // return <Comment key={comment.id} author={comment.author} body={comment.body} rank={comment.rank} />;
          return <Comment key={comment.id} {... comment} />
        })}
      </div>
    );
  }
});