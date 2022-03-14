import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import PrintStocks from './PrintStocks';
import { getStocksFromAPI } from '../redux/home/home';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [description] = useState('Most Active Stocks');
  const listOfActiveStocks = useSelector((state) => state.homeReducer.activeStocks);
  const listOfStocksByName = useSelector((state) => state.homeReducer.stocksByName.table);
  const listOfStocksBySymbol = useSelector((state) => state.homeReducer.stocksBySymbol.table);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStocksFromAPI());
  }, []);

  const SearchStocks = () => {
    const key = searchValue.toUpperCase();
    const index = (typeof (key[0]) === 'number') ? key[0] : key.charCodeAt(0) - 55;
    const filteredList = [
      ...listOfStocksBySymbol[index].filter(
        (stock) => stock.symbol.toLowerCase().includes(searchValue.toLowerCase())
        || stock.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
      ...listOfStocksByName[index].filter(
        (stock) => stock.name.toLowerCase().includes(searchValue.toLowerCase()),
      ),
    ];
    return (<PrintStocks list={filteredList} />);
  };

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
            ? `Showing the ${listOfActiveStocks.length} ${description}`
            : `Results for "${searchValue}"`}
        </p>
      </section>
      <ul>
        {(searchValue === '')
          ? (<PrintStocks list={listOfActiveStocks} />)
          : (<SearchStocks />)}
      </ul>
    </main>
  );
};

export default Home;
