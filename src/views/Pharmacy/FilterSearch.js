import React from 'react';
import "./FilterSearch.css"

const FilterSearch = ({
  categories,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  searchTerm,
  onSearchChange,
  onClearSearch,
 }) => {

  return (
    <div>
    <div className='d-flex justify-content-between my-3'>
        <div className=''>
      <select className='category_dropdown ps-2' value={selectedCategory} onChange={onCategoryChange}>
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      </div>

      <div className="search_med_div">
      <input  className="search_medicine ps-2" type="text" placeholder="Search" value={searchTerm} onChange={onSearchChange} />
      <button className='clearSearch_btn' onClick={onClearSearch}>
      <i class=" bi bi-backspace-fill"></i>
      </button>
      </div>
      </div>

      <div >
        <select className='sortDiv ps-2' value={sortOption} onChange={onSortChange}>
        <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>
    </div>
    
  );
};

export default FilterSearch;