import React, { useState } from 'react';

const Counter = ({handleQuantityChange}) => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleChange = (event) => {
    const { value } = event.target;
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
    }
    handleQuantityChange(count);
  };

  // const handleInputChange = (event) => {
  //   const inputValue = event.target.value;
  //   setCount(inputValue);
  //   handleChange(inputValue); // Pass the input value to the parent component (Cart_page)
  // };

  const counterStyle = { 
    display: "flex",
  }

  const inputStyle = { 
    width: "50px",
    textAlign: "center"
  }

  const increaseStyle = { 
    padding: "5px 10px",
    textAlign: "center",
    backgroundColor: "#36a148",
    borderRadius: "5px",
    border: "1px solid white"
  }

  const decreaseStyle = { 
    padding: "5px 10px",
    textAlign: "center",
    backgroundColor: "#36a148",
    borderRadius: "5px",
    border: "1px solid white"
  }


  return (
    <div style={counterStyle} className='justify-content-center'>
      <button style={decreaseStyle} className='mx-2 text-white' onClick={handleDecrement}>
      <i className="bi bi-chevron-left"></i>
      </button>
      <input style={inputStyle} type="text" value={count} onChange={handleChange} />
      <button style={increaseStyle} className='mx-2 text-white' onClick={handleIncrement}>
      <i className="bi bi-chevron-right"></i>
      </button>
    </div>
  );
};

export default Counter;