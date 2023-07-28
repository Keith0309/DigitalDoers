import React , {useState, useEffect} from 'react'
import { useAuth } from '../../AuthContext';
import "./CheckoutPage.css"
import paymentmethod from "../../assets/images/USPaymentMethodsKlarna.jpeg"


const CheckoutContainer = () => {

    const { isAuthenticated, cartItems } = useAuth();
    const [isEmpty, setisEmpty] = useState(false);
    useEffect(() => {
        setisEmpty(cartItems.length === 0);
      }, [cartItems]);

      const [totalAmount, setTotalAmount] = useState();


    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        paymentCard: '',
        secCode: '',
        expDate:'',
      };
    
      const [formData, setFormData] = useState(initialFormData);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        // Clear the error message when the user starts typing
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [name]: '',
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const errors = {};
        // Check for empty fields and set error messages accordingly
        Object.entries(formData).forEach(([key, value]) => {
          if (value.trim() === '') {
            errors[key] = 'This field is required.';
          }
        });
    
        if (Object.keys(errors).length === 0) {
          // Handle the form submission logic here (e.g., send data to the server)
          console.log('Form submitted:', formData);
          setIsSubmitted(true);
          setFormData(initialFormData); // Reset the form fields after successful submission
        } else {
          // Display error messages for empty fields
          setFormErrors(errors);
        }
      };

  return (
    <div>
         <form onSubmit={handleSubmit}>
    <div className='d-flex justify-content-center'>
        <div className='bg-light p-4 mt-2 mx-2'>
            <h1>Contact Information</h1>
           
                <h5 className='fw-bold'>Personal Information</h5>
            <div className='mb-3 d-flex'>
                <div className='me-3'>
                    <label>
                    First Name:
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        className='form-control'
                        value={formData.firstName}
                        onChange={handleChange}
                    />

                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </div>

                <div>
                    <label>
                    Last Name:
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        className='form-control'
                        value={formData.lastName}
                        onChange={handleChange}
                    />

                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                </div>
                </div>

                <div className='mb-3'>
                    <label>
                    Email:
                    </label>
                    <input type="email" name="email"
                    className='form-control'
                    value={formData.email} onChange={handleChange} />                    
                    
                    {formErrors.email && <span className="error">{formErrors.email}</span>}
                </div>

                <div className='mb-3'>
                    <label>
                    Address:
                    </label>
                    <input type="text" name="address"
                    className='form-control'
                    value={formData.address} onChange={handleChange} />
                    
                    {formErrors.address && <span className="error">{formErrors.address}</span>}
                </div>

                <div className='mb-3'>
                    <label>
                    City:
                    </label>
                    <input type="text" name="city"
                    className='form-control'value={formData.city} onChange={handleChange} />

                    {formErrors.city && <span className="error">{formErrors.city}</span>}
                </div>

                <div className='mb-3'>
                    <label>
                    Zip Code:
                    </label>
                    <input type="text" name="zipCode" 
                    className='form-control'
                    value={formData.zipCode} onChange={handleChange} />
                    
                    {formErrors.zipCode && <span className="error">{formErrors.zipCode}</span>}
                </div>

                <h5 className='fw-bold'>Payment Information</h5>

                <div className='mb-3'>
                    <label>
                    Card Information
                    </label>
                    <div>
                    <img src={paymentmethod} alt="payment_method" className='paymentMethod my-2'></img>
                    </div>
                    <input type="text" name="paymentCard" 
                    className='form-control'
                    value={formData.paymentCard} onChange={handleChange} placeholder="4242 4242 4242 4242" />
                    
                    {formErrors.paymentCard && <span className="error">{formErrors.paymentCard}</span>}
                </div>

                <div className='mb-3 d-flex '>
                <div className='me-3'>
                    <input
                        type="text"
                        name="expDate"
                        className='form-control'
                        value={formData.expDate}
                        onChange={handleChange}
                        placeholder='Expiration date'
                    />

                    {formErrors.expDate && <span className="error">{formErrors.expDate}</span>}
                </div>

                <div>
                    <input
                        type="text"
                        name="secCode"
                        className='form-control'
                        value={formData.secCode}
                        onChange={handleChange}
                        placeholder='Security Code'
                    />

                    {formErrors.secCode && <span className="error">{formErrors.secCode}</span>}
                </div>
                </div>


                {isSubmitted && <p>Form submitted successfully!</p>}
            
        </div>

        <div className='bg-light p-4 my-2 mx-2'>
            <h1>Total</h1>
            <div>
            {cartItems.map((item) => (
                <div key={item.id}>
                <li className='mb-2 '>{item.product_name}</li>   
                <div className='d-flex justify-content-end'>
                <p className='fw-bolder'> x{item.quantity} - <span>{(item.price * item.quantity).toFixed(2)}</span></p>
                </div>
                </div>

                
            ))}

            <div className='totalAmount'>
            <p className='totalAmount'>Total Amount:  {totalAmount} </p>
            </div>

            <div >
                <div className='mb-2'>
                <input type="file" id="uploadPrescription" hidden/>
                <label for="uploadPrescription" className="text-center w-100 rounded upload-btn fs-5 border-0 p-2 text-decoration-none"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload Prescription</label>
                </div>
                
                <div>
                <input type="file" id="uploadID" hidden/>
                <label for="uploadID" className="w-100 text-center rounded upload-btn fs-5 border-0 p-2 text-decoration-none"><i className="bi bi-file-earmark-arrow-up-fill mx-2"></i>Upload PWD/Senior ID</label>
                </div>
            </div>

            <div className=" checkout_container d-flex justify-content-center mt-5">
                <button className=" w-50 checkout_btn"> Place Order </button>
            </div>
            </div>
        </div>
        
    </div>
    </form>
    </div>
  )
}

export default CheckoutContainer