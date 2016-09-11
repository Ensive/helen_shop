import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';
import moment from 'moment';

class CommentEventEmitter extends EventEmitter {

  constructor() {
    super();
    this._comments = [];
  }

  addComment(comment) {
    this._comments[comment.id] = comment;
  }

  getComments(parentId) {
    let comments = this._comments.filter(c => c && c.parentId === parentId);

    return comments.map(comment => {
      comment.formattedDate = moment(comment.created_at).fromNow();
      return comment;
    });
  }

  setComments(comments) {
    this._comments = comments;
  }

  upvote(comment) {
    this._comments.find(c => c.id === comment.id).rank++;
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
    case AppConstants.RECEIVED_COMMENTS:
      CommentStore.setComments(payload.comments);
      CommentStore.emitChange();
      break;
    case AppConstants.UPVOTE_COMMENT:
      CommentStore.upvote(payload.comment);
      CommentStore.emitChange();
      break;
    default:
    // NO-OP
  }
});

export default CommentStore;
