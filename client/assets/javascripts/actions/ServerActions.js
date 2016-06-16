import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';

export default {
  receivedComments(comments) {
    AppDispatcher.dispatch({
      actionType: AppConstants.RECEIVED_COMMENTS,
      comments
    });
  },
  receivedOneComment(comment) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ADD_COMMENT,
      comment
    });
  },
  upvotedComment(comment) {
    AppDispatcher.dispatch({
      actionType: AppConstants.UPVOTE_COMMENT,
      comment
    });
  }
}