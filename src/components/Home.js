import React, { useState } from 'react';
import Search from './Search';

const Home = () => {
  const [description] = useState('All US Stocks');
  const listOfStocks = [{
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 47.21,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    type: 'stock',
  }, {
    symbol: 'SPY.',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 47.21,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    type: 'stock',
  }, {
    symbol: 'SPY.',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 47.21,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    type: 'stock',
  }, {
    symbol: 'SPY.',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'SPY',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }, {
    symbol: 'CMCSA',
    name: 'Comcast Corporation',
    price: 47.21,
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    type: 'stock',
  }, {
    symbol: 'SPY.',
    name: 'SPDR S&P 500 ETF Trust',
    price: 432.17,
    exchange: 'New York Stock Exchange Arca',
    exchangeShortName: 'AMEX',
    type: 'etf',
  }];
  let counter = 1;
  let stockClass = '';

  const PrintStocks = ({ list }) => list.map((stock) => {
    stockClass = 'light';
    if (counter === 1 || counter === 4) stockClass = 'dark';
    counter += 1;
    if (counter === 5) counter = 1;
    return (
      <li className={stockClass} key={stock.symbol}>
        <h1>{stock.symbol}</h1>
        <h2>{stock.name}</h2>
        <p>
          Price:
          {' $'}
          {stock.price}
        </p>
      </li>
    );
  });

  return (
    <main>
      <Search />
      <section className="description">
        <p>{description}</p>
      </section>
      <ul>
        <PrintStocks list={listOfStocks} />
      </ul>
    </main>
  );
};

export default Home;
