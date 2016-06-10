import { EventEmitter } from 'events';
import Flux from 'flux';

class Store extends EventEmitter {

  constructor() {
    super();
    this._comments = [];
  }

  addComment(comment) {
    this._comments[comment.id] = comment;
  }

  comments() {
    return this._comments;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
}

let commentStore = new Store();

var AppDispatcher = new Flux.Dispatcher();

AppDispatcher.register((payload) => {
  // var action = payload.actionType;
  // console.log(payload.actionType);
  switch (payload.actionType) {
    case Constants.ADD_COMMENT:
      commentStore.addComment(payload.comment);
      commentStore.emitChange();
      break;
    default:
      // NO-OP
  }
});

let Actions = {
  addComment(comment) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment
    });
  }
};

function reactRender() {
  let reactNode = document.getElementById('comment-list');
  
  if (reactNode) {
    ReactDOM.render(<CommentList />, reactNode);
  }
}

function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// ready(reactRender);