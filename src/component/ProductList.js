import React, { useEffect, useState } from 'react';
import { API } from '../const/Apis';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(API.Ecomerce.products.getAllProducts)
      .then(res => res.json())
      .then(json => setProducts(json));
  }, []);

  return (
    <div>
      <h2 className="text-center">Product List</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {products.map((product, index) => (
          <div key={index} className="col mb-4">
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">
                  <strong>Price:</strong> ${product.price}
                </p>
                <p className="card-text">
                  <strong>Category:</strong> {product.category}
                </p>
                <p className="card-text">
                  <strong>Description:</strong> {product.description}
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">ID: {index + 1}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
