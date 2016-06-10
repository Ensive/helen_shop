import AppDispatcher from '../AppDispatcher';
import AppConstants from '../AppConstants';

export default {
  addComment(comment) {
    AppDispatcher.dispatch({
      actionType: AppConstants.ADD_COMMENT,
      comment
    });
  }
}