import React, { useState } from 'react';
import FilterSearch from './FilterSearch';
import Results from './Results';
import Pharmacy_Products from "../../assets/products_list/pharmacy_products"
import "./product_list.css"
const MainContent = ( addToCart ) => {

  const products = Pharmacy_Products();
  const [categories, setCategories] = useState(['Anti-depressants', 'Cold Remedies', 'Multivitamins']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  

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

  const data = products;
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

