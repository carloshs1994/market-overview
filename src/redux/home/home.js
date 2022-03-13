import axios from 'axios';
import HashTable from '../../components/HashTable';

const STORE_STOCKS = 'market-overview/homeReducer/STORE_STOCKS';
const STORE_ALL_STOCKS = 'market-overview/homeReducer/STORE_ALL_STOCKS';
const initialState = {
  activeStocks: [],
  allStocks: [],
};

const storeActiveStocks = (payload) => ({
  type: STORE_STOCKS,
  payload,
});

const storeAllStocks = (payload) => ({
  type: STORE_ALL_STOCKS,
  payload,
});

export const getStocksFromAPI = () => async (dispatch) => {
  const resultMostActives = await axios.get('https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=58688fe7d21b8bb780234c39f6229ac3');
  dispatch(storeActiveStocks(resultMostActives.data));
  const stocks = new HashTable();
  const resultAllStocks = await axios.get('https://financialmodelingprep.com/api/v3/stock/list?apikey=58688fe7d21b8bb780234c39f6229ac3');
  resultAllStocks.data.forEach((stock) => {
    stocks.set(stock.symbol, stock);
  });
  dispatch(storeAllStocks(stocks));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_STOCKS:
      return { ...state, activeStocks: action.payload };
    case STORE_ALL_STOCKS:
      return { ...state, allStocks: action.payload };
    default:
      return state;
  }
};

export default reducer;
