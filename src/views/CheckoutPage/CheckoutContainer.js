import React , {useState, useEffect} from 'react'
import { useAuth } from '../../AuthContext';
import "./CheckoutPage.css"


const CheckoutContainer = () => {


    const { isAuthenticated, cartItems } = useAuth();
    const [isEmpty, setisEmpty] = useState(false);
    useEffect(() => {
        setisEmpty(cartItems.length === 0);
      }, [cartItems]);


    const initialFormData = {
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        paymentCard: '',
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
    <div class>
    <div className='d-flex justify-content-center'>
        <div className='bg-light p-4 mt-2 mx-2'>
            <h1>Contact Information</h1>
            <form onSubmit={handleSubmit}>
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
                    <input type="text" name="zipCode" 
                    className='form-control'
                    value={formData.paymentCard} onChange={handleChange} placeholder="4242 4242 4242 4242" />
                    
                    {formErrors.paymentCard && <span className="error">{formErrors.paymentCard}</span>}
                </div>

                <div className='mb-3 d-flex '>
                <div className='me-3'>
                    <input
                        type="text"
                        name="firstName"
                        className='form-control'
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Expiration date'
                    />

                    {formErrors.firstName && <span className="error">{formErrors.firstName}</span>}
                </div>

                <div>
                    <input
                        type="text"
                        name="lastName"
                        className='form-control'
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Security Code'
                    />

                    {formErrors.lastName && <span className="error">{formErrors.lastName}</span>}
                </div>
                </div>


                <button type="submit">Place Order</button>
                {isSubmitted && <p>Form submitted successfully!</p>}
            </form>
        </div>

        <div className='bg-light p-4 my-2 mx-2'>
            <h1>Total</h1>
            <div>
            {cartItems.map((item) => (
                <li className='mb-2 '>{item.product_name} - quantity - subtotal </li>
            ))}s

            <div className='totalAmount'>
            <p className='totalAmount'>Total Amount: Total Amount </p>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CheckoutContainer