import React, { createContext, useState, useContext, useEffect  } from 'react';


const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem('isAuthenticated') === 'true'
    );
    const [firstName, setFirstName] = useState(localStorage.getItem('firstName') || '');
  
    useEffect(() => {
      localStorage.setItem('isAuthenticated', isAuthenticated);
    }, [isAuthenticated]);
  
    useEffect(() => {
      localStorage.setItem('firstName', firstName);
    }, [firstName]);
  
    const handleLogout = () => {
      setIsAuthenticated(false); // Set isAuthenticated to false on logout
      setFirstName(''); // Clear the stored firstName on logout
      // Add any other logout-related logic here (e.g., clearing local storage, session, etc.)
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, firstName, setFirstName, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
