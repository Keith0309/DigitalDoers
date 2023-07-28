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

  // Function to save cart items to local storage
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  // Function to load cart items from local storage on initial load
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []); // Run only once when the component mounts

  // Function to update cart items and save to local storage
  const updateCartItems = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    saveCartToLocalStorage(updatedCartItems); // Save to localStorage on every update
  };

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    saveCartToLocalStorage(cartItems);
    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update the quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems, () => {
        // Save cart items to local storage after adding an item
        saveCartToLocalStorage(updatedCartItems);
      });
      toast.success("Successfully Updated Cart", {
        position: "top-right",
        autoClose: 1000, // Time in milliseconds to automatically close the notification
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...item, quantity: 1 },
      ], () => {
        // Save cart items to local storage after adding an item
        saveCartToLocalStorage([...cartItems, { ...item, quantity: 1 }]);
      });
      toast.success("Successfully Added to Cart", {
        position: "top-right",
        autoClose: 1000, // Time in milliseconds to automatically close the notification
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
        updateCartItems,
      }}
    >
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
