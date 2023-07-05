import product_card from "../../assets/products_list/pharmacy_products";
import React from "react";
import "./product_list.css"
import Form from 'react-bootstrap/Form';
// import { useState } from "react";

const MainContent = () => {

  // const [data, setData] = useState(product_card);
  // const filterResult=(catItem)=> {
  //   const result=product_card.filter((curData)=>{
  //     return curData.product_card!==catItem;
  //   });
  //   setData(result)
  //   }


    console.log (product_card);
    const listItems = product_card.map((item) => 
    <div className="card-container">
      <div className="card" key={item.id}>
          <div className="card_img">
            <img className="prod_img" src={item.image} alt="product_img"/>
          </div>
          <div className="item_details">
            <div className="product_details">

              <div className="item_name_container">
              <a rel="noreferrer" href={item.product_name} className="text-decoration-none text-black" >
                <h5 className="item_name">{item.product_name}</h5>
              </a>
              </div>

              <div className="item_description_container">
                <p className="item-description">
                Aliquam at sapien faucibus, gravida neque a, imperdiet nulla.
                </p>
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
        
  <div>

    <div className="d-flex justify-content-between py-4">

        <div className="category_dropdown">
        <Form.Select aria-label="Default select example" >
          <option>All</option>
          <option value="1">Anti-depressants</option>
          <option value="2">Cold remedies</option>
          <option value="3">Multivitamins</option>
        </Form.Select>
        </div>



        <div>
          <input className="search_input p-3" type="text" placeholder="Search medicine by name" />
        </div>

    </div>

    <div className="main-content">
        {listItems}
      </div>
  </div>
);

}

export default MainContent;

