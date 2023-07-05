import best_sellers from "../../assets/best_sellers/best_seller_data";
import React from "react";
import "./best_seller.css"

const Best_Products = () => {

    const listItems = best_sellers.map((item) => 
    <div className="card-container">
      <div className="card" key={item.id}>
          <div className="card_img">
            <img className="prod_img" src={item.image} alt="product_img"/>
          </div>
          <div className="item_details">
            <div className="product_details">

              <div className="item_name_container">
                <a rel="noreferrer" href="" className="text-decoration-none text-black" >
                <h5 className="item_name">{item.product_name}</h5>
                </a>
              </div>

              <div className="item_description_container">
                <p className="item-description">{item.description}</p>
              </div>

              <div className="product_price_container">
              <p className="product_price"><span>{item.currency}</span>{item.price}</p>
              </div>

            </div>

            <div className="btn add_cart">Add to Cart</div>
          </div>
        </div>
      </div>
    );

return (
        
    <div className="main-content">
    {listItems}
  </div>
)

}

export default Best_Products;

