import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

let counter = 1;

const PrintStocks = ({ list }) => list.map((stock) => {
  let stockClass = 'light';
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
        {' '}
        {(stock.change <= 0)
          ? (
            <span style={{ color: 'rgb(255, 152, 152)' }}>
              <IoIosArrowDown />
              {stock.change}
            </span>
          )
          : (
            <span style={{ color: 'rgb(126, 255, 126)' }}>
              <IoIosArrowUp />
              {stock.change}
            </span>
          )}
      </p>
    </li>
  );
});

export default PrintStocks;
