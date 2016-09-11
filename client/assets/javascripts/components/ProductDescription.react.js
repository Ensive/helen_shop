import React, { Component, PropTypes } from 'react';
import ProductPrice from './ProductPrice.react';

const propTypes = {
  name: PropTypes.string
};

export default class ProductDescription extends Component {

  getOldPrice() {
    return `${Math.floor(this.props.price)} ${this.props.currency}.`;
  }

  getNewPrice() {
    return `${Math.floor(this.props.price - this.props.price * 0.1)} ${this.props.currency}.`;
  }

  render() {
    return (
      <div className="product__details-wrapper">
        <div className="product__details">

          <h1 className="product__details-name">
            <span className="text text--medium text--uppercase text--22">
              {this.props.name}
            </span>
          </h1>

          <ProductPrice oldPrice={this.getOldPrice()} newPrice={this.getNewPrice()} />

          <hr className="u-divider"/>
        </div>
      </div>
    );
  }
}

ProductDescription.propTypes = propTypes;
