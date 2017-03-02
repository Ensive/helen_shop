import React, { Component, PropTypes } from 'react';
import ProductGallery from './ProductGallery.react';
import ProductDescription from './ProductDescription.react';
import ProductRelated from './ProductRelated.react';
// TODO: rework
import ProductStore from '../stores/ProductStore'
import Actions from '../actions/CartActions'

const { number, string } = PropTypes;
const propTypes = {
  id: number.isRequired,
  imageUrl: string.isRequired,
  name: string.isRequired,
  description: string
};

export default class Product extends Component {
  constructor() {
    super();
    // this.actions = Actions;
    this.addProduct = this.addProduct.bind(this);
    // TODO: implement
    this.state = {
      inCart: false
    }
  }

  // TODO: refactor
  _onChange() {
    // console.log('Something in product has changed!');
  }

  componentDidMount() {
    ProductStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ProductStore.removeChangeListener(this._onChange);
  }

  addProduct(e) {
    e.preventDefault();
    Actions.addProduct({ product_id: this.props.id, quantity: 1 })
  }

  render() {
    return (
      <div className="product u-clear">
        <div>
          <ProductGallery image={this.props.imageUrl}/>
          <ProductDescription
            addProduct={this.addProduct}
            name={this.props.name}
            price={this.props.price}
            desc={this.props.description}
            currency='грн' />
        </div>
        <ProductRelated />
      </div>

      // About Shop Component
    );
  }
}

Product.propTypes = propTypes;
