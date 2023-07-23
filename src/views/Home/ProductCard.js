import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const ProductCard = ({ item }) => {
  return (
<div className="card-container">
          <a className="card_link" rel="noreferrer" target="_blank" href={`/bestseller/${item.product_name}`}> 
        <div className="card" key={item.id}>
            <div className="card_img">
            <img className="prod_img" src={item.image} alt="product_img"/>

            </div>
            <div className="item_details">
              <div className="product_details">

                <div className="item_name_container">

                <Link className="text-decoration-none text-black" to={`/bestseller/${item.product_name}`}>
                <h5 className="item_name">{item.product_name}</h5>
                </Link>
                </div>

  
                <div className="product_price_container">
                <p className="product_price">₱{item.price}</p>
                </div>
  
              </div>
  
              <div className="btn add_cart">Add to Cart</div>
            </div>
          </div>
          </a>
        </div>
  );
};

export default ProductCard;