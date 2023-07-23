import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for navigation
import pharmacy_products from '../../assets/products_list/pharmacy_products';

const ProductDescriptionPage = () => {
  const { product_name } = useParams();
  const item = pharmacy_products.find((item) => item.product_name === String(product_name));

  if (!item) {
    return <div>Product not found!</div>;
  }

    return (
      <div>
      <div key={item.id}>
        <h1>{item.product_name}</h1>
        <img src={item.image} alt={item.product_name} />
        <p>Price: ${item.price}</p>
        <p>{item.description}</p>        
      </div>
      </div>
  );
};

export default ProductDescriptionPage;