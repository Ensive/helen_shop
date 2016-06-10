import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher'
import AppConstants from '../AppConstants'

class CommentEventEmitter extends EventEmitter {

  constructor() {
    super();
    this._comments = [
      { id: 1, author: 'Anton', body: 'Hello there!', rank: 5 },
      { id: 2, author: 'Daniel', body: 'Hello my dear friend!', rank: 3 }
    ];
  }

  addComment(comment) {
    this._comments[comment.id] = comment;
  }

  comments() {
    return this._comments;
  }

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(AppConstants.CHANGE_EVENT);
  }
}

let CommentStore = new CommentEventEmitter();

AppDispatcher.register((payload) => {
  // var action = payload.actionType;
  // console.log(payload.actionType);
  switch (payload.actionType) {
    case AppConstants.ADD_COMMENT:
      CommentStore.addComment(payload.comment);
      CommentStore.emitChange();
      break;
    default:
    // NO-OP
  }
});

export default CommentStore;