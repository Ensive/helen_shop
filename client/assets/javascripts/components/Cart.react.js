import React, { Component, PropTypes } from 'react'

const { any, string, bool } = PropTypes;
const propTypes = {
  products: any,
  total: string,
  isVisible: bool
};

function Cart ({ products, total, isVisible }) {
  return (
    <div className={`cart ${isVisible ? '' : 'is-hidden'}`}>
      <header className='cart__header'>
        <h2 className='text text--medium text--18'>You cart</h2>
        <span className='cart__product-remove icon-appicons-20 u-right' />
      </header>
      <hr className='u-divider' />
      <ul>
        {products.map((product, index) => {
          return (
            <li className='cart__product' key={index}>
              <img className='cart__product-img' src={`/assets/${product.image_url}`} alt={product.name} />
              <span className='cart__product-name text text--medium'>{product.name}</span>
              <span className='cart__product-price text text--red text--medium'>{product.price}</span>
              <span className='cart__product-remove icon-appicons-20' />
            </li>
          )
        })}
      </ul>
      <hr className='u-divider' />
      <p className='cart__total text text--medium text--18'>Total: <span className='text text--red'>{total}</span></p>
    </div>
  )
}

Cart.propTypes = propTypes;

export default Cart
