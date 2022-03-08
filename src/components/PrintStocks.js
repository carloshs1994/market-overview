import React from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let counter = 1;

const PrintStocks = ({ list }) => {
  if (list.length === 0) return <li style={{ width: '100%' }}><p style={{ textAlign: 'center' }}>No Match :(</p></li>;
  return list.map((stock) => {
    let stockClass = 'light';
    if (counter === 1 || counter === 4) stockClass = 'dark';
    counter += 1;
    if (counter === 5) counter = 1;
    return (
      <Link id={stock.symbol} key={stock.symbol} to={`/details/${stock.symbol}`}>
        <li className={stockClass}>
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
      </Link>
    );
  });
};
PrintStocks.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({ root: PropTypes.string })).isRequired,
};

export default PrintStocks;
