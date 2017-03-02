import React, { Component, PropTypes } from 'react';
import ItemsIndicator from './ItemsIndicator.react'
import Cart from './Cart.react'

const { number, any, objectOf, string } = PropTypes;
const propTypes = {
  initialCount: number,
  t: objectOf(string),
  products: any
};

class CartContainer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      itemsCount: this.props.initialCount,
      isVisible: false
    };

    this.onCartToggle = this.onCartToggle.bind(this);
  }

  onCartToggle () {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render () {
    const {
      t,
      products,
      totalPrice
    } = this.props;

    return (
      <div style={{ display: 'inline', position: 'relative' }}>
        <ItemsIndicator t={t} count={this.state.itemsCount} onCartToggle={this.onCartToggle} />
        <Cart products={products} total={totalPrice} isVisible={this.state.isVisible} />
      </div>
    );
  }
}

CartContainer.propTypes = propTypes;

export default CartContainer;
