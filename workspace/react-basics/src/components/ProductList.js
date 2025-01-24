import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  // create state representing an array of all products
  const [products, setProducts] = useState([]);

  const productsJsx = products.map((p) => (
    <div className='col-3' key={p.id}>
      <ProductCard product={p} />
    </div>
  ));

  // load the products data from fakestoreapi.com when the component mounts
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((resp) => resp.json())
      .then(setProducts);
    // .then((data) => setProducts(data));
  }, []);

  return <div className='row'>{productsJsx}</div>;
};

export default ProductList;
