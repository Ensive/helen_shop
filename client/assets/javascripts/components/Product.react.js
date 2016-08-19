import React, { Component, PropTypes } from 'react';
import ProductGallery from './ProductGallery.react';
import ProductDescription from './ProductDescription.react';
import ProductRelated from './ProductRelated.react';

const propTypes = {
  image_url: PropTypes.string,
  name: PropTypes.string
};

const contextTypes = {
  actions: PropTypes.object.isRequired
};

export default class Product extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="product u-clear">
        <div>
          <ProductGallery image={this.props.image_url}/>
          <ProductDescription name={this.props.name} price={this.props.price} currency="грн" />
        </div>
        <ProductRelated />
      </div>
      // About Shop Component
    );
  }
}

Product.propTypes = propTypes;
