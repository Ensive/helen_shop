export default {
  getAllComments(productId) {
    // ...
  },
  createComment(comment) {
    let productId = comment.product_id;
    delete comment.product_id;
    Request.post(`/products/${productId}/comments`, {
      comment: comment
    });
  }
}

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
