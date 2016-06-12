import React, {Component, PropTypes} from 'react';

export default class CommentForm extends Component {
  constructor() {
    super();
    this.defaultState = {
      // TODO: product id
      product_id: '',
      author: '',
      body: '',
      stars: ''
      // ancestry: ''
    };
    this.state = this.defaultState;

    this.handleFieldChange = (event) => {
      let prop = {};
      prop[event.target.name] = event.target.value;
      this.setState(prop);
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      this.context.actions.addComment(Object.assign({}, this.state, { parent_id: this.props.parent_id }));
      this.setState(this.defaultState);
    };
  }

  static get contextTypes() {
    return {
      actions: PropTypes.object.isRequired
    }
  }

  render() {
    return (
      <form className="form comment-form">
        <p className="hs_field">
          <label className="hs_label">
            Author
            <input className="hs_input" type="text" name="author" onChange={this.handleFieldChange.bind(this)} value={this.state.author} />
          </label>
        </p>
        <p className="hs_field">
          <label className="hs_label">
            Comment
            <textarea className="hs_input -text" name="body" value={this.state.body} onChange={this.handleFieldChange.bind(this)} />
          </label>
        </p>
        <p className="hs_field">
          <label className="hs_label">
            Rate the product
            <select className="hs_input" name="stars" value={this.state.stars} onChange={this.handleFieldChange.bind(this)}>
              <option value="1">1 star</option>
              <option value="2">2 stars</option>
              <option value="3">3 stars</option>
              <option value="4">4 stars</option>
              <option value="5">5 stars</option>
            </select>
          </label>
        </p>
        <button className="hs_button" type="submit" onClick={this.handleSubmit.bind(this)}>Submit</button>
      </form>
    );
  }
}