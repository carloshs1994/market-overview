import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import PrintStocks from './PrintStocks';
import { getStocksFromAPI } from '../redux/home/home';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [description] = useState('Most Active Stocks');
  const listOfStocks = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocksFromAPI());
  }, []);

  const filteredList = listOfStocks.filter(
    (stock) => stock.name.toLowerCase().includes(searchValue.toLowerCase())
    || stock.symbol.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <main>
      <section className="search">
        <form onSubmit={(e) => {
          e.preventDefault();
          setSearchValue('');
        }}
        >
          <label htmlFor="stock-name">
            <input onChange={(e) => setSearchValue(e.target.value)} id="stock-name" name="stockName" type="text" placeholder="Search name or symbol" value={searchValue} required />
          </label>
          <button type="submit" aria-label="search"><BsSearch style={{ color: 'white', fontSize: '1.2rem' }} /></button>
        </form>
      </section>
      <section className="description">
        <p>
          {(searchValue === '')
            ? `Showing the ${listOfStocks.length} ${description}`
            : `Results for "${searchValue}"`}
        </p>
      </section>
      <ul>
        {(searchValue === '')
          ? (<PrintStocks list={listOfStocks} />)
          : (<PrintStocks list={filteredList} />)}
      </ul>
    </main>
  );
};

export default Home;
