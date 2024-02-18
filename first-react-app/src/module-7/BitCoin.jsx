import React, { useState, useEffect } from 'react';

const BitcoinRates = () => {
    const [currency, setCurrency] = useState('USD');
    const [price, setPrice] = useState(null);

    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

    useEffect(() => {
        const fetchBitcoinPrice = () => {
            fetch(`https://blockchain.info/ticker`)
                .then(response => response.json())
                .then(json => {
                    const priceData = json[currency];
                    if (priceData) {
                        setPrice(priceData.last);
                    }
                })
        };
        fetchBitcoinPrice();
    }, [currency]);

    const options = currencies.map(curr => (
        <option value={curr} key={curr}>
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
                Current Bitcoin Price in {currency} ${price}
            </p>
        </div>
    );
};

export default BitcoinRates;