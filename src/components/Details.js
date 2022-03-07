import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { getStockDetails } from '../redux/details/details';
import PrintDetails from './PrintDetails';

const Details = () => {
  const ticker = useParams();
  const stock = useSelector((state) => state.detailsReducer[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStockDetails(ticker));
  }, []);
  return (
    <main>
      {(stock)
        ? (
          <>
            <section className="stock">
              <h1>{ticker.symbol}</h1>
              <h2>{stock.companyName}</h2>
              <p>
                Price:
                {' $'}
                {stock.price}
                {' '}
                {(stock.changes <= 0)
                  ? (
                    <span style={{ color: 'rgb(220, 0, 0)' }}>
                      <IoIosArrowDown />
                      {stock.changes}
                    </span>
                  )
                  : (
                    <span style={{ color: 'rgb(126, 255, 126)' }}>
                      <IoIosArrowUp />
                      {stock.changes}
                    </span>
                  )}
              </p>
            </section>
            <section className="description">
              <p>{`Detailed Stats About ${stock.symbol}`}</p>
            </section>
            <ul className="details">
              <PrintDetails stockDetails={stock} />
            </ul>
          </>
        ) : (<h1>loading</h1>)}
    </main>
  );
};

export default Details;
