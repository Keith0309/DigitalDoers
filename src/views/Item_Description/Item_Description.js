import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for navigation
import pharmacy_products from '../../assets/products_list/pharmacy_products';
import Header from '../../components/Header/Header';
import { Link } from "react-router-dom";
import Footer2 from '../../components/Footer2/Footer2';
import './ItemDescription.css'
import Counter from "../Cart_Page/counter.js"
import DefaultLayout from '../../components/Layout/DefaultLayout/DefaultLayout';

const ProductDescriptionPage = () => {



  const { product_name } = useParams();
  const item = pharmacy_products.find((item) => item.product_name === String(product_name));

  if (!item) {
    return <div>Product not found!</div>;
  }

    return (

      <DefaultLayout >
      <div className="container p-0">
      <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i> 
            <Link className="directory_link " to="/pharmacy">
              Pharmacy
            </Link>
            <i className="bi bi-chevron-right"></i>
            <Link className="directory_link " to="/pharmacy">
            {item.category}
            </Link>
            <i className="bi bi-chevron-right"></i>
            {item.product_name}
          </p>
        </div>

      <div key={item.id} className='d-flex justify-content-around mt-5'>
        <div className="card_img img_container">
            <img className="prod_img_desc" src={item.image} alt={item.product_name}/>
        </div>

        <div className='item_desc'>

          <div >
            <h1 className='itemName_desc'>{item.product_name}</h1>
            <p className='itemPrice_desc'>Price: ₱{parseFloat(item.price).toFixed(2)}</p>

          </div>

          <div className='d-flex justify-content-start mt-5'>
          <div className='counter_desc'>
          <Counter />
          </div>

          <div>
              <button className="btn add_cart_description" >Add to Cart</button>
          </div>
          </div>

          <div className='mt-5'>
          <p>{item.description}</p> 
          </div>
        </div>       

      </div>
      </div>

      </DefaultLayout>
  );
};

export default ProductDescriptionPage;