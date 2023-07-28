import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import { Link } from "react-router-dom";
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import Counter from "./counter.js";
import RemoveButton from "./remove.js";
import "./cart_page.css";
import Pharmacy_Products from "../../assets/products_list/pharmacy_products";
import img_placeholder from "../../assets/images/imgp.png";

const Cart = () => {
  const [quantity, setQuantity] = useState();  

  const handleQuantityChange = (count) => {
    // Here, we receive the value from the Counter component and set it in the state.
    setQuantity(count);

  };

  const itemCount = quantity;
  console.log("quantity", quantity);

  ////////////////////////////////
  const { isAuthenticated, cartItems } = useAuth();

  const [isEmpty, setisEmpty] = useState(false);

  useEffect(() => {
    setisEmpty(cartItems.length === 0);
  }, [cartItems]);

  ////////////////////////////////

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
                    <td>{(parseFloat(item.price).toFixed(2))}</td>
                    <td>
                    <Counter handleQuantityChange={handleQuantityChange}/>
                    </td>
                    <td>{parseFloat(itemCount * item.price).toFixed(2)}</td>
                    <td>
                      {" "}
                      <RemoveButton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {isAuthenticated ? (
              <>            <h4 className="fw-bold border-bottom border-2 pb-3">Files</h4>
              {/* Prescription / PWD/Senior ID*/}
              <div className="row text-center">
                <div className="col">
                  <h5 className="pt-4 fw-bold">Prescription</h5>
                  <img
                    className="rounded w-75 py-2"
                    src={img_placeholder}
                    alt="Profile_Picture"
                    draggable="false"
                  ></img>
                </div>
                <div className="col">
                  <h5 className="pt-4 fw-bold">PWD/Senior ID</h5>
                  <img
                    className="rounded w-75 py-2"
                    src={img_placeholder}
                    alt="Profile_Picture"
                    draggable="false"
                  ></img>
                </div>
              </div>
              <div className="row text-center mt-3">
                <div className="col">
                  <input type="file" id="uploadPrescription" hidden/>
                  <label for="uploadPrescription" className="rounded upload-btn fs-5 border-0 pe-3"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload File</label>
                </div>
                <div className="col">
                  <input type="file" id="uploadPwd" hidden/>
                <label for="uploadPwd" className="rounded upload-btn fs-5 border-0 pe-3"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload File</label>
                </div>
              </div>

              <div className=" checkout_container d-flex justify-content-end mt-3">
              <button className="checkout_btn "> Proceed to Checkout </button>
            </div>
              </>

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
