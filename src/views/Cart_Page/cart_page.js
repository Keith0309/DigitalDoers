import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import Counter from "./counter.js";
import RemoveButton from "./remove.js";
import "./cart_page.css";

const Cart = () => {
  const { isAuthenticated, cartItems } = useAuth();

  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    setisEmpty(cartItems.length === 0);
  }, [cartItems]);

  return (
    <DefaultLayout>
      {/* Home > Pharmacy */}
      <div className="container">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i> Cart
          </p>
        </div>

        <div className="ms-5 mt-3">
          <h1>Cart Page</h1>
        </div>
        {isEmpty ? (
          <div className="container text-center my-5 py-5">
            <h2 className="my-5 py-5">Your Cart is empty</h2>
          </div>
        ) : (
          <div className="cart-div">
            <table className="cart-table mx-auto">
              <thead className="cart-header">
                <tr>
                  <th>Image</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="cart-body">
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img
                        className="product_image"
                        src={
                          "http://localhost:3001/product_images/" +
                          item.product_image
                        }
                        alt={item.product_name}
                      />
                    </td>
                    <td>{item.product_name}</td>
                    <td>{item.price}</td>
                    <td>
                      <Counter />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      {" "}
                      <RemoveButton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isAuthenticated ? (
            <div className=" checkout_container d-flex justify-content-end mt-3">
              <button className="checkout_btn "> Proceed to Checkout </button>
            </div>
            ) : (
            <div className=" checkout_container d-flex justify-content-end mt-3">
              <button className="checkout_btn "><Link className="text-decoration-none text-white" to="/signin"> Proceed to Checkout </Link></button>
            </div>
            )}
            <div className="mt-5 pt-5"></div>
          </div>
        )}
       
      </div>

      
    </DefaultLayout>
  );
};

export default Cart;
