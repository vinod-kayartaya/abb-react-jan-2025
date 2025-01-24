import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className='card p-3'>
      <img src={product.image} style={{maxHeight: '300px'}} className='card-img-top' alt={product.title} />
      <div className='card-body'>
        <h5 className='card-title'>{product.title}</h5>
        <p className='card-text'>
          <strong>
            {new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
            }).format(product.price)}
          </strong>
        </p>
        <a href='#' className='btn btn-primary'>
          Add to cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
