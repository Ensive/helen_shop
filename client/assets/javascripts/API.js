import ServerActions from './actions/ServerActions';
import Request from './core/request'

export default {
  // getAllComments() {
    // TODO: set id dynamically
    // let productId = 4;
    // Request.get(`/products/${productId}/comments`)
    //   .then(comments => ServerActions.receivedComments(comments));
  // },
  setComments(comments) {
    ServerActions.receivedComments(comments);
  },

  createComment(comment) {
    Request.post(`/products/${comment.productId}/comments`, { comment: comment })
      .then(comment => ServerActions.receivedOneComment(comment))
      .catch(() => console.log('Error...'));
  },

  upvoteComment(comment) {
    // TODO: set id dynamically
    let productId = 4;
    Request.put(`/products/${productId}/comments/${comment.id}/upvote`)
      .then(comment => ServerActions.upvoteComment(comment));
  }
};
