import ServerActions from './actions/ServerActions';
import Request from './core/request'

export default {
  getAllComments() {
    // TODO: set id dynamically
    let productId = 4;
    Request.get(`/products/${productId}/comments`)
      .then(comments => ServerActions.receivedComments(comments));
  },
  createComment(comment) {
    // TODO: set id dynamically
    let productId = 4;
    delete comment.product_id;
    Request.post(`/products/${productId}/comments`, { comment: comment })
      .then(comment => ServerActions.receivedOneComment(comment));
  },
  upvoteComment(comment) {
    // TODO: set id dynamically
    let productId = 4;
    Request.put(`/products/${productId}/comments/${comment.id}/upvote`)
      .then(comment => ServerActions.upvoteComment(comment));
  }
}
