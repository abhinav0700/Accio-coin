import React from 'react';
import './Header.css';

const Header = ({ searchText, onSearchChange, onSortByMktCap, onSortByPercentage }) => {
  return (
    <div className='Header'>
      <input
        type="text"
        placeholder="Search by name or symbol"
        className='Search'
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <button className='Header-button' onClick={onSortByMktCap}>
        Sort by MKT Cap
      </button>
      <button className='Header-button' onClick={onSortByPercentage}>
        Sort by Percentage
      </button>
    </div>
  );
};

export default Header;
