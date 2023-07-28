import React, { createContext, useState, useContext, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem("phoneNumber") || "");
  const [address, setAddress] = useState(localStorage.getItem("address") || "");
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName") || "");
  const [lastName, setLastName] = useState(localStorage.getItem("lastName") || "");

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

  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber]);

  useEffect(() => {
    localStorage.setItem("address", address);
  }, [address]);

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
    // Clear the stored firstName, lastName on logout
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setAddress("");
  };

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  useEffect(() => {
    saveCartToLocalStorage(cartItems); // Call saveCartToLocalStorage whenever cartItems change
  }, [cartItems]);

  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };


  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
      toast.success("Successfully Updated Cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
      toast.success("Successfully Added to Cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
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
        setCartItems,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
