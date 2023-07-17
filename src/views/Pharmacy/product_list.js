import pharmacy_products from "../../assets/products_list/pharmacy_products";
import React, {useState} from "react";
import "./product_list.css"
// import Form from 'react-bootstrap/Form';
import FilterSearch from './FilterSearch';
import Results from './Results';

const MainContent = () => {

  const [categories, setCategories] = useState(['Anti-depressant', 'Cold Remedies', 'Multivitamins']);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
      setSearchTerm('');
    };
  
  return (
    <div>
      <FilterSearch
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onClear={handleClear}
      />
      <Results data={pharmacy_products} selectedCategory={selectedCategory} searchTerm={searchTerm} />
    </div>
);

}

export default MainContent;

