import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import "./cart_page.css"
import product_01 from "../../assets/images/cart_products/product_01.png"
import product_02 from "../../assets/images/cart_products/product_02.png"
import Counter from "./counter.js"
import RemoveButton from "./remove.js"
import Footer2 from "../../components/Footer2/Footer2";
import { Button } from "bootstrap";

const Cart = ()=> {

    return (
        <DefaultLayout >

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

            <div className="cart-div">
            <table className="cart-table mx-auto">
                <thead className="cart-header">
                    <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Total</th>
                    <th>Remove</th>
                    </tr>
                </thead>
                <tbody className="cart-body">
                    <tr>
                    <td><img className="product_image" src={product_01} alt="product-01"></img></td>
                    <td>Ibuprofen</td>
                    <td>P55.00</td>
                    <td><Counter /></td>
                    <td>P55.00</td>
                    <td> <RemoveButton /></td>
                    </tr>
                    <tr>
                    <td><img className="product_image" src={product_02} alt="product-01"></img></td>
                    <td>Bioderma</td>
                    <td>P55.00</td>
                    <td>
                    <div>
                        {/* <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p> */}
                        <Counter />
                    </div>
                    </td>
                    <td>P55.00</td>
                    <td>
                        <RemoveButton />
                    </td>
                    </tr>
                </tbody>
            </table>

            <div className=" checkout_container d-flex justify-content-end mt-3">
                <button className="checkout_btn "> Proceed to Checkout </button>
            </div>

            </div>


            
            </div>
            {/* <Footer/>
            <Footer2/> */}
        </DefaultLayout>
    )
}


export default Cart;