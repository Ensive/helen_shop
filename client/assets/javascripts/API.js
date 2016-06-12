import ServerActions from './actions/ServerActions';

export default {
  getAllComments() {
    // TODO: set id dynamically
    let productId = 4;
    Request.get(`/products/${productId}/comments`)
      .then(response => response.json())
      .then(comments => ServerActions.receivedComments(comments));
  },
  createComment(comment) {
    // TODO: set id dynamically
    // let productId = comment.product_id;
    let productId = 4;
    delete comment.product_id;
    Request.post(`/products/${productId}/comments`, { comment: comment })
      .then(response => response.json())
      .then(comment => ServerActions.receivedOneComment(comment));
  }
}

// TODO: move to the core folder as a util/helper
class Request {

  static token() {
    let el = document.querySelector('meta[name="csrf-token"]');
    return el ? el.getAttribute('content') : '';
  }

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.token(),
      'X-Requested-With': 'XMLHttpRequest'
    };
  }

  static get(route) {
    return fetch(
      `${route}.json`,
      {
        method: 'get',
        credentials: 'include',
        headers: this.headers()
      }
    );
  }

  static post(route, params) {
    // TODO: Shall we explicitly add .json ?
    return fetch(
      `${route}.json`,
      {
        method: 'post',
        credentials: 'include',
        headers: this.headers(),
        body: JSON.stringify(params)
      }
    );
  }
}
