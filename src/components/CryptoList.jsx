import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Items from './Items/Items';

const CryptoList = () => {
  const API_URL =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

  const [coins, setCoins] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortType, setSortType] = useState(null); // 'mktcap' | 'percentage' | null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error('Error fetching coins:', error);
      }
    };

    fetchData();
  }, []);

  // 1) Filter by search text (name or symbol)
  const filteredCoins = coins.filter((coin) => {
    const text = searchText.toLowerCase();
    return (
      coin.name.toLowerCase().includes(text) ||
      coin.symbol.toLowerCase().includes(text)
    );
  });

  // 2) Sort based on sortType
  const sortedCoins = [...filteredCoins].sort((a, b) => {
    if (sortType === 'mktcap') {
      return b.market_cap - a.market_cap; // highest market cap first
    }
    if (sortType === 'percentage') {
      return (
        b.price_change_percentage_24h - a.price_change_percentage_24h
      ); // top gainers first
    }
    return 0; // no sorting
  });

  return (
    <div>
      <Header
        searchText={searchText}
        onSearchChange={(value) => setSearchText(value)}
        onSortByMktCap={() => setSortType('mktcap')}
        onSortByPercentage={() => setSortType('percentage')}
      />

      <div className="Item-container">
        {sortedCoins.map((coin) => (
          <Items key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default CryptoList;
