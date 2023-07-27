import React from 'react';
import { Link } from 'react-router-dom';

const Results = ({ data, selectedCategory, sortOption, searchTerm,  }) => {


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
    return 0;
  });

  if (sortedData.length === 0) {
    return <div className='noMatch text-center'>
        <h3>No results found. Please try again.</h3>
        </div>
  }

  return (
    <div className="row row-cols-4">
      {sortedData.map(item => (
        <div className="card-container">
        <div className="card" key={item.id}>
        <a className="card_link" href={`/${item.category.toLowerCase()}/${item.product_name}`}> 
            <div className="card_img">
            <img className="prod_img" src={'http://localhost:3001/product_images/'+item.product_image} alt={item.product_name}/>
            </div>
            <div className="item_details">
              <div className="product_details">
                <div className="item_name_container">
                <Link className="text-decoration-none text-black" to={`/${item.category.toLowerCase()}/${item.product_name}`}>
                <h5 className="item_name">{item.product_name}</h5>
                </Link>
                </div>
                <div className="product_price_container text-decoration-none text-black">
                <p className="product_price">₱{item.price}</p>
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
