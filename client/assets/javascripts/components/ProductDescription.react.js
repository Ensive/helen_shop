import React, { Component, PropTypes } from 'react';
import ProductPrice from './ProductPrice.react';
import Button from './Button.react';

const { string } = PropTypes;
const propTypes = {
  name: string,
  desc: string
};

function ProductDescription ({ name, desc, price, currency, addProduct }) {
  function getOldPrice (price, currency) {
    return `${Math.floor(price)} ${currency}.`;
  }

  function getNewPrice (price, currency) {
    return `${Math.floor(price - price * 0.1)} ${currency}.`;
  }

  return (
    <div className='product__details-wrapper'>
      <div className='product__details'>

        <h1 className='product__details-name'>
          <span className='text text--medium text--uppercase text--22'>
            {name}
          </span>
        </h1>

        <ProductPrice oldPrice={getOldPrice(price, currency)} newPrice={getNewPrice(price, currency)} />

        <hr className='u-divider' />

        <p className='text text--margin-top-10'>
          {desc}
        </p>

        <Button mod='buy' onClick={addProduct}>
          <span className='text text--18'>Add to Cart</span>
        </Button>
      </div>
    </div>
  );
}

ProductDescription.propTypes = propTypes;

export default ProductDescription
