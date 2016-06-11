import React, {Component, PropTypes} from 'react';

export default class CommentForm extends Component {
  constructor() {
    super();
    this.defaultState = { id: 3, author: '', body: '' };
    this.state = this.defaultState;

    this.handleFieldChange = (event) => {
      let prop = {};
      prop[event.target.name] = event.target.value;
      this.setState(prop);
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      Actions.addComment(this.state);
    };
  }

  render() {
    return (
      <form>
        <label className="hs_label">Author</label>
        <input className="hs_input" type="text" name="author" onChange={this.handleFieldChange.bind(this)} value={this.state.author} />
        <label>Comment</label>
        <textarea name="body" value={this.state.body} onChange={this.handleFieldChange.bind(this)} />
        <button type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}