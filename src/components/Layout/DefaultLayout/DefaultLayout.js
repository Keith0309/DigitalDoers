import React from 'react';
import Header from "../../Header/Header";

const DefaultLayout = ({ children, isAuthenticated, firstName  }) => {

  
  return (
    <div >
      <Header isAuthenticated={isAuthenticated} firstName={firstName}/>
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
