import React, {useState} from 'react';
import "./FilterSearch.css"

const FilterSearch = ({ categories, selectedCategory, onCategoryChange, onSearch, onClear, searchTerm }) => {

  return (
    <div className='d-flex justify-content-between my-3'>
        <div className=''>
      <select className='category_dropdown ps-2' value={selectedCategory} onChange={onCategoryChange}>
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      </div>
      <div className="search_med_div">
      <input  className="search_medicine ps-2" type="text" placeholder="Search" value={searchTerm} onChange={onSearch} />
      <button className='clearSearch_btn' onClick={onClear}>
      <i class=" bi bi-backspace-fill"></i>
      </button>
      </div>
    </div>
  );
};

export default FilterSearch;