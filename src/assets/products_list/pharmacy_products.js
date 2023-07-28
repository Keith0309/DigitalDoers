import { useState, useEffect } from 'react';
import axios from 'axios';

const Pharmacy_Products = () => {
    const [products, setProducts] = useState([]);
  
    // Fetch the product data from the backend API
    useEffect(() => {
      axios.get('http://localhost:3001/getproducts')
        .then(response => {
            setProducts([...response.data]);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }, []);
  
    // Render the products data once fetched
    return products;

  };

export default Pharmacy_Products;