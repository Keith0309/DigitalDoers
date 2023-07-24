import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true"
  );
  const [email, setEmail] = useState();
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

  const handleLogout = () => {
    setIsAuthenticated(false); // Set isAuthenticated to false on logout
    // Clear the stored firstName, lastName on logout
    setFirstName("");
    setLastName("");
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
