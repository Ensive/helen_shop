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

  static put(route) {
    return fetch(
      `${route}.json`,
      {
        method: 'put',
        credentials: 'include',
        headers: this.headers()
      }
    )
  }
}
