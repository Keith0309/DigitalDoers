import React from 'react';
import Header from "../../Header/Header";
import {useState} from 'React';

const DefaultLayout = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFirstName('');
  };
  
  return (
    <div >
      <Header isAuthenticated={isAuthenticated} firstName={firstName} handleLogout={handleLogout} />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
