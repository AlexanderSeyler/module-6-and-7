import React, { useState, useEffect } from 'react';
import useData from './BitcoinCustomHook';
import { useEmoji } from '../context/EmojiContext'; 

const BitcoinHooks = () => {
  const [currency, setCurrency] = useState('USD');
  const [price, setPrice] = useState(null);
  const { isHappy, changeMood } = useEmoji();
  

  const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
  const url = 'https://blockchain.info/ticker';

  const { data: bitcoinData, loading, error } = useData(url);


  useEffect(() => {
    if (bitcoinData && bitcoinData[currency]) {
      setPrice(bitcoinData[currency].last);
    }
  }, [bitcoinData, currency]);

  const options = currencies.map(curr => (
    <option key={curr} value={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>
        Current Bitcoin Price in {currency}: ${price}
      </p>
      <button onClick={changeMood}>Change Mood</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <p>
          Current Emoji: {isHappy ? '😊' : '😢'}
        </p>
      )}
    </div>
  );
};

export default BitcoinHooks;