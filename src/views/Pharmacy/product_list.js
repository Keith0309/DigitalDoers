import React, { useState } from 'react';
import FilterSearch from './FilterSearch';
import Results from './Results';
import pharmacy_products from "../../assets/products_list/pharmacy_products"
import "./product_list.css"
const MainContent = ( addToCart ) => {

  const [categories, setCategories] = useState(['Anti-depressant', 'Cold Remedies', 'Multivitamins']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const [cartItems, setCartItems] = useState([]);
  

  const handleCategoryChange = event => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = event => {
    setSortOption(event.target.value);
  };

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const data = pharmacy_products;
  
  return (
    <div>
      <FilterSearch
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        sortOption={sortOption}
        onSortChange={handleSortChange}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onClearSearch={handleClearSearch}
      />
      <Results data={data}
        selectedCategory={selectedCategory}
        sortOption={sortOption}
        searchTerm={searchTerm}
        addToCart={addToCart} />
    </div>
);

}

export default MainContent;

