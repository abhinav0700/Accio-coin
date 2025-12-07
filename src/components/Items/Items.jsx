import React from 'react'
import './Items.css'

const Items = ({ coin }) => {
  return (
    <div className='Item-container'>
      <div className='Item-card'>

        <img 
          src={coin.image} 
          alt={coin.name} 
          className="coin-image" 
        />

        <h3 className="coin-name">{coin.name}</h3>
        <span className="coin-symbol">{coin.symbol.toUpperCase()}</span>

        <p className="coin-price">${coin.current_price.toLocaleString()}</p>

        <p className="coin-volume">
          ${coin.total_volume.toLocaleString()}
        </p>

        <p className={`coin-change ${coin.price_change_percentage_24h > 0 ? "green" : "red"}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>

        <p className="coin-marketcap">
          Mkt Cap : ${coin.market_cap.toLocaleString()}
        </p>

      </div>
    </div>
  )
}

export default Items;
