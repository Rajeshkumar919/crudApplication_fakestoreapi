// AddProduct.js
import React, { useState } from 'react';
import { useProductContext } from './ProductContext';
import axios from 'axios';

const AddProduct = () => {
  const { dispatch } = useProductContext();
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
  });

  const containerStyle = {
    width: '80%',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#3498db', // Button color
    color: '#ffffff', // Text color
    borderRadius: '8px', // Rounded corners
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  // Media query for mobile devices
  const mediaQuery = '@media (max-width: 600px)';

  const mobileContainerStyle = {
    ...containerStyle,
    width: '100%',
    padding: '10px',
  };

  const mobileInputStyle = {
    ...inputStyle,
    marginBottom: '8px',
  };

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/products', product);
      dispatch({ type: 'ADD_PRODUCT', payload: response.data });
      setProduct({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
      });

      // Show success message
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      // Show error message
      alert('Error adding product. Please try again.');
    }
  };

  return (
    <div style={{ ...containerStyle, [mediaQuery]: mobileContainerStyle }}>
      <h2>Add Product</h2>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={product.title} onChange={handleInputChange} style={{ ...inputStyle, [mediaQuery]: mobileInputStyle }} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleInputChange} style={{ ...inputStyle, [mediaQuery]: mobileInputStyle }} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleInputChange} style={{ ...inputStyle, [mediaQuery]: mobileInputStyle }} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" name="image" value={product.image} onChange={handleInputChange} style={{ ...inputStyle, [mediaQuery]: mobileInputStyle }} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleInputChange} style={{ ...inputStyle, [mediaQuery]: mobileInputStyle }} />
      </div>
      <button style={{ ...buttonStyle, [mediaQuery]: { display: 'block', width: '100%' } }} onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
