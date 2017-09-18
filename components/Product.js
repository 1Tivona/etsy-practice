import React from 'react';

const Product = ({ results }) => (
  <div className = "results">
    <p>Product Name: {results.title}</p>
  </div>
);

export default Product;
