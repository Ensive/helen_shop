import React, {Component, PropTypes} from 'react';

const propTypes = {
  name: PropTypes.string
};

export default class ProductDescription extends Component {

  getOldPrice() {
    return `${Math.floor(this.props.price - this.props.price * 0.1)} ${this.props.currency}.`;
  }

  getNewPrice() {
    return `${Math.floor(this.props.price)} ${this.props.currency}.`;
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
          
          <span className="product__details-price product__details-price--old">
            <span className="text text--18">
              {this.getOldPrice()}
            </span>
          </span>
          
          <span className="product__details-price product__details-price--new">
            <span className="text text--22">
              {this.getNewPrice()}
            </span>
          </span>

          <hr className="u-divider"/>
        </div>
      </div>
    );
  }
}

ProductDescription.propTypes = propTypes;
