import React, { useEffect, useState } from "react";


const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false";

function Tracker() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setCoins(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000); // Refresh data every 10 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="container" >

    
    <div className="container">
      <h1 >CryptoCurrency Price Tracker</h1>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <td className="coin">
                <img src={coin.image} alt={coin.name} />
                {coin.name} ({coin.symbol.toUpperCase()})
              </td>
              <td>${coin.current_price.toLocaleString()}</td>
              <td className={coin.price_change_percentage_24h >= 0 ? "green" : "red"}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Tracker;
