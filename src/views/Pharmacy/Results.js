import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Results = ({ data, selectedCategory, sortOption, searchTerm }) => {
  const [products, setProducts] = useState([]);

   // Fetch the product data from the backend API
   useEffect(() => {
    axios.get('http://localhost:3001/getproducts') 
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const filteredData = data.filter(item => {
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory;
    const matchesSearch = item.product_name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price;
    } else if (sortOption === 'name') {
    return a.product_name.localeCompare(b.product_name);
    }
  });

  if (sortedData.length === 0) {
    return <div className='noMatch text-center'>
        <h3>No results found. Please try again.</h3>
        </div>
  }

  return (
    <div className="row row-cols-4">
      {products.map(product => (
        <div className="card-container">
        <div className="card" key={product.id}>
        <a className="card_link" href={`/${product.category}.toLowerCase()}/${product.product_name}`}> 
            <div className="card_img">
            <img className="prod_img" src={'http://localhost:3001/product_images/'+product.product_image} alt={product.product_name}/>
            </div>
            <div className="item_details">
              <div className="product_details">
                <div className="item_name_container">
                <Link className="text-decoration-none text-black" to={`/${product.category}.toLowerCase()}/${product.product_name}`}>
                <h5 className="item_name">{product.product_name}</h5>
                </Link>
                </div>
                <div className="product_price_container text-decoration-none text-black">
                <p className="product_price">₱{product.price}</p>
                </div>
  
              </div>
  
              
            </div>
            </a>
            <div>
              <button className="btn add_cart" >Add to Cart</button>
              </div>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Results;
