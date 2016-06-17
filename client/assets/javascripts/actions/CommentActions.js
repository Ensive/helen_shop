import API from '../API';

export default {
  addComment(comment) {
    API.createComment(comment);
  },
  setComments(comments) {
    // API.getAllComments();
    API.setComments(comments);
  },
  upvoteComment(comment) {
    API.upvoteComment(comment);
  }
}