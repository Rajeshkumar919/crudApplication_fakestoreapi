import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../const/Apis';

const UpdateProduct = () => {
  const [productIdToUpdate, setProductIdToUpdate] = useState('');
  const [productDetails, setProductDetails] = useState({
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
    backgroundColor: '#2ecc71', // Button color
    color: '#ffffff', // Text color
    borderRadius: '8px', // Rounded corners
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleInputChange = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.patch(`API.Ecomerce.products.getAllProducts/${productIdToUpdate}`, productDetails);
      console.log(response.data);
      // Show success message
      alert(`Product with ID ${productIdToUpdate} updated successfully!`);
      // Clear input fields after update
      setProductDetails({
        title: '',
        price: 0,
        description: '',
        image: '',
        category: '',
      });
    } catch (error) {
      console.error('Error updating product:', error);
      // Show error message
      alert('Error updating product. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2 className="text-center">Update Product</h2>
      <div>
        <label>Enter Product ID to Update:</label>
        <input
          type="number"
          value={productIdToUpdate}
          onChange={(e) => setProductIdToUpdate(e.target.value)}
          style={inputStyle}
        />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={productDetails.title} onChange={handleInputChange} style={inputStyle} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={productDetails.price} onChange={handleInputChange} style={inputStyle} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={productDetails.description} onChange={handleInputChange} style={inputStyle} />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" name="image" value={productDetails.image} onChange={handleInputChange} style={inputStyle} />
      </div>
      <div>
        <label>Category:</label>
        <input type="text" name="category" value={productDetails.category} onChange={handleInputChange} style={inputStyle} />
      </div>
      <button style={buttonStyle} onClick={handleUpdateProduct}>
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
