import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/CardStyle.css';

export default class ProductCard extends Component {
  render() {
    const { title, picture, price } = this.props;

    return (

      <div className="card1">
        <h1>{ title }</h1>
        <img className="image-product" src={ picture } alt="Product" />
        <h2>{ price }</h2>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
