import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const Search = () => {
  const [stockName] = useState('');
  return (
    <section className="search">
      <form>
        <label htmlFor="stock-name">
          <input id="stock-name" name="stockName" type="text" placeholder="Search name or symbol" value={stockName} required />
        </label>
        <button type="submit" aria-label="search"><BsSearch style={{ color: 'white', fontSize: '1.2rem' }} /></button>
      </form>
    </section>
  );
};

export default Search;
