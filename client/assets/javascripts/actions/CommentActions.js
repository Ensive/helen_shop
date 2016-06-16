import API from '../API';


export default {
  addComment(comment) {
    API.createComment(comment);
  },
  setComments() {
    API.getAllComments();
  },
  upvoteComment(comment) {
    API.upvoteComment(comment);
  }
}