import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='Header'>
      <input type="text" placeholder="Search by name or symbol" />
      <button className='Header-button'>Sort by MKT Cap</button>
      <button className='Header-button'>Sort by Percentage</button>
    </div>
  )
}

export default Header