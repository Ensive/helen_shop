import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var btnCss = this.props.mod ? 'hs_button -' + this.props.mod : 'hs_button';

    return (
      <button className={btnCss} type={this.props.type} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    )
  }
}
