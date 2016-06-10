export default {
  addComment(comment) {
    AppDispatcher.dispatch({
      actionType: Constants.ADD_COMMENT,
      comment
    });
  }
}