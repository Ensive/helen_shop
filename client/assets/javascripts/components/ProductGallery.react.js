import React, { Component, PropTypes } from 'react';

const propTypes = {
  image: PropTypes.string
};

export default class ProductGallery extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let image = this.props.image;
    let imageUrl = `/assets/${image}`;
    let imgEl = '';

    if (image && image.match(/jpg|png|jpeg/gi)) {
      imgEl = <img src={imageUrl} />;
    }

    return (
      <div className="product__preview">
        {imgEl}
      </div>
    );
  }
}

ProductGallery.propTypes = propTypes;
