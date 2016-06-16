export default class Request {

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
    return this.xhr(route, null, 'get');
  }

  static post(route, params) {
    return this.xhr(route, params, 'post');
  }

  static put(route) {
    return this.xhr(route, null, 'put');
  }

  static xhr(route, params = null, verb) {
    return fetch(
      `${route}.json`,
      Object.assign(
        {
          method: verb,
          credentials: 'include',
          headers: this.headers()
        },
        {
          body: JSON.stringify(params)
        })
        .then(resp => resp.json())
    );
  }
}
