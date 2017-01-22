import React, { Component, PropTypes } from 'react';
import Button from './Button.react';

const propTypes = {
  onCommentSubmit: PropTypes.func,
  parentId: PropTypes.number,
  isReplying: PropTypes.bool
};

const contextTypes = {
  actions: PropTypes.object.isRequired
};

export default class CommentForm extends Component {
  constructor(props) {
    super();
    this.defaultState = {
      productId: props.productId,
      author: '',
      body: '',
      stars: '',
      rank: ''
      // ancestry: ''
    };
    this.state = this.defaultState;

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
  }

  onFieldChange(event) {
    let prop = {};
    prop[event.target.name] = event.target.value;
    this.setState(prop);
  }

  onClickSubmit(event) {
    event.preventDefault();
    this.context.actions
      .addComment(Object.assign({}, this.state, { parent_id: this.props.parentId }));
    this.setState(this.defaultState);
    if (this.props.onCommentSubmit) {
      this.props.onCommentSubmit();
    }
  }

  render() {
    let classForm = `form comment-form${this.props.isReplying ? '' : ' u-hidden'}`;
    return (
      <div>
        <form className={classForm}>
          <p className="hs_field">
            <label className="hs_label">
              Author
              <input className="hs_input"
                     type="text"
                     name="author"
                     onChange={this.onFieldChange}
                     value={this.state.author} />
            </label>
          </p>
          <p className="hs_field">
            <label className="hs_label">
              Comment
              <textarea className="hs_input -text"
                        name="body"
                        value={this.state.body}
                        onChange={this.onFieldChange} />
            </label>
          </p>
          <p className="hs_field">
            <label className="hs_label">
              Rate the product
              <select className="hs_input"
                      name="stars"
                      value={this.state.stars}
                      onChange={this.onFieldChange}>
                <option value="1">1 star</option>
                <option value="2">2 stars</option>
                <option value="3">3 stars</option>
                <option value="4">4 stars</option>
                <option value="5">5 stars</option>
              </select>
            </label>
          </p>
          <Button type='submit' onClick={this.onClickSubmit}>Submit</Button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = propTypes;
CommentForm.contextTypes = contextTypes;
