import React, { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();

  const [firstName, setFirstName] = useState(
    localStorage.getItem("firstName") || ""
  );
  const [lastName, setLastName] = useState(
    localStorage.getItem("lastName") || ""
  );
  

  useEffect(() => {
    localStorage.setItem("isAuthenticated", isAuthenticated);
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
  }, [firstName]);

  useEffect(() => {
    localStorage.setItem("lastName", lastName);
  }, [lastName]);
  useEffect(() => {
    localStorage.setItem("email", email);
  }, [email]);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
    // Clear the stored firstName, lastName on logout
    setFirstName("");
    setLastName("");
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCartItems) => [...prevCartItems, item]);
    toast.success('Successfully Added to Cart', {
      position: 'top-right',
      autoClose: 1000, // Time in milliseconds to automatically close the notification
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        phoneNumber,
        setPhoneNumber,
        handleLogout,
        address,
        setAddress,
        cartItems,
        addToCart,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
    
  );
};

export default AuthProvider;
