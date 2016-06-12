import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';
import moment from 'moment';

class CommentEventEmitter extends EventEmitter {

  constructor() {
    super();
    this._comments = [
      // {
      //   id: 1,
      //   author: 'Kathryn',
      //   body: `Dress is perfect to a birthday girl. It's beautiful with brilliant colours. I just see the pictures from my baby party and she looks adorable on that.`,
      //   rank: 5,
      //   created_at: '2 hours'
      // },
      // {
      //   id: 2,
      //   author: 'Daniel',
      //   body: `Very friendly customer service and really affordable price. Good choice to choose custom size! Just received my beautiful dress. Wow, really a surprise. Fit my body shape so well! I will be back for sure! Thank you!`,
      //   rank: 3,
      //   created_at: 'Yesterday'
      // },
      // {
      //   id: 3,
      //   author: 'Samantha',
      //   body: `I bought a dress here for my sister. She loves it very much. She told me it arrived so fast and the quality is good. She asked for your website and want to buy another dress. Thanks!`,
      //   rank: 4,
      //   created_at: 'Yesterday'
      // }
    ];
  }

  addComment(comment) {
    this._comments[comment.id] = comment;
  }

  getComments() {
    return this._comments.map(comment => {
      comment.formattedDate = moment(comment.created_at).fromNow();
      return comment;
    });
  }

  setComments(comments) {
    this._comments = comments;
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
    default:
    // NO-OP
  }
});

export default CommentStore;