import React, { Component, PropTypes } from 'react';

const propTypes = {
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string,
};

export default class ProductPrice extends Component {
  render() {
    return (
      <div>
        <span className="product__details-price product__details-price--old">
          <span className="text text--18">
            {this.props.oldPrice}
          </span>
        </span>

        <span className="product__details-price product__details-price--new">
          <span className="text text--22">
            {this.props.newPrice}
          </span>
        </span>
      </div>
    );
  }
}

ProductPrice.propTypes = propTypes;
