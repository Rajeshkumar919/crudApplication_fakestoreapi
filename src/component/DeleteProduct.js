import React, { useState } from 'react';
import axios from 'axios';

const DeleteProduct = () => {
  const [productIdToDelete, setProductIdToDelete] = useState('');

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
    display: 'block',
    width: '100%',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    backgroundColor: '#e74c3c', // Button color
    color: '#ffffff', // Text color
    borderRadius: '8px', // Rounded corners
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleDeleteProduct = async () => {
    try {
      const response = await axios.delete(`API.Ecomerce.products.getAllProducts/${productIdToDelete}`);
      console.log(response.data);
      // Show success message
      alert('Product deleted successfully!');
    } catch (error) {
      console.error('Error deleting product:', error);
      // Show error message
      alert('Error deleting product. Please try again.');
    }
  };

  return (
    <div style={containerStyle}>
      <h2>Delete Product</h2>
      <div>
        <label>Enter Product ID to Delete:</label>
        <input type="number" value={productIdToDelete} onChange={(e) => setProductIdToDelete(e.target.value)} style={inputStyle} />
        <button style={buttonStyle} onClick={handleDeleteProduct}>
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default DeleteProduct;
