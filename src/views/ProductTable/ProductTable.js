// ProductTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  // Fetch the product data from the backend API
  useEffect(() => {
    axios.get('http://localhost:3001/getproducts') // Replace the URL with your backend API endpoint to fetch products
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Product Table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Inventory</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <img src={'http://localhost:3001/product_images/'+product.product_image} alt={product.product_name} style={{ width: '100px' }} />
              </td>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
